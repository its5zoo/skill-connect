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
        image: '/speakers/dunston.webp',
      },
      {
        id: 'jaan',
        name: 'DR. JAAN NISSAR LONE',
        title: 'Global President',
        organization: 'BRICS Culture Media Forum & Head of The Times of Russia–India',
        cardColor: 'teal',
        image: '/speakers/jaan.webp',
      },
      {
        id: 'sergei',
        name: 'DR. SERGEI DVORIANOV',
        title: 'Vice President & Director Communications',
        organization: 'BRICS Culture Media Forum',
        cardColor: 'pink',
        image: '/speakers/sergei.webp',
      },
      {
        id: 'vladimir',
        name: 'VLADIMIR KEDRINSKY',
        title: 'Russian Businessman Founder – "Ifree" Company',
        organization: '',
        cardColor: 'teal',
        image: '/speakers/vladimir.webp',
      },
      {
        id: 'kevin',
        name: 'KEVIN FENG',
        title: 'Head South',
        organization: 'OPPO Mobiles',
        cardColor: 'yellow',
        image: '/speakers/kevin.webp',
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
        image: '/speakers/rishikesh.webp',
      },
      {
        id: 'balakista',
        name: 'PROF. V. BALAKISTA REDDY',
        title: 'Chairman TSCHE',
        organization: '',
        cardColor: 'teal',
        image: '/speakers/balakista.webp',
      },
      {
        id: 'jagannadha',
        name: 'DR. NV JAGANNADHA RAO',
        title: 'Registrar',
        organization: 'GIET University',
        cardColor: 'pink',
        image: '/speakers/jagannadha.webp',
      },
      {
        id: 'nithin',
        name: 'NITHIN KUMAR REDDY',
        title: 'CEO',
        organization: 'TASK',
        cardColor: 'teal',
        image: '/speakers/nithin.webp',
      },
      {
        id: 'shreya',
        name: 'SHREYA JAISWAL',
        title: 'Advisor',
        organization: 'Indo Japan Connect',
        cardColor: 'yellow',
        image: '/speakers/shreya.webp',
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
        image: '/speakers/satya.webp',
      },
      {
        id: 'vinod',
        name: 'DR. VINOD',
        title: 'Founder',
        organization: 'Infipotential',
        cardColor: 'teal',
        image: '/speakers/vinod.webp',
      },
      {
        id: 'inderjeet',
        name: 'INDERJEET AIDHI',
        title: 'Global Head Managed Services',
        organization: 'Virtusa',
        cardColor: 'pink',
        image: '/speakers/inderjeet.webp',
      },
      {
        id: 'sujit',
        name: 'SUJIT JAQIDAR',
        title: 'Director',
        organization: 'Founder Institute Inc.',
        cardColor: 'teal',
        image: '/speakers/sujit.webp',
      },
      {
        id: 'ram',
        name: 'RAM JALADURGAM',
        title: 'CEO',
        organization: 'Minds & Dots Consulting',
        cardColor: 'yellow',
        image: '/speakers/ram.webp',
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
    image: '/speakers/ramana.webp',
  },
  {
    id: 'krish',
    name: 'KRISH CHINTALURI',
    title: 'Chief Executive Officer',
    organization: '',
    cardColor: 'teal',
    image: '/chapter-heads/krish.webp',
  },
  {
    id: 'pavani',
    name: 'DR. PAVANI KADIYALA',
    title: 'Chief Branding Officer',
    organization: '',
    cardColor: 'pink',
    image: '/chapter-heads/pavani.webp',
  },
  {
    id: 'geetha',
    name: 'GEETHA MURTHY',
    title: 'Head Human Resource',
    organization: '',
    cardColor: 'teal',
    image: '/chapter-heads/geetha.webp',
  },
  {
    id: 'sashank',
    name: 'SASHANK KARRI',
    title: 'Head Operations',
    organization: '',
    cardColor: 'yellow',
    image: '/chapter-heads/sashank.webp',
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
        image: '/chapter-heads/vijay.webp',
      },
      {
        id: 'mahendra',
        name: 'MAHENDRA THAKUR',
        title: 'President Mumbai Chapter',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/mahendra.webp',
      },
      {
        id: 'shiva',
        name: 'SHIVA PRASAD',
        title: 'President PSU Partnerships',
        organization: '',
        cardColor: 'pink',
        image: '/chapter-heads/shiva.webp',
      },
      {
        id: 'arunima',
        name: 'ARUNIMA BHATTACHARYA',
        title: 'President Women Empowerment Wing Maharashtra',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/arunima.webp',
      },
      {
        id: 'rekha',
        name: 'PROF. REKHA RAO',
        title: 'President K12 Collaborations',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/rekha.webp',
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
        image: '/chapter-heads/arvind.webp',
      },
      {
        id: 'viswanadh',
        name: 'VISWANADH RAJU',
        title: 'President Bangalore Chapter',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/viswanadh.webp',
      },
      {
        id: 'surendra',
        name: 'DR.N.V. SURENDRA BABU',
        title: 'President Vijayawada Chapter',
        organization: '',
        cardColor: 'pink',
        image: '/chapter-heads/surendra.webp',
      },
      {
        id: 'venkata',
        name: 'VENKATA RAMANA K',
        title: 'President University Collaborations',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/venkata.webp',
      },
      {
        id: 'kishan',
        name: 'KISHAN SISTLA',
        title: 'President Visakhapatnam Chapter',
        organization: '',
        cardColor: 'yellow',
        image: '/chapter-heads/kishan.webp',
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
        image: '/chapter-heads/ramesh.webp',
      },
      {
        id: 'rohit',
        name: 'DR.ROHIT RAJ',
        title: 'President HR Collaborations',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/rohit.webp',
      },
      {
        id: 'sonia',
        name: 'SONIA G',
        title: 'President Corporate Collaborations',
        organization: '',
        cardColor: 'pink',
        image: '/chapter-heads/sonia.webp',
      },
      {
        id: 'surya',
        name: 'SURYA PRAKASA RAO',
        title: 'President Media Collaborations',
        organization: '',
        cardColor: 'teal',
        image: '/chapter-heads/surya.webp',
      },
      {
        id: 'seshu',
        name: 'SESHU KANDREGULA',
        title: 'President Wellness Collaborations',
        organization: '',
        cardColor: 'gray',
        image: '/chapter-heads/seshu.webp',
      },
    ],
  },
];

