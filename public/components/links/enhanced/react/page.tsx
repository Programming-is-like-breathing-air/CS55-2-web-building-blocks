import { Button } from "@/components/ui/button";

export function EnhancedLink() {
  return (
    <Button asChild>
      <a href="https://www.sydney.edu.au/" >
        Read More →
      </a>
    </Button>
  );
}

export default EnhancedLink;
