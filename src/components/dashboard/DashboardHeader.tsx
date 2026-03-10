import { Activity, Bell, Settings } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Circular Waste Intelligence
          </h1>
          <p className="text-xs text-muted-foreground">AI-Powered Smart City Waste Management</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
          10 Bins Online
        </span>
        <button className="rounded-lg bg-secondary p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" />
        </button>
        <button className="rounded-lg bg-secondary p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
