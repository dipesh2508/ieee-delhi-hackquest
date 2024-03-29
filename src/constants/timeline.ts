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
    title: "Registration Opens",
    date: "6th March 2024",
    time: "Opens 6th March 2024",
    description:
      "The registration for the hackathon will open on 6th March 2024. The registration link will be available on the website and social media handles.",
  },
  {
    left: true,
    title: "Registration Closes",
    date: "29th March 2024",
    time: "Closes 29th March 2024",
    description:
      "The registration for the hackathon will close on 29th March 2024. The registration link will be available on the website and social media handles.",
  },
  {
    left: false,
    title: "Submission Round (via Unstop)",
    date: "29th March 2024",
    time: "Opens 6th March 2024 and closes on 29th March 2024",
    description:
      "The PPT for the problem statement is to be submitted on Unstop. The submission will be open from 6th March 2024 to 29th March 2024.",
  },
  {
    left: true,
    title: "Round 1 Shortlisting Announcement",
    date: "30th March 2024",
    time: "30th March 2024",
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
    date: "To be revealed soon",
    time: "To be revealed soon",
    description:
      "This will be the offline round where the shortlisted participants will present their final product to the judges. The venue will be announced soon.",
  },
];
