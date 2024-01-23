import { Button, Carousel } from "flowbite-react";
import Image from "next/image";

const CarouselMain = () => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                КЛУБ ЕДИНОБОРСТВ ЮГРА
              </h2>
              <p className="mt-5 text-justify font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:max-w-3xl">
                Тренировки по тайскому боксу и кикбоксингу! Пробная тренировка
                бесплатно! Дети с 5 лет и старше, занятия для взрослых, группы
                для девушек. Специализированный зал. Дружеская атмосфера.
                Квалифицированные тренеры!
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-indigo-600 enabled:hover:bg-indigo-700"
              >
                Записаться
              </Button>
              <Button
                size="lg"
                color="gray"
                className="[&>span]:items-center"
                outline
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Узнать больше
              </Button>
            </div>
            <div className="mt-4 dark:border-gray-700 sm:mt-8 sm:border-t sm:border-gray-100 sm:pt-8">
              <p className="text-base font-medium text-gray-500 sm:block">
                Партнеры и спонсоры:
              </p>
              <div className="mt-3 flex max-w-md items-center">
                <a href="https://creative-da.ru" target="_blank">
                  <Image
                    className="mr-4 h-10 w-auto md:h-12"
                    src="partners/cda.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </a>
                <a href="https://achillesstore.ru" target="_blank">
                  <Image
                    className="mr-4 h-10 w-auto md:h-12"
                    src="/partners/ahiles.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </a>
                <a href="https://www.alsi-grupp.ru" target="_blank">
                  <Image
                    className="mr-4 h-10 w-auto md:h-12"
                    src="/partners/alsi.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </a>
                <a href="https://avers-sport.ru" target="_blank">
                  <Image
                    className="mr-4 h-10 w-auto md:h-12"
                    src="/partners/avers.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </a>
                <a href="https://vk.com/istokisurgut" target="_blank">
                  <Image
                    className="mr-4 h-10 w-auto md:h-12"
                    src="/partners/istoki.jpg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </a>
                <a href="https://skuvis.ru" target="_blank">
                  <Image
                    className="mr-4 h-10 w-auto md:h-12"
                    src="/partners/uvis.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
          <Carousel className="h-64 md:h-96">
            <Image
              src="/carusel/7.jpg"
              className="rounded-lg"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/carusel/8.jpg"
              className="rounded-lg"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/carusel/9.jpg"
              className="rounded-lg"
              alt=""
              width={1920}
              height={1080}
            />
            <Image
              src="/carusel/10.jpg"
              className="rounded-lg"
              alt=""
              width={1920}
              height={1080}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselMain;
