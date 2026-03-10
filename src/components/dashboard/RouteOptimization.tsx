import { smartBins } from "@/data/mockData";
import { Truck, ArrowRight, AlertTriangle } from "lucide-react";

const RouteOptimization = () => {
  const urgentBins = smartBins
    .filter((b) => b.fillLevel >= 65)
    .sort((a, b) => b.fillLevel - a.fillLevel);

  return (
    <div className="glass-card rounded-lg p-5">
      <div className="mb-4 flex items-center gap-2">
        <Truck className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Route Optimization</h2>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">
        AI-optimized collection route — {urgentBins.length} bins require immediate attention
      </p>
      <div className="space-y-3">
        {urgentBins.map((bin, i) => (
          <div key={bin.id} className="flex items-center gap-3 rounded-md bg-secondary/40 p-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-foreground">{bin.id}</span>
                {bin.fillLevel >= 90 && <AlertTriangle className="h-3.5 w-3.5 text-destructive animate-pulse-glow" />}
              </div>
              <p className="text-xs text-muted-foreground truncate">{bin.location}</p>
            </div>
            <div className={`text-xs font-bold ${
              bin.fillLevel >= 90 ? "text-destructive" :
              bin.fillLevel >= 75 ? "text-warning" : "text-accent"
            }`}>
              {bin.fillLevel}%
            </div>
            {i < urgentBins.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 hidden sm:block" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-3">
        <p className="text-xs text-primary">
          <span className="font-semibold">Estimated route time:</span> 47 min • 12.3 km • Fuel saved: 18%
        </p>
      </div>
    </div>
  );
};

export default RouteOptimization;
