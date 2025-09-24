import React, { useState } from 'react';
import { 
  Save, 
  Server, 
  Shield, 
  Bell, 
  Globe,
  Key,
  Database,
  AlertCircle
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('server');
  
  const [serverSettings, setServerSettings] = useState({
    maxConnections: '1000',
    connectionTimeout: '300',
    dataTransferLimit: '1000',
    logRetention: '30'
  });

  const [securitySettings, setSecuritySettings] = useState({
    encryptionProtocol: 'AES-256',
    authenticationMethod: 'certificate',
    twoFactorAuth: true,
    passwordComplexity: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    slackWebhook: '',
    alertThreshold: '80',
    maintenanceNotices: true
  });

  const tabs = [
    { id: 'server', label: 'Serwer konfigurasiýasy', icon: Server },
    { id: 'security', label: 'Howpsuzlyk', icon: Shield },
    { id: 'notifications', label: 'Duýduryşlar', icon: Bell },
    { id: 'network', label: 'Tor', icon: Globe }
  ];

  const handleServerChange = (field: string, value: string) => {
    setServerSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityChange = (field: string, value: string | boolean) => {
    setSecuritySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: string | boolean) => {
    setNotificationSettings(prev => ({ ...prev, [field]: value }));
  };

  const renderServerSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Iň köp bir wagtda baglanyşyk
          </label>
          <input
            type="number"
            value={serverSettings.maxConnections}
            onChange={(e) => handleServerChange('maxConnections', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Bir wagtda bolup biljek baglanyşyklaryň iň köp sany</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Baglanyşyk möhleti (sekunt)
          </label>
          <input
            type="number"
            value={serverSettings.connectionTimeout}
            onChange={(e) => handleServerChange('connectionTimeout', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Işlemeýän baglanyşyk möhleti</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maglumat geçiriş çägi (GB/aý)
          </label>
          <input
            type="number"
            value={serverSettings.dataTransferLimit}
            onChange={(e) => handleServerChange('dataTransferLimit', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Her serwer üçin aýlyk maglumat geçiriş çägi</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ýazgy saklaýyş möhleti (gün)
          </label>
          <input
            type="number"
            value={serverSettings.logRetention}
            onChange={(e) => handleServerChange('logRetention', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Işjeňlik ýazgylaryny näçe gün saklamaly</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Konfigurasiýa duýduryşy</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Serwer sazlamalaryndaky üýtgeşmeler serweri täzeden başlatmagy talap eder we işjeň ulanyjylary wagtlaýyn aýryp biler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Şifrlemek protokoly
          </label>
          <select
            value={securitySettings.encryptionProtocol}
            onChange={(e) => handleSecurityChange('encryptionProtocol', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="AES-256">AES-256</option>
            <option value="AES-128">AES-128</option>
            <option value="ChaCha20">ChaCha20</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tassyklaýyş usuly
          </label>
          <select
            value={securitySettings.authenticationMethod}
            onChange={(e) => handleSecurityChange('authenticationMethod', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="certificate">Şahadatnama esasly</option>
            <option value="password">Ulanyjy ady/Parol</option>
            <option value="hybrid">Garyşyk (Şahadatnama + Parol)</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Iki faktorly tassyklaýyş</h4>
            <p className="text-sm text-gray-600">Admin giriş üçin 2FA talap etmek</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={securitySettings.twoFactorAuth}
              onChange={(e) => handleSecurityChange('twoFactorAuth', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Parol çylşyrymlylyk talaplary</h4>
            <p className="text-sm text-gray-600">Güýçli parol syýasatlaryny ýerine ýetirmek</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={securitySettings.passwordComplexity}
              onChange={(e) => handleSecurityChange('passwordComplexity', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Key className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-800">Howpsuzlyk maslahaty</h4>
            <p className="text-sm text-blue-700 mt-1">
              Iň ýokary howpsuzlyk üçin 2FA açyk şahadatnama esasly tassyklaýyş ulanmagy maslahat berýäris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">E-poçta duýduryşlary</h4>
            <p className="text-sm text-gray-600">Möhüm wakalar üçin e-poçta duýduryşlaryny almak</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationSettings.emailAlerts}
              onChange={(e) => handleNotificationChange('emailAlerts', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Abatlaýyş duýduryşlary</h4>
            <p className="text-sm text-gray-600">Meýilleşdirilen abatlaýyş barada ulanyjylara habar bermek</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationSettings.maintenanceNotices}
              onChange={(e) => handleNotificationChange('maintenanceNotices', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Slack Webhook URL salgysy
          </label>
          <input
            type="url"
            value={notificationSettings.slackWebhook}
            onChange={(e) => handleNotificationChange('slackWebhook', e.target.value)}
            placeholder="https://hooks.slack.com/services/..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Meýletin: Slack kanalyna duýduryşlary ibermek</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duýduryş çägi (%)
          </label>
          <input
            type="number"
            min="50"
            max="95"
            value={notificationSettings.alertThreshold}
            onChange={(e) => handleNotificationChange('alertThreshold', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Duýduryşlary işjeňleşdirjek serwer ýüklemesiniň göterimi</p>
        </div>
      </div>
    </div>
  );

  const renderNetworkSettings = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-medium text-gray-900 mb-4 flex items-center space-x-2">
          <Database className="w-5 h-5" />
          <span>Tor konfigurasiýasy</span>
        </h4>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Esasy DNS serweri:</span>
            <span className="font-mono">8.8.8.8</span>
          </div>
          <div className="flex justify-between">
            <span>Goşmaça DNS serweri:</span>
            <span className="font-mono">1.1.1.1</span>
          </div>
          <div className="flex justify-between">
            <span>VPN subnet:</span>
            <span className="font-mono">10.0.0.0/24</span>
          </div>
          <div className="flex justify-between">
            <span>Port aralygy:</span>
            <span className="font-mono">1194-1204</span>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800">Ösen konfigurasiýa</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Tor sazlamalary serwer konfigurasiýa faýly arkaly dolandyrylýar. Üýtgeşmeler üçin ulgam administratoryňyz bilen habarlaşyň.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'server':
        return renderServerSettings();
      case 'security':
        return renderSecuritySettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'network':
        return renderNetworkSettings();
      default:
        return renderServerSettings();
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sazlamalar</h1>
        <p className="text-gray-600">VPN serweriňizi we admin paneliňizi sazlaň</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6">
          {renderContent()}
          
          <div className="flex items-center justify-end pt-6 mt-6 border-t border-gray-200">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Üýtgeşmeleri ýazdyrmak</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
