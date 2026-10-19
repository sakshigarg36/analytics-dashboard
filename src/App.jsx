import { useState } from 'react';
import { Users, CheckCircle, TrendingUp, DollarSign, FileText, Briefcase, Filter } from 'lucide-react';
import { DUMMY_DATA } from './data/mockData';
import KpiCard from './components/KpiCard';
import { LeadTrendsChart, LeadSourcesChart, RevenueChart } from './components/DashboardCharts';

export default function App() {
  const [filter, setFilter] = useState('30 Days');
  const data = DUMMY_DATA[filter];

  return (
    <div className="min-h-screen p-6 font-sans">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Business Analytics</h1>
          <p className="text-gray-400 text-sm mt-1">Track your leads, conversions, and revenue.</p>
        </div>
        <div className="flex items-center gap-3 bg-gray-900/60 p-2 rounded-lg border border-gray-700/50 backdrop-blur-md">
          <Filter size={18} className="text-teal-400 ml-2" />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent text-white border-none focus:ring-0 outline-none pr-4 py-1 cursor-pointer"
          >
            <option value="Today" className="bg-gray-900">Today</option>
            <option value="7 Days" className="bg-gray-900">Last 7 Days</option>
            <option value="30 Days" className="bg-gray-900">Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard title="New Leads" value={data.kpis.leads} previous={data.prevKpis.leads} icon={Users} />
        <KpiCard title="Qualified Leads" value={data.kpis.qualified} previous={data.prevKpis.qualified} icon={CheckCircle} />
        <KpiCard title="Converted" value={data.kpis.converted} previous={data.prevKpis.converted} icon={TrendingUp} />
        <KpiCard title="Conv. Rate" value={data.kpis.convRate} previous={data.prevKpis.convRate} icon={TrendingUp} suffix="%" />
        <KpiCard title="Quotations" value={data.kpis.quotes} previous={data.prevKpis.quotes} icon={FileText} />
        <KpiCard title="Deals Won" value={data.kpis.deals} previous={data.prevKpis.deals} icon={Briefcase} />
        <KpiCard title="Revenue" value={data.kpis.revenue} previous={data.prevKpis.revenue} icon={DollarSign} prefix="₹" />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LeadTrendsChart data={data.leadTrends} />
        <LeadSourcesChart data={data.sources} />
      </div>

      <RevenueChart data={data.revenueData} />
    </div>
  );
}