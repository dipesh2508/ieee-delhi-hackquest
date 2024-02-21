import { Card, CardContent } from "@/components/ui/Card";
import clsx from "clsx";

interface ITimelineCardProps {
  left: boolean;
  title: string;
  date: string;
  time: string;
  description: string;
}

const TimelineCard: React.FC<ITimelineCardProps> = ({
  title,
  date,
  time,
  description,
  left,
}) => {
  return (
    <div className="container relative grid grid-cols-2 gap-20 px-4 md:px-6">
      <div className="absolute left-1/2 hidden h-full w-2 bg-secondary lg:block"></div>

      <div
        className={clsx(
          `
      col-span-1 
      flex 
      items-center 
      gap-4`,
          left && "order-last justify-start",
          !left && "justify-end",
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
          <h3 className="text-lg font-bold tracking-wide text-gray-300">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <Card className={clsx(`col-span-1 my-12 w-[500px] p-6`, left && 'order-first place-items-end ml-36')}>
        <CardContent className="flex flex-col gap-4 text-sm text-gray-300">
          <div className="font-semibold">{time}</div>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineCard;
