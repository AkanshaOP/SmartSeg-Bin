import { Trash2, Recycle, AlertTriangle, BarChart3 } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import BinMapView from "@/components/dashboard/BinMapView";
import WasteCharts from "@/components/dashboard/WasteCharts";
import BinDataTable from "@/components/dashboard/BinDataTable";
import RouteOptimization from "@/components/dashboard/RouteOptimization";
import CitizenLeaderboard from "@/components/dashboard/CitizenLeaderboard";
import MunicipalAnalytics from "@/components/dashboard/MunicipalAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <DashboardHeader />

        {/* Stats Row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Bins Active"
            value="10"
            change="+2 this month"
            changeType="positive"
            icon={Trash2}
          />
          <StatsCard
            title="Recyclable Collected"
            value="29.6 tons"
            change="+12.4% vs last week"
            changeType="positive"
            icon={Recycle}
          />
          <StatsCard
            title="Hazardous Alerts"
            value="3"
            change="Zone C critical"
            changeType="negative"
            icon={AlertTriangle}
          />
          <StatsCard
            title="Collection Efficiency"
            value="92.4%"
            change="+3.1% improvement"
            changeType="positive"
            icon={BarChart3}
          />
        </div>

        {/* Map + Route Optimization */}
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BinMapView />
          </div>
          <RouteOptimization />
        </div>

        {/* Charts */}
        <WasteCharts />

        {/* Table */}
        <BinDataTable />

        {/* Leaderboard + Municipal */}
        <div className="grid gap-5 lg:grid-cols-2">
          <CitizenLeaderboard />
          <MunicipalAnalytics />
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-4 text-center text-xs text-muted-foreground">
          SmartSeg Bin • Powered by IoT & AI • Smart City Initiative 2026
        </footer>
      </div>
    </div>
  );
};

export default Index;
