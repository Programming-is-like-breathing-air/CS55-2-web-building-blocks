import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export function ExpandLink() {
   
    return (
        <Card>
          <CardContent>
            <CardHeader>
              <CardTitle>For more information and details, please</CardTitle>
            </CardHeader>
            <CardDescription>
            </CardDescription>
            <CardFooter>
              <Button asChild>
                <a href="https://www.sydney.edu.au/" >
                  Read more ↓
                </a>
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      );
}

export default ExpandLink;
