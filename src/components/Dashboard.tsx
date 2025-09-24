import React from 'react';
import { 
  Users, 
  Wifi, 
  Activity, 
  Download,
  Upload,
  Clock,
  Globe,
  TrendingUp
} from 'lucide-react';
import StatsCard from './StatsCard';
import UserActivityChart from './UserActivityChart';
import RecentConnections from './RecentConnections';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Esasy sahypa</h1>
        <p className="text-gray-600">VPN serweriňiziň işleýşini we ulanyjy işjeňligini gözegçilik ediň</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Jemi ulanyjylar"
          value="1,247"
          icon={Users}
          change="+12%"
          changeType="positive"
          color="blue"
        />
        <StatsCard
          title="Işjeň baglanyşyklar"
          value="89"
          icon={Wifi}
          change="+5%"
          changeType="positive"
          color="green"
        />
        <StatsCard
          title="Maglumat geçirişi"
          value="2.4 TB"
          icon={Activity}
          change="+8%"
          changeType="positive"
          color="purple"
        />
        <StatsCard
          title="Serwer ýüklemesi"
          value="68%"
          icon={TrendingUp}
          change="-3%"
          changeType="negative"
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Zolak ulanylmagy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Download className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Göçürip almak</p>
                  <p className="text-sm text-gray-500">Şu gün</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">847 GB</p>
                <p className="text-sm text-green-600">+15% düýnden</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Upload className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ýüklemek</p>
                  <p className="text-sm text-gray-500">Şu gün</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">234 GB</p>
                <p className="text-sm text-blue-600">+8% düýnden</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Serwer ýerleri</h3>
          <div className="space-y-3">
            {[
              { country: 'Amerikanyň Birleşen Ştatlary', users: 423, load: '72%' },
              { country: 'Germaniýa', users: 298, load: '45%' },
              { country: 'Ýaponiýa', users: 187, load: '38%' },
              { country: 'Beýik Britaniýa', users: 156, load: '29%' },
              { country: 'Singapur', users: 183, load: '52%' }
            ].map((server) => (
              <div key={server.country} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-900">{server.country}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{server.users} ulanyjy</span>
                  <span className="text-sm font-medium text-gray-900">{server.load}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <UserActivityChart />
        </div>
        <div>
          <RecentConnections />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
