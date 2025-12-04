// src/app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg('Identifiants incorrects.');
      setLoading(false);
      return;
    }

    // Succès → on envoie vers /admin
    router.push('/admin');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md border">
        <h1 className="text-2xl font-bold text-center mb-2">
          Connexion Administrateur
        </h1>
        <p className="text-xs text-muted-foreground text-center mb-6">
          Accès strictement réservé à l'administration Kademya.
        </p>

        {errorMsg && (
          <p className="text-red-600 text-sm mb-4 text-center">{errorMsg}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-2"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="ykilolo77@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full border rounded-lg p-2"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 flex justify-center"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Se connecter'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
