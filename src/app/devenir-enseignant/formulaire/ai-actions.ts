'use server';

import { ai } from '@/ai/genkit';

export async function generateTeacherBio(data: {
    matiere: string;
    niveau: string;
    experience?: string;
}) {
    const { matiere, niveau, experience } = data;

    const prompt = `
    Tu es un expert en communication pour des professeurs particuliers.
    Rédige une biographie professionnelle, chaleureuse et rassurante pour un professeur de ${matiere} (Niveau: ${niveau}).
    
    Contexte supplémentaire (expérience, diplômes, etc.) : ${experience || "Non spécifié"}
    
    La biographie doit :
    - Être écrite à la première personne ("Je...").
    - Mettre en avant la pédagogie et la réussite de l'élève.
    - Être concise (environ 100-150 mots).
    - Ne pas inventer de diplômes spécifiques s'ils ne sont pas mentionnés.
    - Être prête à être publiée sur le profil.
  `;

    try {
        const { text } = await ai.generate(prompt);
        return { success: true, bio: text };
    } catch (error) {
        console.error('Erreur génération AI:', error);
        return { success: false, error: "Impossible de générer la biographie pour le moment." };
    }
}
