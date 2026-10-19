export default function KpiCard({ title, value, previous, icon: Icon, prefix = "", suffix = "" }) {
  const calculateGrowth = (current, prev) => {
    if (prev === 0) return current === 0 ? '0.0%' : 'New';

    const increase = current - prev;
    const percentage = ((increase / prev) * 100).toFixed(1);
    return percentage >= 0 ? `+${percentage}%` : `${percentage}%`;
  };

  const isPositive = value >= previous;

  return (
    <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700/50 p-5 rounded-xl flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{prefix}{value.toLocaleString()}{suffix}</h3>
        </div>
        <div className="p-2 bg-teal-900/40 rounded-lg text-teal-400">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-xs text-gray-500">
        <span className={isPositive ? "text-emerald-400" : "text-rose-400"}>
          {calculateGrowth(value, previous)}
        </span> vs previous period
      </p>
    </div>
  );
}