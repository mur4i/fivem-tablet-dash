import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Commands = () => {
  return (
    <div className="tablet-container">
      <div className="flex gap-6">
        <AdminSidebar />
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Console</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4 h-[400px] overflow-y-auto font-mono text-sm">
                  <div className="text-gray-400">[INFO] Server started</div>
                  <div className="text-gray-400">[INFO] Resources loaded: 150</div>
                  <div className="text-gray-400">[INFO] Players online: 32</div>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Type a command..." className="font-mono" />
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Commands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Button variant="outline" size="sm">Restart Server</Button>
                <Button variant="outline" size="sm">Clear Chat</Button>
                <Button variant="outline" size="sm">List Resources</Button>
                <Button variant="outline" size="sm">Player Count</Button>
                <Button variant="outline" size="sm">Server Status</Button>
                <Button variant="outline" size="sm">Refresh Scripts</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Commands;