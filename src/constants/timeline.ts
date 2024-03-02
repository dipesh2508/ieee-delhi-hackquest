export interface ITimelineProps {
  left: boolean;
  title: string;
  date: string;
  time: string;
  description: string;
}

export const timelineData: ITimelineProps[] = [
  {
    left: false,
    title: "Submission Round (via Unstop)",
    date: "20th March 2024",
    time: "opens 3rd March 2024",
    description:
      "The PPT for the problem statement is to be submitted on Unstop. The submission will be open from 3rd March 2024 to 20th March 2024.",
  },
  {
    left: true,
    title: "Round 1 Shortlisting Announcement",
    date: "28th March 2024",
    time: "28th March 2024",
    description:
      "The shortlisted participants for the next round will be announced on the website and social media handles. The shortlisted participants will be notified via email.",
  },
  {
    left: false,
    title: "Round 1 (Online)",
    date: "31st March 2024",
    time: "31st March 2024",
    description:
      "This round will be an online presentation round where the participants will present their ideas to the judges.",
  },
  {
    left: true,
    title: "Final Round (Offline)",
    date: "13th April 2024",
    time: "13th April - 14th April 2024",
    description:
      "This will be the offline round where the shortlisted participants will present their final product to the judges. The venue will be announced soon.",
  },
];
