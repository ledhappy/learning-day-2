import { Shield, Sparkles, Zap } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Клинически проверено",
    description: "Научный совет, сертификаты GMP, проверенные ингредиенты.",
  },
  {
    icon: Zap,
    title: "Быстрая доставка",
    description: "Wildberries, Ozon, Yandex Market — привычные сервисы.",
  },
  {
    icon: Sparkles,
    title: "Без переплат",
    description: "Заводская цена, без посредников и наценок ритейла.",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="mb-3 size-6 text-foreground" />
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
