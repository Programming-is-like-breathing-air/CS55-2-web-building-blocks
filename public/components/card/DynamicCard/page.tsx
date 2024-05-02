import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "../../../../styles/components/ui/card";
import { useState } from "react";

function DynamicCardComponent() {
  const [hovered, setHovered] = useState(null);

  const data = [
    { name: "analytics", value: "12,403", change: "+15% /wk", color: "bg-teal-500" },
    { name: "emails", value: "112,403", change: "+15% /wk", color: "bg-red-500" },
  ];

  const footerContent = {
    analytics: { label: "High Latency Detected", time: "8s" },
    emails: { label: "Total Events Triggered", count: "35,968" },
  };

  return (
    <Card className="max-w-10xl p-4">
      <CardHeader className="flex justify-between">
        <CardTitle>Events Triggered</CardTitle>
        <span className="text-sm font-medium">Production</span>
      </CardHeader>
      <CardContent>
        {data.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center py-3 px-4 border rounded-lg cursor-pointer mb-2"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="flex-1">{item.name}</span>
            <span className="flex-1 text-right pl-8">{item.value}</span> 
            <span className="flex-1 text-right pl-8">{item.change}</span> 
            <div className={`w-20 h-2 rounded ${item.color}`}></div> 
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