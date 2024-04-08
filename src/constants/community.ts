import JamiaHamdard from '@/assets/community/IEEE_JHSB_Logo_-_IEEE_JHSB-removebg-preview.png'
import { StaticImageData } from 'next/image';
import NSUTQuiz from '@/assets/community/NSUT_QUIZ_CLUB__EAST_CAMPUS_-1-removebg-preview.png'
import MAIT from '@/assets/community/ieee_mait_-_shivam_gulati-removebg-preview.png'
import BVCOE from '@/assets/community/IEEE_BVCOE_Logos_-_IEEE_BVCOE-1-removebg-preview.png'
import GDSCIGDTUW from '@/assets/community/GDSC_IGDTUW_logo_-_GDSC_IGDTUW-removebg-preview.png'
import GFGADGIPS from '@/assets/community/Geeksforgeeks_Adgips_Chapter-removebg-preview.png'
import IEEESBLNMIIT from '@/assets/community/IEEE_SB_LNMIIT-1-removebg-preview.png'
import CipherLNMIIT from '@/assets/community/Cipher_Logo_upscaled - Sharvil Bhatt.png'
import IEEEMust from '@/assets/community/ModyIEEE1 - IEEE MUST SB.png'
import CnC from '@/assets/community/C_C_Logo_X_IEEE_Hackquest_-_cc_cell-1-removebg-preview.png'
import MicrosoftSBIGDTUW from '@/assets/community/Chapter Logo - IGDTUW - Microsoft Student Chapter.png'
import IEEEGTBIT from '@/assets/community/IEEE_GTBIT_LOGOS_-_IEEE_GTBIT_Student_Branch-1-removebg-preview.png'
import IEEEJEC from '@/assets/community/SB_LOGOS_JEC-1-removebg-preview.png'
import Sindri from '@/assets/community/_logo_IEEE_SB_BIT_Sindri-1-removebg-preview.png'
import Codemate from '@/assets/community/IMG_CodeMate_logo_2__-_CodeMate-removebg-preview.png'
import IEEEJMI from '@/assets/community/IEEE_Jamia-1-removebg-preview.png'
import IEEESBMNIT from '@/assets/community/IEEE_MNIT_JAIPUR-removebg-preview.png'
import IEEEADGIPS from '@/assets/community/IEEE ADGIP.png'
import IEEEIGDTUW from '@/assets/community/Ieee_IGDTUW_logo_-_IEEE_IGDTUW-1-removebg-preview.png'
import IEEEIIIT from '@/assets/community/logos_-_IEEE_IIIT-Delhi-3-removebg-preview.png'
import IEEEMRU from '@/assets/community/IEEE_MRU-removebg-preview.png'
import EES from '@/assets/community/EES LOGO.png'
import GDSCJH from '@/assets/community/Google_for_Developers_logomark_color - Mustafa Ali Khan.png'
import IITKharagpur from '@/assets/community/IEEEIITKGP.png'


export interface Icommmunity {
    image: StaticImageData;
    title: string;
}

export const community:Icommmunity[] = [
    {
        image: JamiaHamdard,
        title: "IEEE Jamia Hamdard Student Branch"
    },
    {
        image: NSUTQuiz,
        title: "NSUT QUIZ CLUB (EAST CAMPUS)"
    },
    {
        image: MAIT,
        title: "IEEE MAIT"
    },
    {
        image: BVCOE,
        title: "IEEE BVCOE SB"
    },
    {
        image: GDSCIGDTUW,
        title: "GDSC IGDTUW"
    },
    {
        image: GFGADGIPS,
        title: 'GeeksforGeeks Adgips Chapter'
    },
    {
        image: IEEESBLNMIIT,
        title: "IEEE SB LNMIIT"
    },
    {
        image: CipherLNMIIT,
        title: "Cipher LNMIIT"
    },
    {
        image: IEEEMust,
        title: "IEEE MUST SB"
    },
    {
        image: CnC,
        title: "Career and Counselling Cell"
    },
    {
        image: MicrosoftSBIGDTUW,
        title: "Microsoft Student Chapter IGDTUW"
    },
    {
        image: IEEEGTBIT,
        title: "IEEE GTBIT Student Branch"
    },
    {
        image: IEEEJEC,
        title: "IEEE SB JEPPIAAR ENGINEERING COLLEGE"
    },
    {
        image: Sindri,
        title: "IEEE BIT Sindri SB"
    },
    {
        image: Codemate,
        title: "CodeMate"
    },
    {
        image: IEEEJMI,
        title: "IEEE JMI"
    },
    {
        image: IEEESBMNIT,
        title: "IEEE SB MNIT"
    },
    {
        image: IEEEADGIPS,
        title: "IEEE ADGIPS"
    },
    {
        image: IEEEIGDTUW,
        title: "IEEE IGDTUW"
    },
    {
        image: IEEEIIIT,
        title: "IEEE IIIT Delhi SB"
    },
    {
        image: IEEEMRU,
        title: 'IEEE MRU SB'
    },
    {
        image: EES,
        title: "Electical Engineering Society IIT Delhi"
    },
    {
        image: GDSCJH,
        title: "GDSC Jamia Hamdard"
    },
    {
        image: IITKharagpur,
        title: "IEEE SB IIT Kharagpur"
    }
]