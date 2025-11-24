// components/DashboardLayout.tsx

import React from 'react';
import { LayoutDashboard, Users, Calendar, DollarSign, BarChart3, Settings } from 'lucide-react';

// Définition des éléments de navigation
const navItems = [
  { href: '/teacher/dashboard', icon: LayoutDashboard, label: 'Tableau de Bord' },
  { href: '/teacher/dashboard/profile', icon: Users, label: 'Mon Profil Public' },
  { href: '/teacher/dashboard/calendar', icon: Calendar, label: 'Mes Disponibilités' },
  { href: '/teacher/dashboard/subscription', icon: DollarSign, label: 'Mon Abonnement' },
  { href: '/teacher/dashboard/stats', icon: BarChart3, label: 'Mes Statistiques' },
  { href: '/teacher/dashboard/settings', icon: Settings, label: 'Paramètres & Aide' },
];

interface NavItemProps {
  href: string;
  icon: typeof LayoutDashboard;
  label: string;
  isActive: boolean;
}

// Composant de lien dans la Sidebar
const NavLink: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive }) => (
  <a
    href={href}
    className={`flex items-center p-3 text-sm rounded-lg transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span>{label}</span>
  </a>
);

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePath: string; // Pour savoir quel lien est actif
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activePath }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barre Latérale */}
      <div className="w-64 bg-gray-800 p-4 space-y-4 h-full flex-shrink-0 shadow-lg">
        <div className="text-2xl font-extrabold text-blue-400 mb-8 border-b border-gray-700 pb-4">
          Edalia Prof
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              isActive={activePath === item.href}
            />
          ))}
        </nav>
      </div>

      {/* Contenu Principal */}
      <div className="flex-1 overflow-y-auto p-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;