import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  Settings as SettingsIcon,
  Wifi
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Esasy sahypa', icon: LayoutDashboard },
    { id: 'users', label: 'Ulanyjy dolandyryşy', icon: Users },
    { id: 'logs', label: 'Işjeňlik ýazgylary', icon: Activity },
    { id: 'settings', label: 'Sazlamalar', icon: SettingsIcon },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Happ Proxy</h1>
            <p className="text-slate-400 text-sm">Dolandyryş paneli</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <p className="text-sm font-medium">Serwer ýagdaýy</p>
            <p className="text-xs text-slate-400">Onlaýn - 99.9% işleýär</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
