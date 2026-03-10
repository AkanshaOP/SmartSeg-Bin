export interface SmartBin {
  id: string;
  location: string;
  lat: number;
  lng: number;
  wasteCategory: "Biodegradable" | "Recyclable" | "Hazardous" | "General";
  fillLevel: number;
  lastUpdate: string;
  temperature: number;
}

export interface CitizenReward {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  segregationRate: number;
  badge: string;
}

export interface WasteStats {
  month: string;
  biodegradable: number;
  recyclable: number;
  hazardous: number;
  general: number;
}

export const smartBins: SmartBin[] = [
  { id: "BIN-001", location: "Central Park, Zone A", lat: 28.6139, lng: 77.209, wasteCategory: "Recyclable", fillLevel: 85, lastUpdate: "2 min ago", temperature: 32 },
  { id: "BIN-002", location: "Market Square, Zone B", lat: 28.6229, lng: 77.215, wasteCategory: "Biodegradable", fillLevel: 42, lastUpdate: "5 min ago", temperature: 29 },
  { id: "BIN-003", location: "Tech Hub, Zone C", lat: 28.6089, lng: 77.222, wasteCategory: "Hazardous", fillLevel: 91, lastUpdate: "1 min ago", temperature: 38 },
  { id: "BIN-004", location: "Riverside, Zone D", lat: 28.618, lng: 77.198, wasteCategory: "General", fillLevel: 23, lastUpdate: "8 min ago", temperature: 27 },
  { id: "BIN-005", location: "Hospital Rd, Zone A", lat: 28.625, lng: 77.212, wasteCategory: "Hazardous", fillLevel: 67, lastUpdate: "3 min ago", temperature: 35 },
  { id: "BIN-006", location: "School Lane, Zone B", lat: 28.611, lng: 77.205, wasteCategory: "Biodegradable", fillLevel: 15, lastUpdate: "12 min ago", temperature: 26 },
  { id: "BIN-007", location: "Mall Complex, Zone C", lat: 28.62, lng: 77.225, wasteCategory: "Recyclable", fillLevel: 73, lastUpdate: "4 min ago", temperature: 30 },
  { id: "BIN-008", location: "Station Rd, Zone D", lat: 28.615, lng: 77.195, wasteCategory: "General", fillLevel: 55, lastUpdate: "6 min ago", temperature: 31 },
  { id: "BIN-009", location: "Garden Ave, Zone A", lat: 28.628, lng: 77.218, wasteCategory: "Recyclable", fillLevel: 95, lastUpdate: "30 sec ago", temperature: 33 },
  { id: "BIN-010", location: "Factory Rd, Zone C", lat: 28.606, lng: 77.228, wasteCategory: "Hazardous", fillLevel: 48, lastUpdate: "7 min ago", temperature: 36 },
];

export const citizenRewards: CitizenReward[] = [
  { rank: 1, name: "Priya Sharma", avatar: "PS", points: 2840, segregationRate: 98, badge: "🏆" },
  { rank: 2, name: "Arjun Patel", avatar: "AP", points: 2650, segregationRate: 96, badge: "🥈" },
  { rank: 3, name: "Meera Reddy", avatar: "MR", points: 2420, segregationRate: 94, badge: "🥉" },
  { rank: 4, name: "Rahul Kumar", avatar: "RK", points: 2180, segregationRate: 91, badge: "⭐" },
  { rank: 5, name: "Ananya Singh", avatar: "AS", points: 1950, segregationRate: 89, badge: "⭐" },
];

export const wasteStats: WasteStats[] = [
  { month: "Jan", biodegradable: 420, recyclable: 380, hazardous: 45, general: 290 },
  { month: "Feb", biodegradable: 460, recyclable: 400, hazardous: 38, general: 270 },
  { month: "Mar", biodegradable: 510, recyclable: 450, hazardous: 52, general: 310 },
  { month: "Apr", biodegradable: 480, recyclable: 420, hazardous: 41, general: 280 },
  { month: "May", biodegradable: 530, recyclable: 470, hazardous: 48, general: 260 },
  { month: "Jun", biodegradable: 550, recyclable: 490, hazardous: 55, general: 240 },
];

export const dailyCollection = [
  { day: "Mon", tons: 12.4 },
  { day: "Tue", tons: 14.2 },
  { day: "Wed", tons: 11.8 },
  { day: "Thu", tons: 15.6 },
  { day: "Fri", tons: 13.9 },
  { day: "Sat", tons: 9.2 },
  { day: "Sun", tons: 7.5 },
];
