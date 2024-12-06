import { AdminSidebar } from "@/components/AdminSidebar";
import { PlayersList } from "@/components/PlayersList";

const Players = () => {
  return (
    <div className="tablet-container">
      <div className="flex gap-6">
        <AdminSidebar />
        <div className="flex-1 space-y-6">
          <PlayersList />
        </div>
      </div>
    </div>
  );
};

export default Players;