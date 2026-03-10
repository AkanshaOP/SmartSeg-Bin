import { smartBins } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const categoryColors: Record<string, string> = {
  Biodegradable: "bg-success/15 text-success border-success/30",
  Recyclable: "bg-accent/15 text-accent border-accent/30",
  Hazardous: "bg-destructive/15 text-destructive border-destructive/30",
  General: "bg-chart-purple/15 text-chart-purple border-chart-purple/30",
};

const BinDataTable = () => {
  return (
    <div className="glass-card rounded-lg p-5">
      <h2 className="mb-4 text-lg font-semibold text-foreground">IoT Bin Status</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">Bin ID</th>
              <th className="pb-3 pr-4 font-medium">Location</th>
              <th className="pb-3 pr-4 font-medium">Waste Type</th>
              <th className="pb-3 pr-4 font-medium">Fill Level</th>
              <th className="pb-3 pr-4 font-medium">Temp</th>
              <th className="pb-3 font-medium">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {smartBins.map((bin) => (
              <tr key={bin.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3 pr-4 font-mono text-xs font-semibold text-foreground">{bin.id}</td>
                <td className="py-3 pr-4 text-muted-foreground">{bin.location}</td>
                <td className="py-3 pr-4">
                  <Badge variant="outline" className={`text-xs ${categoryColors[bin.wasteCategory]}`}>
                    {bin.wasteCategory}
                  </Badge>
                </td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <Progress
                      value={bin.fillLevel}
                      className="h-2 w-20 bg-secondary"
                    />
                    <span className={`text-xs font-medium ${
                      bin.fillLevel >= 75 ? "text-destructive" :
                      bin.fillLevel >= 40 ? "text-warning" : "text-success"
                    }`}>
                      {bin.fillLevel}%
                    </span>
                  </div>
                </td>
                <td className="py-3 pr-4 text-xs text-muted-foreground">{bin.temperature}°C</td>
                <td className="py-3 text-xs text-muted-foreground">{bin.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BinDataTable;
