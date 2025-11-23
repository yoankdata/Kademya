// src/lib/mail.ts

export type SendMailParams = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Version dev : aucun envoi réel.
 * On log juste les infos pour debug.
 */
export async function sendMail({ to, subject, text }: SendMailParams) {
  console.log('[Edalia][DEV] sendMail appelé (aucun mail envoyé) :', {
    to,
    subject,
    text,
  });
}
