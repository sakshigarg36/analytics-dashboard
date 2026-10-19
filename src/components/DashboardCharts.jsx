import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const COLORS = ['#2dd4bf', '#38bdf8', '#a78bfa', '#fb7185'];
const chartMargin = { top: 8, right: 8, left: 0, bottom: 0 };
const axisStyle = { fill: '#9ca3af', fontSize: 12 };
const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#111827',
    border: '1px solid rgba(55, 65, 81, 0.8)',
    borderRadius: 8,
    color: '#fff',
  },
};

function ChartCard({ title, children }) {
  return (
    <section className="rounded-xl border border-gray-700/50 bg-gray-900/60 p-5 shadow-lg backdrop-blur-md">
      <h2 className="mb-5 text-lg font-semibold text-white">{title}</h2>
      <div className="h-72 w-full">{children}</div>
    </section>
  );
}

export function LeadTrendsChart({ data }) {
  return (
    <ChartCard title="Lead Trends">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis allowDecimals={false} tick={axisStyle} axisLine={false} tickLine={false} />
          <Tooltip {...tooltipStyle} />
          <Line
            type="monotone"
            dataKey="leads"
            name="Leads"
            stroke="#2dd4bf"
            strokeWidth={3}
            dot={{ fill: '#2dd4bf', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function LeadSourcesChart({ data }) {
  return (
    <ChartCard title="Lead Sources">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="78%"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={{ stroke: '#9ca3af' }}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function RevenueChart({ data }) {
  return (
    <ChartCard title="Revenue by Service">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={chartMargin}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis
            tick={axisStyle}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value.toLocaleString('en-IN')}`}
          />
          <Tooltip
            {...tooltipStyle}
            formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Revenue']}
          />
          <Bar dataKey="revenue" name="Revenue" fill="#2dd4bf" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
