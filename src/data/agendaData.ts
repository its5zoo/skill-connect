// ============================================================
// Agenda Data — with session type for color-coding
// ============================================================

export type AgendaType = 'ceremony' | 'keynote' | 'panel' | 'presentation' | 'social' | 'awards' | 'closing';

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  details?: string[];
  type: AgendaType;
}

export const agendaData: AgendaItem[] = [
  {
    id: 'a1',
    time: '10:00 AM',
    title: 'Inauguration & Lighting the Lamp',
    type: 'ceremony',
  },
  {
    id: 'a2',
    time: '10:20 AM',
    title: 'Welcome Speech',
    details: [
      'Brief Introduction by Ramana Bupathi, CMD – Quality Thought Group',
      'Launch of Quality Thought Future Skills Foundation'
    ],
    type: 'keynote',
  },
  {
    id: 'a3',
    time: '10:35 AM',
    title: 'Intro Speech',
    details: [
      'Krish Chintaluri, CEO',
      'Quality Thought Future Skills Foundation'
    ],
    type: 'keynote',
  },
  {
    id: 'a4',
    time: '10:50 AM',
    title: 'Keynote Speech',
    details: ['Chief Guest'],
    type: 'keynote',
  },
  {
    id: 'a5',
    time: '11:20 AM',
    title: 'Panel Discussion: Future Skills – International Perspective',
    details: [
      'Amb. Dunstoln Pereira · R. Jaan Nissar Lone · Dr. Sergei Dvorianoav',
      'Kevin Feng · Sujit Jagidar'
    ],
    type: 'panel',
  },
  {
    id: 'a6',
    time: '12:00 PM',
    title: 'Presentation – Vladimir Kedrinsky',
    subtitle: 'Future Skills in International Movie Industry',
    type: 'presentation',
  },
  {
    id: 'a7',
    time: '12:15 PM',
    title: 'Signing of MoUs',
    type: 'ceremony',
  },
  {
    id: 'a8',
    time: '12:30 PM',
    title: 'Book Launch',
    subtitle: 'Mastering Generative Engine Optimization for the AI Search Era by Dr. Pavanai Kadiyala',
    type: 'ceremony',
  },
  {
    id: 'a9',
    time: '12:35 PM',
    title: 'Oath Ceremony – Chapter Heads',
    type: 'ceremony',
  },
  {
    id: 'a10',
    time: '01:00 PM',
    title: 'Networking Lunch',
    type: 'social',
  },
  {
    id: 'a11',
    time: '01:30 PM',
    title: 'Panel Discussion: Future Skills – Is India Ready?',
    details: [
      'Rishikesh Patnakar · J.A. Choudhary · Nithin Kumar Reddy',
      'Prof. V. Balakista Reddy · Dr. Satya Prasad'
    ],
    type: 'panel',
  },
  {
    id: 'a12',
    time: '02:15 PM',
    title: 'Presentation – By Event Partners',
    type: 'presentation',
  },
  {
    id: 'a13',
    time: '03:00 PM',
    title: 'Launch of Indo Japan Connect',
    details: ['By Shreya Jaiswal'],
    type: 'ceremony',
  },
  {
    id: 'a14',
    time: '03:10 PM',
    title: 'Panel Discussion: Disruptions in AI Era – Skill Metamorphosis',
    details: [
      'Inderjeet Aidhi · Dr. Vinod · Dr. NV Jagannadha Rao',
      'Ram Jaladurgam · Shreya Jaiswal'
    ],
    type: 'panel',
  },
  {
    id: 'a15',
    time: '04:00 PM',
    title: 'Awards – BRICS Culture Media Forum',
    type: 'awards',
  },
  {
    id: 'a16',
    time: '04:20 PM',
    title: 'Cultural Performances',
    type: 'social',
  },
  {
    id: 'a17',
    time: '04:30 PM',
    title: 'Awards – Quality Thought Future Skills Foundation',
    type: 'awards',
  },
  {
    id: 'a18',
    time: '05:00 PM',
    title: 'Vote of Thanks',
    type: 'closing',
  },
];
