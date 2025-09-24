import React, { useState } from 'react';
import { Search, Filter, Download, Calendar } from 'lucide-react';

const ActivityLogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');

  const logs = [
    {
      id: '1',
      timestamp: '2024-01-15 14:32:15',
      user: 'ahmet_gurbanov',
      action: 'GIRIŞ',
      description: '192.168.1.100 salgysyndan ulanyjy üstünlikli girdi',
      status: 'success',
      location: 'Amerikanyň Birleşen Ştatlary'
    },
    {
      id: '2',
      timestamp: '2024-01-15 14:30:42',
      user: 'gulnar_atayeva',
      action: 'BAGLANYŞYK_DÖREDILDI',
      description: 'Nemes serwerine VPN baglanyşygy döredildi',
      status: 'success',
      location: 'Germaniýa'
    },
    {
      id: '3',
      timestamp: '2024-01-15 14:28:19',
      user: 'dovran_orazov',
      action: 'GIRIŞ_ŞOWSUZ',
      description: 'Şowsuz giriş synanyşygy - nädogry parol',
      status: 'error',
      location: 'Ýaponiýa'
    },
    {
      id: '4',
      timestamp: '2024-01-15 14:25:33',
      user: 'maya_nuryyeva',
      action: 'BAGLANYŞYK_KESILDI',
      description: 'VPN baglanyşygy ulanyjy tarapyndan kesildi',
      status: 'info',
      location: 'Beýik Britaniýa'
    },
    {
      id: '5',
      timestamp: '2024-01-15 14:22:47',
      user: 'serdar_hojayev',
      action: 'MAGLUMAT_ÇÄGI_DUÝDURYŞY',
      description: 'Ulanyjy aýlyk maglumat çäginiň 80%-ine ýetdi',
      status: 'warning',
      location: 'Singapur'
    },
    {
      id: '6',
      timestamp: '2024-01-15 14:20:15',
      user: 'system',
      action: 'SERWER_ABATLAÝYŞ',
      description: 'ABŞ-Günbatar serwerinde meýilleşdirilen abatlaýyş tamamlandy',
      status: 'info',
      location: 'Ulgam'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-blue-100 text-blue-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getActionBadge = (action: string) => {
    const styles = {
      GIRIŞ: 'bg-blue-100 text-blue-800',
      GIRIŞ_ŞOWSUZ: 'bg-red-100 text-red-800',
      BAGLANYŞYK_DÖREDILDI: 'bg-green-100 text-green-800',
      BAGLANYŞYK_KESILDI: 'bg-orange-100 text-orange-800',
      MAGLUMAT_ÇÄGI_DUÝDURYŞY: 'bg-yellow-100 text-yellow-800',
      SERWER_ABATLAÝYŞ: 'bg-purple-100 text-purple-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[action as keyof typeof styles] || 'bg-gray-100 text-gray-800'}`}>
        {action.replace('_', ' ')}
      </span>
    );
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === 'all' || log.action === actionFilter;
    return matchesSearch && matchesAction;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Işjeňlik ýazgylary</h1>
        <p className="text-gray-600">Ulgam işjeňligini we ulanyjy hereketlerini gözegçilik ediň</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Ýazgylary gözläň..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Ähli hereketler</option>
                <option value="GIRIŞ">Giriş</option>
                <option value="GIRIŞ_ŞOWSUZ">Şowsuz giriş</option>
                <option value="BAGLANYŞYK_DÖREDILDI">Baglanyşyk döredildi</option>
                <option value="BAGLANYŞYK_KESILDI">Baglanyşyk kesildi</option>
                <option value="MAGLUMAT_ÇÄGI_DUÝDURYŞY">Maglumat çägi duýduryşy</option>
                <option value="SERWER_ABATLAÝYŞ">Serwer abatlaýyş</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Sene aralygy</span>
              </button>
              
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Süzgüç</span>
              </button>
              
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Eksport</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wagt belgisi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ulanyjy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hereket</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Düşündiriş</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ýagdaýy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ýer</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 font-mono">{log.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{log.user}</span>
                  </td>
                  <td className="px-6 py-4">
                    {getActionBadge(log.action)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">{log.description}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(log.status)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{log.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              {logs.length} ýazgydan {filteredLogs.length} görkezilýär
            </p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Öňki
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Indiki
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
