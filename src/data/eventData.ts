// ============================================================
// Event & Speaker Data
// ============================================================

import type { Speaker, SpeakerGroup, EventDetails } from '../types';

export const eventDetails: EventDetails = {
  date: '08 August, 2026',
  day: 'SATURDAY',
  venue: 'T - WORKS',
  city: 'Hyderabad',
  phone1: '7981532054',
  phone2: '8297167157',
};

// ---- Speaker Groups (from images 1, 2, 3) ----

export const speakerGroups: SpeakerGroup[] = [
  {
    id: 'group-1',
    speakers: [
      {
        id: 'dunston',
        name: 'AMB. DUNSTON PEREIRA',
        title: 'Group CEO to the office of Shaikh Ahmed Bin Faisal al Qassimi',
        organization: '',
        cardColor: 'yellow',
        image: '/speakers/dunston.png',
      },
      {
        id: 'jaan',
        name: 'DR. JAAN NISSAR LONE',
        title: 'Global President',
        organization: 'BRICS Culture Media Forum & Head of The Times of Russia–India',
        cardColor: 'teal',
        image: '/speakers/jaan.png',
      },
      {
        id: 'sergei',
        name: 'DR. SERGEI DVORIANOV',
        title: 'Vice President & Director Communications',
        organization: 'BRICS Culture Media Forum',
        cardColor: 'pink',
        image: '/speakers/sergei.png',
      },
      {
        id: 'vladimir',
        name: 'VLADIMIR KEDRINSKY',
        title: 'Russian Businessman Founder – "Ifree" Company',
        organization: '',
        cardColor: 'teal',
        image: '/speakers/vladimir.png',
      },
      {
        id: 'kevin',
        name: 'KEVIN FENG',
        title: 'Head South',
        organization: 'OPPO Mobiles',
        cardColor: 'yellow',
        image: '/speakers/kevin.png',
      },
    ],
  },
  {
    id: 'group-2',
    speakers: [
      {
        id: 'rishikesh',
        name: 'RISHIKESH PATANKAR',
        title: 'Vice President',
        organization: 'NSDC',
        cardColor: 'yellow',
        image: '/speakers/rishikesh.png',
      },
      {
        id: 'balakista',
        name: 'PROF. V. BALAKISTA REDDY',
        title: 'Chairman TSCHE',
        organization: '',
        cardColor: 'teal',
        image: '/speakers/balakista.png',
      },
      {
        id: 'jagannadha',
        name: 'DR. NV JAGANNADHA RAO',
        title: 'Registrar',
        organization: 'GIET University',
        cardColor: 'pink',
        image: '/speakers/jagannadha.png',
      },
      {
        id: 'nithin',
        name: 'NITHIN KUMAR REDDY',
        title: 'CEO',
        organization: 'TASK',
        cardColor: 'teal',
        image: '/speakers/nithin.png',
      },
      {
        id: 'shreya',
        name: 'SHREYA JAISWAL',
        title: 'Advisor',
        organization: 'Indo Japan Connect',
        cardColor: 'yellow',
        image: '/speakers/shreya.png',
      },
    ],
  },
  {
    id: 'group-3',
    speakers: [
      {
        id: 'satya',
        name: 'DR. M SATYA PRASAD',
        title: 'DGM',
        organization: 'BSNL',
        cardColor: 'yellow',
        image: '/speakers/satya.png',
      },
      {
        id: 'vinod',
        name: 'DR. VINOD',
        title: 'Founder',
        organization: 'Infipotential',
        cardColor: 'teal',
        image: '/speakers/vinod.png',
      },
      {
        id: 'inderjeet',
        name: 'INDERJEET AIDHI',
        title: 'Global Head Managed Services',
        organization: 'Virtusa',
        cardColor: 'pink',
        image: '/speakers/inderjeet.png',
      },
      {
        id: 'sujit',
        name: 'SUJIT JAQIDAR',
        title: 'Director',
        organization: 'Founder Institute Inc.',
        cardColor: 'teal',
        image: '/speakers/sujit.png',
      },
      {
        id: 'ram',
        name: 'RAM JALADURGAM',
        title: 'CEO',
        organization: 'Minds & Dots Consulting',
        cardColor: 'yellow',
        image: '/speakers/ram.png',
      },
    ],
  },
];

