import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const team = [
  {
    initials: "АС",
    name: "Анна Соколова",
    role: "Основатель",
    bio: "Бывший фармацевт с 12-летним стажем. Запустила Geberich, чтобы качественные нутрицевтики стоили адекватно.",
  },
  {
    initials: "ДО",
    name: "Дмитрий Орлов",
    role: "Научный директор",
    bio: "Кандидат медицинских наук. Отвечает за подбор формул и работу с независимым научным советом.",
  },
  {
    initials: "ЕК",
    name: "Елена Кравцова",
    role: "Главный нутрициолог",
    bio: "Сертифицированный нутрициолог. Помогает подбирать схемы приёма и консультирует партнёров бренда.",
  },
];

export function AboutTeam() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Команда</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {team.map(({ initials, name, role, bio }) => (
          <Card key={name}>
            <CardHeader>
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-muted text-sm font-medium">
                {initials}
              </div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
