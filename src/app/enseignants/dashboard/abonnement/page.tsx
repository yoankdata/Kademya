'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Loader2, DollarSign, Clock, Shield, Zap } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

interface SubscriptionData {
  abonnement_actif: boolean;
  abonnement_expire_le: string | null;
}

const ABONNEMENT_PRIX = 5000;
const ABONNEMENT_DUREE_JOURS = 30;

export default function SubscriptionPage() {
  const supabase = useSupabaseClient();
  const user = useUser();

  const [subData, setSubData] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentOperator, setPaymentOperator] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMessage, setPaymentMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  const fetchSubscriptionData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('professeurs')
        .select('abonnement_actif, abonnement_expire_le')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') throw error;

      setSubData((data ?? null) as SubscriptionData | null);
    } catch (err) {
      console.error("Erreur de récupération de l'abonnement:", err);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    fetchSubscriptionData();
  }, [fetchSubscriptionData]);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (!paymentOperator || !phoneNumber) {
      setPaymentMessage({
        type: 'error',
        text: 'Veuillez remplir tous les champs.',
      });
      return;
    }

    setIsProcessingPayment(true);
    setPaymentMessage({
      type: 'info',
      text: `Tentative de paiement via ${paymentOperator} au ${phoneNumber}... Validez sur votre téléphone.`,
    });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const now = new Date();
      let baseDate = now;

      if (
        subData?.abonnement_actif &&
        subData.abonnement_expire_le &&
        new Date(subData.abonnement_expire_le) > now
      ) {
        baseDate = new Date(subData.abonnement_expire_le);
      }

      baseDate.setDate(baseDate.getDate() + ABONNEMENT_DUREE_JOURS);

      const { error } = await supabase
        .from('professeurs')
        .update({
          abonnement_actif: true,
          abonnement_expire_le: baseDate.toISOString(),
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setPaymentMessage({
        type: 'success',
        text: `Paiement réussi ! Votre abonnement est actif jusqu’au ${baseDate.toLocaleDateString(
          'fr-FR',
        )}.`,
      });

      fetchSubscriptionData();
    } catch (err) {
      console.error('Erreur de paiement simulée:', err);
      setPaymentMessage({
        type: 'error',
        text: 'Échec du paiement. Vérifiez votre solde et réessayez.',
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600">
          Vous devez être connecté pour accéder à cette page.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-2" />
        Chargement des données d’abonnement...
      </div>
    );
  }

  const abonnement_actif = subData?.abonnement_actif ?? false;
  const abonnement_expire_le = subData?.abonnement_expire_le ?? null;

  const isExpired = !abonnement_actif;
  const expiryDate = abonnement_expire_le
    ? new Date(abonnement_expire_le).toLocaleDateString('fr-FR')
    : 'N/A';

  return (
    <DashboardLayout activePath="/enseignants/dashboard/abonnement">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Mon abonnement Kademya
      </h1>

      <div className="max-w-4xl space-y-8">
        <section
          className={`p-6 rounded-lg shadow-xl ${isExpired
              ? 'bg-red-50 border-t-4 border-red-600'
              : 'bg-green-50 border-t-4 border-green-600'
            }`}
        >
          <h2 className="text-2xl font-semibold mb-3">Statut actuel</h2>
          <div className="flex items-center space-x-4">
            <Clock
              className={`w-8 h-8 ${isExpired ? 'text-red-600' : 'text-green-600'
                }`}
            />
            <div>
              <p
                className={`text-xl font-bold ${isExpired ? 'text-red-600' : 'text-green-600'
                  }`}
              >
                {isExpired ? 'EXPIRÉ' : 'ACTIF'}
              </p>
              <p className="text-gray-700">
                {isExpired
                  ? 'Votre profil est actuellement masqué du catalogue. Renouvelez maintenant.'
                  : `Date d’expiration : ${expiryDate}`}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Le plan Kademya (abonnement mensuel)
          </h2>
          <p className="text-3xl font-extrabold text-blue-600 mb-4">
            {ABONNEMENT_PRIX.toLocaleString('fr-FR')} FCFA / 30 jours
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-3" />
              Visibilité 30 jours dans le catalogue parents.
            </li>
            <li className="flex items-center">
              <DollarSign className="w-5 h-5 text-green-500 mr-3" />
              0 % de commission : vous gardez 100 % de vos revenus.
            </li>
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-green-500 mr-3" />
              Contact direct via WhatsApp avec les parents.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
          <h2 className="text-xl font-semibold mb-5 text-gray-700">
            Renouveler mon abonnement
          </h2>

          {paymentMessage && (
            <div
              className={`p-3 mb-4 rounded-md font-medium ${paymentMessage.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : paymentMessage.type === 'error'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
            >
              {paymentMessage.text}
            </div>
          )}

          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-medium">
                Opérateur Mobile Money
              </span>
              <select
                value={paymentOperator}
                onChange={(e) => setPaymentOperator(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
                disabled={isProcessingPayment}
              >
                <option value="">-- Choisissez un opérateur --</option>
                <option value="Orange Money">Orange Money</option>
                <option value="Wave">Wave</option>
                <option value="MTN MoMo">MTN MoMo</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">
                Numéro de téléphone
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                placeholder="Ex : 07 00 00 00 00"
                required
                disabled={isProcessingPayment}
              />
            </label>

            <button
              type="submit"
              disabled={isProcessingPayment}
              className={`w-full flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${isProcessingPayment
                  ? 'bg-yellow-400 cursor-not-allowed'
                  : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                }`}
            >
              {isProcessingPayment ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Paiement en cours...
                </>
              ) : (
                <>
                  <DollarSign className="w-5 h-5 mr-2" />
                  Payer {ABONNEMENT_PRIX} FCFA et renouveler
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Un message de validation sera envoyé sur votre téléphone (USSD /
              notification).
            </p>
          </form>
        </section>
      </div>
    </DashboardLayout>
  );
}
