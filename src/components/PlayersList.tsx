import { MoreVertical } from "lucide-react";

const players = [
  { id: 1, name: "John Doe", steamId: "STEAM_0:1:123456", ping: 32 },
  { id: 2, name: "Jane Smith", steamId: "STEAM_0:1:789012", ping: 45 },
  { id: 3, name: "Bob Johnson", steamId: "STEAM_0:1:345678", ping: 28 },
];

export const PlayersList = () => {
  return (
    <div className="glass-panel p-4">
      <h2 className="text-xl font-bold mb-4">Players Online</h2>
      <div className="space-y-2">
        {players.map((player) => (
          <div key={player.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5">
            <div>
              <h3 className="font-medium">{player.name}</h3>
              <p className="text-sm text-gray-400">{player.steamId}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{player.ping}ms</span>
              <button className="p-1 rounded-lg hover:bg-white/10">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};