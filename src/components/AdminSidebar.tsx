import { Users, Shield, Terminal, Settings, Activity, Briefcase, Database, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
}

const SidebarItem = ({ icon: Icon, label, to }: SidebarItemProps) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
        "hover:bg-white/10",
        active && "bg-white/10 text-neon-blue"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};

export const AdminSidebar = () => {
  return (
    <div className="glass-panel w-64 p-4 flex flex-col gap-4">
      <div className="flex items-center gap-3 px-4 py-2">
        <Shield className="w-6 h-6 text-neon-blue" />
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      
      <div className="flex flex-col gap-2">
        <SidebarItem icon={Activity} label="Dashboard" to="/" />
        <SidebarItem icon={Users} label="Players" to="/players" />
        <SidebarItem icon={Briefcase} label="Jobs" to="/jobs" />
        <SidebarItem icon={Database} label="Resources" to="/resources" />
        <SidebarItem icon={Command} label="Commands" to="/commands" />
        <SidebarItem icon={Settings} label="Settings" to="/settings" />
      </div>
    </div>
  );
};