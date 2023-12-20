import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Разовый",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "от 400₽",
    description:
      "Вы планируете изредка посещать клуб или попробовать новое направление.",
    features: [
      "Одно посещение любой тренировки",
      "Доступ во все зоны клуба",
      "Ознакомление с оборудованием",
      "Консультация тренера",
    ],
    mostPopular: false,
  },
  {
    name: "Месячный",
    id: "tier-startup",
    href: "#",
    priceMonthly: "от 250₽",
    description:
      "Пользуется наибольшей популярностью у начинающих спортсменов и спортсменов со средним уровнем подготовки",
    features: [
      "Посещение 8ми тренировок",
      "Доступ во все зоны клуба",
      "Индивидуальные консультации",
      "Доступ к спортивным мероприятиям",
      "Ежемесячные конкурсы",
    ],
    mostPopular: true,
  },
  {
    name: "Годовой",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "от 200₽",
    description:
      "Идеально подходит для постоянных клиентов, регулярно посещающих наш клуб.",
    features: [
      "Безлимитное посещение тренировок",
      "2 индивидуальных занятия в месяц",
      "Доступ во все зоны клуба",
      "Доступ к спортивным мероприятиям",
      "Ежемесячные конкурсы",
      "Комплексный анализ физической формы",
      "Дополнительные тренировки вне графика",
      "Возможность заморозки абонемента",
      "Подарки от спонсоров Club-Ugra",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Тарифные планы
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Ваша Победа – Наш Приоритет!
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Присоединяйтесь к Club-Ugra, где ваша победа не просто цель, а
          настоящее произведение искусства. Каждый момент тренировки становится
          ценным шагом на пути к успеху, а разумные цены делают этот путь ещё
          более захватывающим и достижимым. Погрузитесь в атмосферу, где каждый
          шаг наполнен креативностью и красотой вашего собственного
          преображения.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Популярный
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /за тренировку
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Записаться сейчас
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
