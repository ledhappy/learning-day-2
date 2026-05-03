import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Здоровье, которое работает
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        Премиальные нутрицевтики на основе клинических исследований. Доставка с
        маркетплейсов за 1 день.
      </p>
      <Button className="mt-10 h-12 px-6 text-base">
        Купить на Wildberries
      </Button>
    </section>
  );
}
