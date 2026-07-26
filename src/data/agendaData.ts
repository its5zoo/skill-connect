// ============================================================
// Agenda Data — Updated with latest event timetable and details
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
    time: '09:15 AM',
    title: 'Registration & Hi-Tea',
    type: 'social',
  },
  {
    id: 'a2',
    time: '10:00 AM',
    title: 'Inauguration & Lighting of the Lamp',
    type: 'ceremony',
  },
  {
    id: 'a3',
    time: '10:15 AM',
    title: 'Welcome Speech',
    details: [
      'Brief Introduction by Ramana Bupathi',
      'CMD – Quality Thought Group'
    ],
    type: 'keynote',
  },
  {
    id: 'a4',
    time: '10:25 AM',
    title: 'Fireside Chat with Chief Guests',
    type: 'panel',
  },
  {
    id: 'a5',
    time: '10:45 AM',
    title: 'Intro Speech',
    details: ['Felicitation of Guests and Speakers'],
    type: 'keynote',
  },
  {
    id: 'a6',
    time: '11:00 AM',
    title: 'Book Launch',
    subtitle: 'Mastering Generative Engine Optimization for the AI Search Era',
    details: ['By Dr. Pavanani Kadiyala'],
    type: 'ceremony',
  },
  {
    id: 'a7',
    time: '11:05 AM',
    title: 'Keynote Address by Satya Narayanan R',
    subtitle: 'India @2047 – Building the World\'s Skill Capital',
    type: 'keynote',
  },
  {
    id: 'a8',
    time: '11:20 AM',
    title: 'Address by VC Sajjanar, IPS',
    details: ['Commissioner of Hyderabad City Police'],
    type: 'keynote',
  },
  {
    id: 'a9',
    time: '11:35 AM',
    title: 'Address by V. V. Lakshminarayana, IPS (Retd)',
    type: 'keynote',
  },
  {
    id: 'a10',
    time: '11:50 AM',
    title: 'Address by Krish Chintaluri',
    details: ['CEO, Quality Thought Future Skills Foundation'],
    type: 'keynote',
  },
  {
    id: 'a11',
    time: '12:05 PM',
    title: 'Panel Discussion: Future Skills – International Perspective',
    details: [
      'Panelists: Amb. Dunston Pereira · R. Jagan Nissar Lone · Dr. Sergei Dvorianov · Dr. Sreedevi Devi Reddy · Sujit Jagidar'
    ],
    type: 'panel',
  },
  {
    id: 'a12',
    time: '12:50 PM',
    title: 'Signing of MOUs',
    type: 'ceremony',
  },
  {
    id: 'a13',
    time: '01:00 PM',
    title: 'Networking Lunch & Music',
    type: 'social',
  },
  {
    id: 'a14',
    time: '01:30 PM',
    title: 'Panel Discussion: Future Skills – Is India Ready?',
    details: [
      'Panelists: Rishikesh Patnakar · J. A. Choudhary · Nithin Kumar Reddy · Prof. V. Balakista Reddy · Dr. Satya Prasad · Sujatha Kshirsagar'
    ],
    type: 'panel',
  },
  {
    id: 'a15',
    time: '02:15 PM',
    title: 'Oath Ceremony – Chapter Heads',
    type: 'ceremony',
  },
  {
    id: 'a16',
    time: '02:35 PM',
    title: 'Launch of Indo Japan Connect',
    details: ['By Shreya Jaiswal'],
    type: 'ceremony',
  },
  {
    id: 'a17',
    time: '02:45 PM',
    title: 'Presentation by Vladimir Kedrinsky',
    subtitle: 'Future Skills in the International Movie Industry',
    type: 'presentation',
  },
  {
    id: 'a18',
    time: '03:00 PM',
    title: 'Presentations by Event Partners',
    type: 'presentation',
  },
  {
    id: 'a19',
    time: '03:30 PM',
    title: 'Panel Discussion: Disruptions in the AI Era – Skill Metamorphosis',
    details: [
      'Panelists: Inderjeet Aidhi · Dr. Vinod · Ram Jaladurgam · Shreya Jaiswal'
    ],
    type: 'panel',
  },
  {
    id: 'a20',
    time: '04:15 PM',
    title: 'Cultural Performances',
    type: 'social',
  },
  {
    id: 'a21',
    time: '04:25 PM',
    title: 'Awards – BRICS Culture Media Forum',
    type: 'awards',
  },
  {
    id: 'a22',
    time: '04:45 PM',
    title: 'Awards – Quality Thought Future Skills Foundation',
    type: 'awards',
  },
  {
    id: 'a23',
    time: '05:25 PM',
    title: 'Vote of Thanks',
    type: 'closing',
  },
];
