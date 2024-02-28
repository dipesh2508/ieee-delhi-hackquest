import TimelineCard from "../shared/TimelineCard";
import { timelineData } from "@/constants/timeline";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="w-full bg-dark bg-opacity-90 px-16 py-12 md:px-36 "
    >
      <div className="col-span-12 mb-36 h-1 w-full rounded-full bg-gradient-to-r from-primary to-secondary"></div>
      <h2 className="mb-24 text-center font-secondary text-6xl font-semibold text-headings">
        TIMELINE
      </h2>
      {timelineData.map((data, index) => (
        <TimelineCard
          key={index}
          left={data.left}
          title={data.title}
          date={data.date}
          time={data.time}
          description={data.description}
        />
      ))}
      <div className="col-span-12 mb-8 mt-36 h-1 w-full rounded-full bg-gradient-to-r from-primary to-secondary"></div>
    </section>
  );
};

export default Timeline;
