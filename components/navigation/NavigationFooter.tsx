import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-inherit py-12 text-foreground">
      <div className="container mx-auto max-w-7xl px-4">
        <Separator className="my-4" />
        <p className="text-center text-sm">
          © 2025 NooobtimeX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
