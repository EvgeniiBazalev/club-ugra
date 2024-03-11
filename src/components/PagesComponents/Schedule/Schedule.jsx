"use client";

import { Tabs, Badge, Timeline } from "flowbite-react";
import getCurrentWeekDays from "@/support/getCurrentWeekDays";
import scheduleTraining from "./scheduleTraining";
import getTrainerInfo from "./getTrainerInfo";
import { team } from "../TeamPage/team";
import Image from "next/image";

const Schedule = () => {
  let i = 1;
  const currentWeekDays = getCurrentWeekDays();
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Расписание занятий
          </h2>
        </div>
        <div className="flex justify-center mt-8 lg:mt-12">
          <Tabs
            style="pills"
            theme={{
              tablist: {
                styles: {
                  pills:
                    "flex-wrap justify-center font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
                },
                tabitem: {
                  base: "flex items-center justify-center p-4 rounded-3xl text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-blue-300 focus:outline-none",
                  styles: {
                    pills: {
                      active: {
                        on: "bg-blue-600 text-white",
                        off: "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
                      },
                    },
                  },
                },
              },
            }}
          >
            {currentWeekDays.map((day) =>
              day.isCurrentDate ? (
                <Tabs.Item active title={day.date} key={day.id}>
                  <Timeline className="border-0">
                    <div className="grid max-w-5xl grid-cols-1 p-5 mx-auto border border-gray-100 rounded-lg bg-gray-50 sm:grid-cols-2 dark:bg-gray-800 dark:border-gray-700">
                      {leftRightSchedule(day.id)}
                    </div>
                  </Timeline>
                </Tabs.Item>
              ) : (
                <Tabs.Item title={day.date} key={day.id}>
                  <Timeline className="border-0">
                    <div className="grid max-w-5xl grid-cols-1 p-5 mx-auto border border-gray-100 rounded-lg bg-gray-50 sm:grid-cols-2 dark:bg-gray-800 dark:border-gray-700">
                      {leftRightSchedule(day.id)}
                    </div>
                  </Timeline>
                </Tabs.Item>
              )
            )}
          </Tabs>
        </div>
        <div className="mt-8 text-center">
          <a
            href="/contact"
            title=""
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Записаться
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

const leftRightSchedule = (day) => {
  let i = 1;
  return scheduleTraining[day].map((training) => {
    const trainerInfo = getTrainerInfo(training.trainerId, team);

    return i++ % 2 !== 0 ? (
      <Timeline.Item
        className="ml-0 space-y-3 mb-0 md:border-r md:border-b border-gray-200 dark:border-gray-700 py-5"
        key={training.key}
      >
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
            <Badge className="w-fit">
              <svg
                aria-hidden="true"
                className="w-3 h-3 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {training.time}
            </Badge>
          </Timeline.Time>

          <Timeline.Title>
            <a href="#" className="hover:underline">
              {training.title}
            </a>
          </Timeline.Title>
          <div className="flex items-center gap-3">
            <Image
              className="object-cover w-12 h-12 rounded-full shrink-0"
              src={trainerInfo.imageUrl}
              alt=""
              width={50}
              height={50}
            />

            {/* fff */}
            <div>
              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                {trainerInfo.name}
              </p>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {trainerInfo.role}
              </p>
            </div>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    ) : (
      <Timeline.Item
        className="ml-0 space-y-3 mb-0 md:pl-5 md:border-b border-gray-200 dark:border-gray-700 py-5"
        key={training.key}
      >
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
            <Badge className="w-fit">
              <svg
                aria-hidden="true"
                className="w-3 h-3 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {training.time}
            </Badge>
          </Timeline.Time>

          <Timeline.Title>
            <a href="#" className="hover:underline">
              {training.title}
            </a>
          </Timeline.Title>
          <div className="flex items-center gap-3">
            <Image
              className="object-cover w-12 h-12 rounded-full shrink-0"
              src={trainerInfo.imageUrl}
              alt=""
              width={50}
              height={50}
            />
            <div>
              <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                {trainerInfo.name}
              </p>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {trainerInfo.role}
              </p>
            </div>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    );
  });
};
