import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Square, RefreshCw } from "lucide-react";

const resources = [
  { id: 1, name: "es_extended", status: "running", version: "1.9.4" },
  { id: 2, name: "esx_policejob", status: "stopped", version: "1.0.0" },
  { id: 3, name: "mysql-async", status: "running", version: "3.3.2" },
];

const Resources = () => {
  return (
    <div className="tablet-container">
      <div className="flex gap-6">
        <AdminSidebar />
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Resources</h2>
            <Button>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
          <div className="space-y-4">
            {resources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{resource.name}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      resource.status === "running" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                    }`}>
                      {resource.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400">Version: {resource.version}</p>
                    <div className="flex gap-2">
                      {resource.status === "stopped" ? (
                        <Button size="sm" variant="outline">
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          <Square className="w-4 h-4 mr-2" />
                          Stop
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Restart
                      </Button>
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

export default Resources;