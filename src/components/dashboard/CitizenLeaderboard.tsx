import { citizenRewards } from "@/data/mockData";
import { Trophy } from "lucide-react";

const CitizenLeaderboard = () => {
  return (
    <div className="glass-card rounded-lg p-5">
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-warning" />
        <h2 className="text-lg font-semibold text-foreground">Citizen Rewards</h2>
      </div>
      <div className="space-y-3">
        {citizenRewards.map((citizen) => (
          <div key={citizen.rank} className="flex items-center gap-3 rounded-md bg-secondary/40 p-3 hover:bg-secondary/60 transition-colors">
            <span className="text-lg">{citizen.badge}</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
              {citizen.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{citizen.name}</p>
              <p className="text-xs text-muted-foreground">Segregation: {citizen.segregationRate}%</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-primary">{citizen.points.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitizenLeaderboard;
