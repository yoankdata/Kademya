// src/app/teachers/dashboard/TeacherProfileForm.tsx
'use client';

import React, { useState } from 'react';
import { updateTeacherProfile } from './actions';
import { Loader2, Save } from 'lucide-react';

// Re-définition des types pour l'interface du formulaire
type TeacherProfile = {
    id: string;
    nom_complet: string;
    matiere: string;
    niveau: string;
    tarif_horaire: number;
    commune: string;
    biographie: string | null;
    photo_url: string | null;
    numero_whatsapp: string; 
};

// Listes pour les sélections (doivent idéalement être dans un fichier constant partagé)
const MATIERES = [
    'Mathématiques', 'Physique-Chimie', 'SVT', 'Français', 'Anglais', 
    'Histoire-Géographie', 'Philosophie', 'Économie', 'Informatique', 'Autres'
];
const NIVEAUX = [
    'Primaire', 'Collège', 'Lycée', 'Supérieur'
];
const COMMUNES = [
    'Abobo', 'Adjamé', 'Anyama', 'Bingerville', 'Cocody', 'Koumassi', 
    'Marcory', 'Plateau', 'Port-Bouët', 'Treichville', 'Yopougon', 'Hors Abidjan'
];

interface TeacherProfileFormProps {
    profile: TeacherProfile;
}

export default function TeacherProfileForm({ profile }: TeacherProfileFormProps) {
    // Utiliser les données initiales du Server Component
    const [formData, setFormData] = useState(profile);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Gère les conversions de type si nécessaire (ex: number)
        setFormData(prev => ({ 
            ...prev, 
            [name]: name === 'tarif_horaire' ? Number(value) : value 
        } as TeacherProfile)); // Cast pour rassurer TypeScript sur l'état
        setMessage(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Crée FormData pour l'Action Serveur
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            // Convertir toutes les valeurs en chaîne pour FormData
            if (value !== null && value !== undefined) {
                data.append(key, String(value));
            }
        });
        
        // Appel de l'Action Serveur
        const result = await updateTeacherProfile(data);

        if (result.success) {
            setMessage({ type: 'success', text: result.message });
        } else {
            setMessage({ type: 'error', text: result.message });
        }

        setLoading(false);
    };

    // Composant réutilisable pour les champs Input
    const Input = ({ label, name, type = 'text', required = true }: { label: string, name: keyof TeacherProfile, type?: string, required?: boolean }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                // Assurer que la valeur est toujours une chaîne vide si null/undefined pour éviter l'erreur "controlled/uncontrolled"
                value={formData[name] ?? ''} 
                onChange={handleChange}
                required={required}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
            />
        </div>
    );
    
    // Composant réutilisable pour les champs Select
    const Select = ({ label, name, options }: { label: string, name: keyof TeacherProfile, options: string[] }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label} <span className="text-red-500">*</span>
            </label>
            <select
                id={name}
                name={name}
                value={formData[name] ?? ''}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border bg-white"
            >
                <option value="" disabled>Sélectionner {label.toLowerCase()}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* -------------------- MESSAGE D'ALERTE -------------------- */}
            {message && (
                <div 
                    className={`p-4 rounded-md flex items-center ${
                        message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                    role="alert"
                >
                    {message.text}
                </div>
            )}

            {/* -------------------- SECTION 1: INFOS DE BASE -------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nom Complet (Public)" name="nom_complet" />
                <Input label="Numéro WhatsApp (Contact rapide)" name="numero_whatsapp" />
            </div>

            {/* -------------------- SECTION 2: SPÉCIALISATION & LIEU -------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select label="Matière Enseignée" name="matiere" options={MATIERES} />
                <Select label="Niveau Enseigné" name="niveau" options={NIVEAUX} />
                <Select label="Commune d'Exercice" name="commune" options={COMMUNES} />
            </div>

            {/* -------------------- SECTION 3: TARIF & IMAGE -------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Tarif Horaire (XOF)" name="tarif_horaire" type="number" />
                <Input label="URL de votre Photo (lien direct vers votre photo)" name="photo_url" required={false} />
            </div>
            
            {/* -------------------- SECTION 4: BIOGRAPHIE -------------------- */}
            <div className="mb-6">
                <label htmlFor="biographie" className="block text-sm font-medium text-gray-700">
                    Biographie (Décrivez votre expérience et votre méthode. Max 1500 caractères.)
                </label>
                <textarea
                    id="biographie"
                    name="biographie"
                    rows={5}
                    value={formData.biographie ?? ''}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
                    maxLength={1500}
                />
            </div>

            {/* -------------------- BOUTON DE SOUMISSION -------------------- */}
            <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 transition duration-150 ease-in-out"
            >
                {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                    <Save className="w-5 h-5 mr-2" />
                )}
                {loading ? 'Sauvegarde en cours...' : 'Enregistrer les Modifications'}
            </button>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
                Les champs marqués d'une astérisque (*) sont obligatoires.
            </p>
        </form>
    );
}