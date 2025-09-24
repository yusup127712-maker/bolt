import React from 'react';
import { Wifi, WifiOff } from 'lucide-react';

const RecentConnections: React.FC = () => {
  const connections = [
    {
      user: 'ahmet_gurbanov',
      action: 'baglanyşdy',
      time: '2 minut öň',
      location: 'Amerikanyň Birleşen Ştatlary'
    },
    {
      user: 'gulnar_atayeva',
      action: 'aýryldy',
      time: '5 minut öň',
      location: 'Germaniýa'
    },
    {
      user: 'dovran_orazov',
      action: 'baglanyşdy',
      time: '12 minut öň',
      location: 'Ýaponiýa'
    },
    {
      user: 'maya_nuryyeva',
      action: 'baglanyşdy',
      time: '18 minut öň',
      location: 'Beýik Britaniýa'
    },
    {
      user: 'serdar_hojayev',
      action: 'aýryldy',
      time: '25 minut öň',
      location: 'Singapur'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Soňky baglanyşyklar</h3>
      
      <div className="space-y-4">
        {connections.map((connection, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg ${
              connection.action === 'baglanyşdy' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {connection.action === 'baglanyşdy' ? (
                <Wifi className="w-4 h-4" />
              ) : (
                <WifiOff className="w-4 h-4" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {connection.user}
              </p>
              <p className="text-xs text-gray-500">
                {connection.action} • {connection.location}
              </p>
            </div>
            
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {connection.time}
            </span>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
        Ähli işjeňligi görmek
      </button>
    </div>
  );
};

export default RecentConnections;