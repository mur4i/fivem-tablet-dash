import { Users, Clock, Wifi, Shield } from "lucide-react";

const StatCard = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="bg-ios-card backdrop-blur-md border border-ios-border rounded-2xl p-6 transition-all duration-300 hover:bg-ios-card/80">
    <div className="flex flex-col gap-4">
      <Icon className="w-8 h-8 text-ios-accent" />
      <div className="space-y-1">
        <div className="text-3xl font-semibold text-ios-text-primary">{value}</div>
        <div className="text-ios-text-secondary text-sm">{label}</div>
      </div>
    </div>
  </div>
);

export const ServerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard icon={Users} label="Players Online" value="32/64" />
      <StatCard icon={Clock} label="Uptime" value="24h 32m" />
      <StatCard icon={Wifi} label="Ping" value="32ms" />
      <StatCard icon={Shield} label="Staff Online" value="3" />
    </div>
  );
};