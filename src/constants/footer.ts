export interface ISmhandles {
    image: string;
    link: string;
}

export interface Iquicklinks {
    name: string;
    link: string;
}



export const sm_handles: ISmhandles[] = [
    {
        image: "/social_media/insta.svg",
        link: "https://www.instagram.com/hack_quest.ds/"
    },
    {
        image: "/social_media/FB.svg",
        link: "https://www.facebook.com/hackquest"
    },
    {
        image: "/social_media/linkedin.svg",
        link: "https://www.linkedin.com/company/hackquesthackathon/"
    },
];

export const quicklinks: Iquicklinks[] = [
    {
        name: "Register",
        link: "https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-910168"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: 'Tracks',
        link: '#tracks',
    },
    {
        name: 'Timeline',
        link: '#timeline',
    },
    {
        name: 'FAQs',
        link: '#faqs',
    },
];