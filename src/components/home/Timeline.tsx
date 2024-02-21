import TimelineCard from "../shared/TimelineCard";
import { timelineData } from "@/constants/timeline";

const Timeline = () => {
  return (
    <section id="timeline" className="w-full bg-dark  bg-opacity-90 py-24 ">
      <h2 className="mb-24 text-center font-secondary text-6xl font-semibold text-headings">
        Timeline
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
    </section>
  );
};

export default Timeline;
