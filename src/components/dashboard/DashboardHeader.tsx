import { Activity, Bell, Settings, X } from "lucide-react";
import { useState } from "react";

const DashboardHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    { id: 1, text: "BIN-009 reached 95% — immediate collection needed", type: "critical" },
    { id: 2, text: "BIN-003 hazardous waste at 91% — Zone C alert", type: "critical" },
    { id: 3, text: "BIN-001 recyclable bin at 85%", type: "warning" },
    { id: 4, text: "Route optimization updated — 18% fuel savings", type: "info" },
    { id: 5, text: "Priya Sharma earned 200 bonus points", type: "info" },
  ];

  return (
    <header className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            SmartSeg Bin
          </h1>
          <p className="text-xs text-muted-foreground">AI-Powered Smart City Waste Management</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
          10 Bins Online
        </span>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotifications(!showNotifications); setShowSettings(false); }}
            className="relative rounded-lg bg-secondary p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              {notifications.filter(n => n.type === "critical").length}
            </span>
          </button>
          {showNotifications && (
            <div className="absolute right-0 top-full z-50 mt-2 w-80 glass-card rounded-lg p-4 shadow-lg animate-slide-up">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
                <button onClick={() => setShowNotifications(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`rounded-md p-2.5 text-xs ${
                    n.type === "critical" ? "bg-destructive/10 border border-destructive/20 text-foreground" :
                    n.type === "warning" ? "bg-warning/10 border border-warning/20 text-foreground" :
                    "bg-secondary/60 text-muted-foreground"
                  }`}>
                    {n.type === "critical" && <span className="mr-1">🔴</span>}
                    {n.type === "warning" && <span className="mr-1">🟡</span>}
                    {n.type === "info" && <span className="mr-1">ℹ️</span>}
                    {n.text}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowNotifications(false)}
                className="mt-3 w-full rounded-md bg-primary/10 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                Mark all as read
              </button>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="relative">
          <button
            onClick={() => { setShowSettings(!showSettings); setShowNotifications(false); }}
            className="rounded-lg bg-secondary p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings className="h-4 w-4" />
          </button>
          {showSettings && (
            <div className="absolute right-0 top-full z-50 mt-2 w-64 glass-card rounded-lg p-4 shadow-lg animate-slide-up">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Settings</h3>
                <button onClick={() => setShowSettings(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3">
                <SettingToggle label="Real-time Updates" defaultOn />
                <SettingToggle label="Hazardous Alerts" defaultOn />
                <SettingToggle label="Route Notifications" defaultOn={false} />
                <SettingToggle label="Sound Alerts" defaultOn={false} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const SettingToggle = ({ label, defaultOn }: { label: string; defaultOn: boolean }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={`relative h-5 w-9 rounded-full transition-colors ${on ? "bg-primary" : "bg-secondary"}`}
      >
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-foreground transition-transform ${on ? "left-[18px]" : "left-0.5"}`} />
      </button>
    </div>
  );
};

export default DashboardHeader;
