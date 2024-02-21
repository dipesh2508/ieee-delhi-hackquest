import { Card, CardContent } from "@/components/ui/Card";

const TimelineCard = () => {
  return (
    <div className="container relative grid grid-cols-2 gap-20 px-4 md:px-6">
      <div className="absolute left-1/2 hidden h-full w-2 bg-secondary lg:block"></div>

      <div className="col-span-1 flex items-center justify-end gap-4">
        <div className="grid grid-rows-4 items-center justify-center text-center">
          <div className="row-start-1 row-end-5 h-full w-0.5 translate-y-2.5 rounded-full bg-gray-800 lg:translate-y-0.5 xl:translate-y-1.5" />
          <div className="row-1 h-3 w-3 translate-x-2.5 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
          <div className="row-2 h-3 w-3 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
          <div className="row-3 h-3 w-3 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
          <div className="row-4 h-3 w-3 translate-x-2.5 rounded-full border border-gray-800 bg-gray-200 dark:border-slate-800 dark:bg-gray-800" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold tracking-wide text-gray-300">
            Hackathon Starts
          </h3>
          <p className="text-sm text-gray-500">March 30, 2024</p>
        </div>
      </div>

      <Card className="col-span-1 my-12 mr-96 w-max bg-gray-800 p-6">
        <CardContent className="flex flex-col gap-4 text-sm text-gray-300">
          <div className="font-semibold">11:00 AM</div>
          <p>Participants starts to join the event and the opening ceremony</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineCard;
