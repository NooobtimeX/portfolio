import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 py-12 text-foreground">
            <div className="container mx-auto max-w-7xl px-4">
                <Separator className="my-4" />
                <p className="text-center text-sm">
                    © 2025 NooobtimeX. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
