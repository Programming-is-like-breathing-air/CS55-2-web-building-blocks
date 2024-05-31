import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
    return (
      <Tabs defaultValue="recent" className="w-[400px]">
      <TabsList className="flex w-full">
        <TabsTrigger value="recent" className="w-full text-center">Recent</TabsTrigger>
        <TabsTrigger value="popular" className="w-full text-center">Popular</TabsTrigger>
        <TabsTrigger value="trending" className="w-full text-center">Trending</TabsTrigger>
        </TabsList>
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>1h ago - 2 comments - 1 shares</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suspendisse eget ante viverra</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>1h ago - 3 comments - 2 shares</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="popular">
          <Card>
            <CardHeader>
              <CardTitle>Donec eleifend dui quis varius placerat</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>11h ago - 15 comments - 4 shares</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ut vel ligula consequat, aliquet ipsum ut</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>5h ago - 7 comments - 3 shares</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="trending">
          <Card>
            <CardHeader>
              <CardTitle>Maecenas vel quam ac nibh tincidunt maximus</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>3h ago - 5 comments - 2 shares</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Donec elementum erat eleifend mi posuere hendrerit</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>2h ago - 4 comments - 1 shares</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    )
  }
  
  export default TabsDemo;