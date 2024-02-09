import { Footer } from "flowbite-react";

const FooterMain = () => {
  return (
    <Footer>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center p-4 text-center md:p-8 lg:p-10 [&>div]:w-fit">
        <Footer.Brand
          alt="Logo"
          href="#"
          name="КЛУБ ЮГРА"
          src="/main/logo3.ico"
        />
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Среди трудностей и вызовов, мы — единое целое, Клуб Югра берется за
          каждую возможность, воплощая силу духа в движениях борьбы, стремясь к
          великим достижениям!
        </p>
        <Footer.LinkGroup className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white text-base">
          <Footer.Link href="/about" className="mr-4 hover:underline md:mr-6 ">
            О клубе
          </Footer.Link>
          <Footer.Link href="/news" className="mr-4 hover:underline md:mr-6">
            Новости
          </Footer.Link>

          <Footer.Link href="/contact" className="mr-4 hover:underline md:mr-6">
            Контакты
          </Footer.Link>
        </Footer.LinkGroup>
        <Footer.Copyright
          by="Региональная Общественная организация ХМАО-Югры Клуб Единоборств Югра™. Все права защищены."
          href="#"
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default FooterMain;
