export function isAdminUser(user: any): boolean {
    if (!user) return false;

    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const isEmailAdmin = adminEmail && user.email === adminEmail;
    const isSpecificAdmin = user.email === 'ykilolo77@gmail.com';
    const isRoleAdmin = user.user_metadata?.role === 'admin';

    return Boolean(isEmailAdmin || isSpecificAdmin || isRoleAdmin);
}
