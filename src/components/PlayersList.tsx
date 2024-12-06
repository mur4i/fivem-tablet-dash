import { MoreVertical, Shield } from "lucide-react";

const players = [
  { id: 1, name: "John Doe", steamId: "STEAM_0:1:123456", ping: 32, isStaff: true },
  { id: 2, name: "Jane Smith", steamId: "STEAM_0:1:789012", ping: 45, isStaff: false },
  { id: 3, name: "Bob Johnson", steamId: "STEAM_0:1:345678", ping: 28, isStaff: false },
];

export const PlayersList = () => {
  return (
    <div className="bg-ios-card backdrop-blur-md border border-ios-border rounded-2xl p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-ios-text-primary">Players Online</h2>
      <div className="space-y-4">
        {players.map((player) => (
          <div 
            key={player.id} 
            className="flex items-center justify-between p-4 rounded-xl transition-all duration-300
                     bg-black/20 border border-ios-border hover:bg-black/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-ios-text-primary">{player.name}</span>
                  {player.isStaff && (
                    <Shield className="w-4 h-4 text-ios-accent" />
                  )}
                </div>
                <span className="text-sm text-ios-text-secondary">{player.steamId}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm px-3 py-1 rounded-full ${
                player.ping < 30 ? 'bg-ios-success/20 text-ios-success' : 
                player.ping < 50 ? 'bg-ios-warning/20 text-ios-warning' : 
                'bg-ios-danger/20 text-ios-danger'
              }`}>
                {player.ping}ms
              </span>
              <button className="p-2 rounded-full hover:bg-black/20 transition-colors">
                <MoreVertical className="w-5 h-5 text-ios-text-secondary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};