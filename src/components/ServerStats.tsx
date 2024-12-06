import { Users, Clock, Wifi, Shield } from "lucide-react";

const StatCard = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="stat-card">
    <Icon className="w-6 h-6 text-neon-blue" />
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

export const ServerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Users} label="Players Online" value="32/64" />
      <StatCard icon={Clock} label="Uptime" value="24h 32m" />
      <StatCard icon={Wifi} label="Ping" value="32ms" />
      <StatCard icon={Shield} label="Staff Online" value="3" />
    </div>
  );
};