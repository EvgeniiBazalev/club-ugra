import { PaperClipIcon } from "@heroicons/react/20/solid";
import { infoAbout } from "./infoAbout";

const DocumentsMain = () => {
  return (
    <div className="relative isolate px-4 py-6 sm:py-8 sm:px-6 lg:px-16 lg:py-12 bg-white">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Информация об организации
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Официальные сведения и документы организации.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {infoAbout.map((item) => (
            <div
              className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              key={item.key}
            >
              <dt className="text-sm font-medium leading-6 text-gray-900">
                {item.header}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {item.value}
              </dd>
            </div>
          ))}

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Документы
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        Выписка из ЕГРЮЛ.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">0.2mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="/documents/egrul.pdf"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      download
                    >
                      Скачать
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DocumentsMain;
