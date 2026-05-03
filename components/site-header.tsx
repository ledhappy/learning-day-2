import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Geberich
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              О бренде
            </Link>
          </nav>
        </div>
        <Button variant="outline">Где купить</Button>
      </div>
    </header>
  );
}
