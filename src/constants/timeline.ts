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
        title: "Opening Ceremony",
        date: "30th March 2024",
        time: "10:00 AM - 11:00 AM",
        description: "The opening ceremony will be held at the main stage. The ceremony will be inaugurated by our chief guest and the organizing committee."
    },
    {
        left: true,
        title: "Workshop",
        date: "30th March 2024",
        time: "11:00 AM - 12:00 PM",
        description: "The workshop will be held at the workshop hall. The workshop will be conducted by our experienced speakers."
    }
]