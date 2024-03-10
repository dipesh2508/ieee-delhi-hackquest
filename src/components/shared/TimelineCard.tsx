import { Card, CardContent } from "@/components/ui/Card";
import clsx from "clsx";
import { MotionDiv } from "../animation/motionDiv";

interface ITimelineCardProps {
  left: boolean;
  title: string;
  date: string;
  time: string;
  description: string;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TimelineCard: React.FC<ITimelineCardProps> = ({
  title,
  date,
  time,
  description,
  left,
}) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      transition={{
        delay: 0.3,
        ease: "easeInOut",
        duration: 0.4,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="container relative grid grid-cols-2 gap-20 px-4 md:px-6"
    >
      <div className="absolute left-1/2 h-full w-1.5 md:w-2 bg-secondary"></div>

      <div
        className={clsx(
          `
      col-span-1 
      flex 
      items-center 
      gap-4`,
          left && "order-last justify-start",
          !left && "ml-4 justify-end text-right md:ml-0",
        )}
      >
        <div className="grid grid-rows-4 items-center justify-center text-center">
          <div className="row-start-1 row-end-5 h-full w-0.5 translate-y-2.5 rounded-full bg-gray-800 lg:translate-y-0.5 xl:translate-y-1.5" />
          <div className="row-1 h-3 w-3 translate-x-2.5 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
          <div className="row-2 h-3 w-3 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
          <div className="row-3 h-3 w-3 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
          <div className="row-4 h-3 w-3 translate-x-2.5 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
        </div>
        <div className="space-y-1">
          <h3 className=" text-sm text-wrap md:text-lg font-bold tracking-wide text-gray-300">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <Card
        className={clsx(
          `col-span-1 my-12 p-6 w-36 md:w-[500px]`,
          left && "order-first -mx-6 place-items-end md:ml-16",
          !left && "order-last -mx-4 place-items-start md:mx-0",
        )}
      >
        <CardContent className="flex flex-col gap-4 p-2 text-xs text-gray-300">
          <div className="font-semibold text-sm md:text-base">{time}</div>
          <p className="text-xs md:text-sm">{description}</p>
        </CardContent>
      </Card>
    </MotionDiv>
  );
};

export default TimelineCard;
