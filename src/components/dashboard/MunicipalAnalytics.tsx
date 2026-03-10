import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AlertTriangle, Recycle, Trash2, TrendingUp } from "lucide-react";

const wasteBreakdown = [
  { name: "Biodegradable", value: 42, color: "hsl(142 72% 48%)" },
  { name: "Recyclable", value: 35, color: "hsl(200 80% 50%)" },
  { name: "Hazardous", value: 8, color: "hsl(0 72% 55%)" },
  { name: "General", value: 15, color: "hsl(270 70% 60%)" },
];

const MunicipalAnalytics = () => {
  return (
    <div className="glass-card rounded-lg p-5">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Municipal Analytics</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-md bg-secondary/40 p-3">
            <Trash2 className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Total Collected Today</p>
              <p className="text-xl font-bold text-foreground">84.6 <span className="text-sm font-normal text-muted-foreground">tons</span></p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-secondary/40 p-3">
            <Recycle className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Recyclable Rate</p>
              <p className="text-xl font-bold text-primary">35% <span className="text-sm font-normal text-success">↑ 3.2%</span></p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-destructive/10 border border-destructive/20 p-3">
            <AlertTriangle className="h-5 w-5 text-destructive animate-pulse-glow" />
            <div>
              <p className="text-xs text-destructive font-medium">Hazardous Alert</p>
              <p className="text-sm text-foreground">3 bins above 60% — Zone C requires priority collection</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-secondary/40 p-3">
            <TrendingUp className="h-5 w-5 text-success" />
            <div>
              <p className="text-xs text-muted-foreground">Monthly Efficiency</p>
              <p className="text-xl font-bold text-foreground">92.4%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={wasteBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {wasteBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
            {wasteBreakdown.map((w) => (
              <span key={w.name} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: w.color }} />
                {w.name} {w.value}%
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MunicipalAnalytics;
