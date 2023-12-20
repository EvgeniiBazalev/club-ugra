import React from "react";
import faqItems from "./faqGridText";

const FAQGrid = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Часто задаваемые вопросы
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 lg:text-lg">
            Если Вы не нашли ответ на ваш вопрос, наши администраторы всегда с
            удовольствем ответят на все интересующие вас вопросы
          </p>
        </div>
        <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-16">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {item.question}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQGrid;
