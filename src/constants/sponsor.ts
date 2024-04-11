import Reskill from '@/assets/sponsors/reskilll.png'
import LWT from '@/assets/sponsors/LWT.png'
import CT from '@/assets/sponsors/ct.png'
import Unstop from '@/assets/sponsors/unstop.png'
import { StaticImageData } from 'next/image';

export interface Isponsor {
    image: StaticImageData;
    name: string;
    title: string;
}

export const sponsors:Isponsor[] = [

    {
        image: Reskill,
        name: "Reskill",
        title: "Associate Partner"
    },
    {
        image: Unstop,
        name: "Unstop",
        title: "Platform Partner"
    },
    {
        image: LWT,
        name: "Learn While Travelling",
        title: "Knowledge Partner"
    }
]