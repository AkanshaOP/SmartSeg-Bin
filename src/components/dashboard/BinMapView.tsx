import { smartBins } from "@/data/mockData";
import { MapPin } from "lucide-react";

const getStatusColor = (fill: number) => {
  if (fill >= 75) return { bg: "bg-destructive", glow: "glow-red", label: "Full" };
  if (fill >= 40) return { bg: "bg-warning", glow: "glow-yellow", label: "Medium" };
  return { bg: "bg-success", glow: "glow-green", label: "Empty" };
};

const BinMapView = () => {
  return (
    <div className="glass-card rounded-lg p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Smart Bin Map</h2>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-success" /> Empty</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-warning" /> Medium</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-destructive" /> Full</span>
        </div>
      </div>
      <div className="relative h-[340px] rounded-lg bg-secondary/50 overflow-hidden border border-border">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        {/* Simulated map with bin markers */}
        {smartBins.map((bin, i) => {
          const status = getStatusColor(bin.fillLevel);
          const x = 8 + ((i % 5) * 18) + (i % 3) * 3;
          const y = 12 + (Math.floor(i / 5) * 40) + (i % 4) * 8;
          return (
            <div
              key={bin.id}
              className="absolute group cursor-pointer"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className={`relative flex h-8 w-8 items-center justify-center rounded-full ${status.bg} ${status.glow} transition-transform hover:scale-125`}>
                <MapPin className="h-4 w-4 text-background" />
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                <div className="glass-card rounded-md px-3 py-2 text-xs whitespace-nowrap">
                  <p className="font-semibold text-foreground">{bin.id}</p>
                  <p className="text-muted-foreground">{bin.location}</p>
                  <p className="text-muted-foreground">Fill: {bin.fillLevel}% • {bin.wasteCategory}</p>
                </div>
              </div>
            </div>
          );
        })}
        {/* Zone labels */}
        <div className="absolute left-4 top-4 text-xs font-mono text-muted-foreground/60">ZONE A</div>
        <div className="absolute right-4 top-4 text-xs font-mono text-muted-foreground/60">ZONE C</div>
        <div className="absolute left-4 bottom-4 text-xs font-mono text-muted-foreground/60">ZONE D</div>
        <div className="absolute right-4 bottom-4 text-xs font-mono text-muted-foreground/60">ZONE B</div>
      </div>
    </div>
  );
};

export default BinMapView;
