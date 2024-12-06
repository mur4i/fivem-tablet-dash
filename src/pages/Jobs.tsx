import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, UserMinus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

const jobs = [
  { 
    id: 1, 
    name: "Police", 
    label: "Polícia", 
    maxPlayers: 30, 
    currentPlayers: 15,
    players: [
      { id: 1, name: "John Doe", rank: "Officer" },
      { id: 2, name: "Jane Smith", rank: "Detective" }
    ]
  },
  { 
    id: 2, 
    name: "EMS", 
    label: "Paramédico", 
    maxPlayers: 20, 
    currentPlayers: 8,
    players: [
      { id: 3, name: "Mike Johnson", rank: "Paramedic" }
    ]
  },
  { 
    id: 3, 
    name: "Mechanic", 
    label: "Mecânico", 
    maxPlayers: 15, 
    currentPlayers: 5,
    players: [
      { id: 4, name: "Bob Wilson", rank: "Senior Mechanic" }
    ]
  },
];

const Jobs = () => {
  const { toast } = useToast();

  const handleRemovePlayer = (jobId: number, playerId: number) => {
    toast({
      title: "Player removed",
      description: "The player has been removed from the job.",
    });
  };

  const handleUpdateRank = (jobId: number, playerId: number, newRank: string) => {
    toast({
      title: "Rank updated",
      description: "The player's rank has been updated successfully.",
    });
  };

  return (
    <div className="tablet-container">
      <div className="flex gap-6">
        <AdminSidebar />
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-ios-text-primary">Jobs</h2>
            <Button className="bg-ios-accent hover:bg-ios-accent/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-ios-card border-ios-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-ios-text-primary">{job.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-ios-text-secondary space-y-1">
                      <p>Internal name: {job.name}</p>
                      <p>Players: {job.currentPlayers}/{job.maxPlayers}</p>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-ios-border text-ios-text-primary">
                          <Pencil className="w-4 h-4 mr-2" />
                          Manage Players
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-ios-card border-ios-border backdrop-blur-sm">
                        <DialogHeader>
                          <DialogTitle className="text-ios-text-primary">Manage {job.label} Players</DialogTitle>
                        </DialogHeader>
                        <Table>
                          <TableHeader>
                            <TableRow className="border-ios-border">
                              <TableHead className="text-ios-text-secondary">Name</TableHead>
                              <TableHead className="text-ios-text-secondary">Rank</TableHead>
                              <TableHead className="text-ios-text-secondary">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {job.players.map((player) => (
                              <TableRow key={player.id} className="border-ios-border">
                                <TableCell className="text-ios-text-primary">{player.name}</TableCell>
                                <TableCell className="text-ios-text-primary">
                                  <select
                                    className="bg-ios-bg border border-ios-border rounded px-2 py-1 text-ios-text-primary"
                                    value={player.rank}
                                    onChange={(e) => handleUpdateRank(job.id, player.id, e.target.value)}
                                  >
                                    <option value="Recruit">Recruit</option>
                                    <option value="Officer">Officer</option>
                                    <option value="Detective">Detective</option>
                                    <option value="Chief">Chief</option>
                                  </select>
                                </TableCell>
                                <TableCell>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleRemovePlayer(job.id, player.id)}
                                    className="bg-ios-danger hover:bg-ios-danger/90"
                                  >
                                    <UserMinus className="w-4 h-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;