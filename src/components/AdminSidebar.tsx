import { Users, Shield, Terminal, Settings, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
      "hover:bg-white/10",
      active && "bg-white/10 text-neon-blue"
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export const AdminSidebar = () => {
  return (
    <div className="glass-panel w-64 p-4 flex flex-col gap-4">
      <div className="flex items-center gap-3 px-4 py-2">
        <Shield className="w-6 h-6 text-neon-blue" />
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      
      <div className="flex flex-col gap-2">
        <SidebarItem icon={Activity} label="Dashboard" active />
        <SidebarItem icon={Users} label="Players" />
        <SidebarItem icon={Terminal} label="Console" />
        <SidebarItem icon={Settings} label="Settings" />
      </div>
    </div>
  );
};