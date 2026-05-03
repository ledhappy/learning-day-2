import { AboutPrinciples } from "@/components/about-principles";
import { AboutTeam } from "@/components/about-team";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            О Geberich
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Делаем нутрицевтики на основе доказательной медицины и продаём
            их там, где удобно покупать — на маркетплейсах.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Наша история
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Geberich появился в 2018 году, когда команда фармацевтов и
              нутрициологов поняла простую вещь: на полках хватает добавок,
              но почти нет тех, чьи формулы можно открыто разобрать с врачом.
              Мы захотели изменить это и собрали бренд, в котором каждый
              компонент имеет за собой исследование, а не маркетинговую
              легенду.
            </p>
            <p>
              Первые партии мы выпускали маленькими сериями и тестировали
              внутри сообщества врачей и спортсменов. Уже через год к нам
              начали приходить запросы на постоянные поставки — и мы поняли,
              что готовы выходить шире. С 2021 года Geberich продаётся на
              Wildberries, Ozon и Yandex Market: это короткий путь от завода
              до покупателя без лишних посредников.
            </p>
            <p>
              Сегодня мы развиваем линейку вместе с независимым научным
              советом, обновляем составы по мере появления новых данных и
              держим цену на уровне, который не зависит от ритейлеров.
              Geberich — про здоровье, которое работает: спокойно,
              доказательно и без переплат.
            </p>
          </div>
        </section>

        <AboutPrinciples />
        <AboutTeam />
      </main>
      <SiteFooter />
    </>
  );
}
