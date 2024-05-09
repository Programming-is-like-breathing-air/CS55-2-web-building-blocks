import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "../../../../../styles/components/ui/card";
import { useState } from "react";

function DynamicCardComponent() {
  const [hovered, setHovered] = useState<string | null>(null);

  const data = [
    { name: "analytics", value: "12,403", change: "+15% /wk", color: "#38b2ac", barWidth: '50px' }, 
    { name: "emails", value: "112,403", change: "+15% /wk", color: "#f56565", barWidth: '80px' }, 
  ];

  const footerContent = {
    analytics: { label: "High Latency Detected", time: "8s" },
    emails: { label: "Online Now", count: "1,302" },
  };

  return (
    <Card className="w-full p-4"> 
      <CardHeader className="flex justify-between">
        <CardTitle>Events Triggered</CardTitle>
        <span className="text-sm font-medium">Production</span>
      </CardHeader>
      <CardContent>
        {data.map((item) => (
          <div
            key={item.name}
            className="flex py-3 px-4 border rounded-lg cursor-pointer mb-2"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex flex-1 items-center space-x-2"> 
              <span>{item.name}</span>
              <span>{item.value}</span>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-2"> 
              <span>{item.change}</span>
              <div
                style={{ backgroundColor: item.color, width: item.barWidth }} 
                className="h-2 rounded"
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {hovered && (
          <CardDescription>
            {hovered === "analytics" && (
              <div className="flex items-center pl-4"> 
                <span className="text-red-600">⚠</span>
                <span>{footerContent[hovered].label}</span>
                <span className="pl-4">{footerContent[hovered].time}</span> 
              </div>
            )}
            {hovered === "emails" && (
              <div className="flex items-center pl-4"> 
                <span className="text-green-600">✓</span>
                <span>{footerContent[hovered].label}</span>
                <span className="pl-4">{footerContent[hovered].count}</span> 
              </div>
            )}
          </CardDescription>
        )}
        {!hovered && (
          <CardDescription>Total Events Triggered: 35,968</CardDescription>
        )}
      </CardFooter>
    </Card>
  );
}

export default DynamicCardComponent;