// ---- Quality Thought Team (image 4) ----
export const foundationTeam: Speaker[] = [
  {
    id: 'ramana',
    name: 'RAMANA BHUPATHI',
    title: 'Chairman & Managing Director',
    organization: '',
    cardColor: 'yellow',
    image: '/speakers/ramana.png',
  },
  {
    id: 'krish',
    name: 'KRISH CHINTALURI',
    title: 'Chief Executive Officer',
    organization: '',
    cardColor: 'teal',
    image: '/chapter-heads/krish.png',
  },
  {
    id: 'pavani',
    name: 'DR. PAVANI KADIYALA',
    title: 'Chief Branding Officer',
    organization: '',
    cardColor: 'pink',
    image: '/chapter-heads/pavani.png',
  },
  {
    id: 'geetha',
    name: 'GEETHA MURTHY',
    title: 'Head Human Resource',
    organization: '',
    cardColor: 'teal',
    image: '/chapter-heads/geetha.png',
  },
  {
    id: 'sashank',
    name: 'SASHANK KARRI',
    title: 'Head Operations',
    organization: '',
    cardColor: 'yellow',
    image: '/chapter-heads/sashank.png',
  },
];

// ---- Chapter Heads (image 5 + new ones) ----
export const chapterHeadGroups: SpeakerGroup[] = [
  {
    id: 'ch-group-1',
    speakers: [
      {
        id: 'vijay',
        name: 'VIJAY KUMAR KS',
        title: 'President Delhi Chapter',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/vijay.png',
      },
      {
        id: 'mahendra',
        name: 'MAHENDRA THAKUR',
        title: 'President Mumbai Chapter',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/mahendra.png',
      },
      {
        id: 'shiva',
        name: 'SHIVA PRASAD',
        title: 'President PSU Partnerships',
        organization: '',
        cardColor: 'pink',
        image: '/chapter-heads/shiva.png',
      },
      {
        id: 'arunima',
        name: 'ARUNIMA BHATTACHARYA',
        title: 'President Women Empowerment Wing Maharashtra',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/arunima.png',
      },
      {
        id: 'rekha',
        name: 'PROF. REKHA RAO',
        title: 'President K12 Collaborations',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/rekha.png',
      },
    ],
  },
  {
    id: 'ch-group-2',
    speakers: [
      {
        id: 'arvind',
        name: 'ARVIND MATHUR',
        title: 'President Hyderabad Chapter',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/arvind.png',
      },
      {
        id: 'viswanadh',
        name: 'VISWANADH RAJU',
        title: 'President Bangalore Chapter',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/viswanadh.png',
      },
      {
        id: 'surendra',
        name: 'DR.N.V. SURENDRA BABU',
        title: 'President Vijayawada Chapter',
        organization: '',
        cardColor: 'pink',
        image: '/chapter-heads/surendra.png',
      },
      {
        id: 'venkata',
        name: 'VENKATA RAMANA K',
        title: 'President University Collaborations',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/venkata.png',
      },
      {
        id: 'kishan',
        name: 'KISHAN SISTLA',
        title: 'President Visakhapatnam Chapter',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/kishan.png',
      },
    ],
  },
  {
    id: 'ch-group-3',
    speakers: [
      {
        id: 'ramesh',
        name: 'PROF. B RAMESH',
        title: 'President B School Collaborations',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/ramesh.png',
      },
      {
        id: 'rohit',
        name: 'DR.ROHIT RAJ',
        title: 'President HR Collaborations',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/rohit.png',
      },
      {
        id: 'sonia',
        name: 'SONIA G',
        title: 'President Corporate Collaborations',
        organization: '',
        cardColor: 'pink',
        image: '/chapter-heads/sonia.png',
      },
      {
        id: 'surya',
        name: 'SURYA PRAKASA RAO',
        title: 'President Media Collaborations',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/surya.png',
      },
      {
        id: 'seshu',
        name: 'SESHU KANDREGULA',
        title: 'President Wellness Collaborations',
        organization: '',
        cardColor: 'gray',
        image: '/chapter-heads/seshu.png',
      },
    ],
  },
];
