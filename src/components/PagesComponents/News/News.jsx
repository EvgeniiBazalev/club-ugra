import Image from "next/image";

const News = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Акция 2024 - пробная тренировка бесплатно
          </h2>
          <p class="mb-4">
            В 2024 году наш клуб единоборств по тайскому боксу и кикбоксингу
            представляет уникальную возможность для всех желающих познакомиться
            с захватывающим миром боевых искусств. В рамках нашей акции `Пробная
            тренировка бесплатно` мы предоставляем каждому желающему возможность
            окунуться в интенсивный тренировочный процесс абсолютно бесплатно.
          </p>
          <p>
            Эта акция станет идеальным стартом для новичков, желающих начать
            свой путь в мире единоборств, а также для тех, кто уже имеет опыт в
            тайском боксе или кикбоксинге и хочет оценить уровень тренировок в
            нашем клубе.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <Image
            class="w-full rounded-lg"
            src="/news/1/1.jpg"
            alt=""
            width={640}
            height={480}
          />
          <Image
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="/news/1/2.jpg"
            alt=""
            width={640}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
