import { AdminSidebar } from "@/components/AdminSidebar";
import { ServerStats } from "@/components/ServerStats";
import { PlayersList } from "@/components/PlayersList";

const Index = () => {
  return (
    <div className="tablet-container">
      <div className="flex gap-6">
        <AdminSidebar />
        <div className="flex-1 space-y-6">
          <ServerStats />
          <PlayersList />
        </div>
      </div>
    </div>
  );
};

export default Index;