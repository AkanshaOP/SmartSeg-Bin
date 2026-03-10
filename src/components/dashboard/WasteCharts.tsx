import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { wasteStats, dailyCollection } from "@/data/mockData";

const WasteCharts = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="glass-card rounded-lg p-5">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Waste Generation by Category</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={wasteStats} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
            <XAxis dataKey="month" tick={{ fill: "hsl(215 12% 52%)", fontSize: 12 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(215 12% 52%)", fontSize: 12 }} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(220 18% 10%)", border: "1px solid hsl(220 14% 18%)", borderRadius: "8px", color: "hsl(210 20% 92%)" }}
            />
            <Bar dataKey="biodegradable" fill="hsl(142 72% 48%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="recyclable" fill="hsl(200 80% 50%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="hazardous" fill="hsl(0 72% 55%)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="general" fill="hsl(270 70% 60%)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-green" />Biodegradable</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-blue" />Recyclable</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-red" />Hazardous</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-purple" />General</span>
        </div>
      </div>

      <div className="glass-card rounded-lg p-5">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Daily Collection Trend (tons)</h3>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={dailyCollection}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(160 84% 44%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(160 84% 44%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
            <XAxis dataKey="day" tick={{ fill: "hsl(215 12% 52%)", fontSize: 12 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(215 12% 52%)", fontSize: 12 }} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(220 18% 10%)", border: "1px solid hsl(220 14% 18%)", borderRadius: "8px", color: "hsl(210 20% 92%)" }}
            />
            <Area type="monotone" dataKey="tons" stroke="hsl(160 84% 44%)" fill="url(#areaGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WasteCharts;
