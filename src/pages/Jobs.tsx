import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const jobs = [
  { id: 1, name: "Police", label: "Polícia", maxPlayers: 30, currentPlayers: 15 },
  { id: 2, name: "EMS", label: "Paramédico", maxPlayers: 20, currentPlayers: 8 },
  { id: 3, name: "Mechanic", label: "Mecânico", maxPlayers: 15, currentPlayers: 5 },
];

const Jobs = () => {
  return (
    <div className="tablet-container">
      <div className="flex gap-6">
        <AdminSidebar />
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Jobs</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle>{job.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Internal name: {job.name}</p>
                    <p>Players: {job.currentPlayers}/{job.maxPlayers}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </div>
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