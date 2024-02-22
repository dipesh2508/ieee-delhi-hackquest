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
        date: "9th March 2024",
        time: "opens 23rd February 2024",
        description: "The PPT for the problem statement is to be submitted on Unstop. The submission will be open from 23rd February 2024 to 9th March 2024."
    },
    {
        left: true,
        title: "Round 1 (Online)",
        date: "17th March 2024",
        time: "10 AM - 4 PM",
        description: "This round will be an online presentation round where the participants will present their ideas to the judges."
    },
    {
        left: false,
        title: "Final Round (Offline)",
        date: "6th April 2024",
        time: "6th April - 7th April 2024",
        description: "This will be the offline round where the shortlisted participants will present their final product to the judges. The venue will be announced soon."
    },
]