import { BadgeRussianRuble, Eye, Factory, FlaskConical } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const principles = [
  {
    icon: FlaskConical,
    title: "Доказательная медицина",
    description:
      "Каждая формула опирается на клинические исследования и метаанализы — никаких модных, но непроверенных ингредиентов.",
  },
  {
    icon: Eye,
    title: "Прозрачность",
    description:
      "Полный состав, дозировки и сертификаты — на упаковке и на сайте. Скрывать нечего, наоборот, гордимся.",
  },
  {
    icon: Factory,
    title: "Российское производство",
    description:
      "Производим на заводах с GMP-сертификацией в России. Контроль качества на каждом этапе.",
  },
  {
    icon: BadgeRussianRuble,
    title: "Честная цена",
    description:
      "Продаём напрямую через маркетплейсы, без розничных наценок. Платите за продукт, а не за дистрибуцию.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Принципы</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {principles.map(({ icon: Icon, title, description }) => (
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
