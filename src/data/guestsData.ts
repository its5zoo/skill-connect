// ============================================================
// Guests Data — Grouped by profession (max 5 per group)
// ============================================================

export interface GuestItem {
  id: string;
  name: string;
  title: string;
  organization?: string;
  image?: string;
  cardColor?: 'pink' | 'yellow' | 'teal' | 'gold';
}

export interface GuestGroup {
  id: string;
  heading: string;
  subtitle: string;
  guests: GuestItem[];
}

export const guestGroups: GuestGroup[] = [
  {
    id: 'guest-group-1',
    heading: 'Government & Public Sector Leaders',
    subtitle: 'Eminent ministers, commissioners & senior officials shaping policy and public welfare',
    guests: [
      {
        id: 'guest-1',
        name: 'VIVEK VENKATASWAMY',
        title: 'Minister for Labour, Employment, Training and Factories of Telangana',
        image: '/guests/vevek.png',
        cardColor: 'pink',
      },
      {
        id: 'guest-3',
        name: 'VC. SAJJANAR, IPS',
        title: 'Commissioner of the Hyderabad City Police',
        image: '/guests/sajjanar.png',
        cardColor: 'teal',
      },
      {
        id: 'guest-2',
        name: 'V. V. LAKSHMI NARAYANA, IPS (RETD.)',
        title: 'Vice President',
        organization: 'Operations, EV Trans Private Limited',
        image: '/guests/Narayana.png',
        cardColor: 'yellow',
      },
      {
        id: 'guest-4',
        name: 'J. A. CHOUDHARY',
        title: 'Chairman ISF',
        organization: 'Spl. Chief Secretary GOAP',
        image: '/guests/choudhary.png',
        cardColor: 'pink',
      },
      {
        id: 'guest-10',
        name: 'RISHIKESH PATANKAR',
        title: 'Vice President',
        organization: 'NSDC',
        image: '/guests/rishikesh.webp',
        cardColor: 'teal',
      },
    ],
  },
  {
    id: 'guest-group-2',
    heading: 'International & Diplomatic Leaders',
    subtitle: 'Global ambassadors, Russian cultural icons & cross-border relations champions',
    guests: [
      {
        id: 'guest-6',
        name: 'AMB. DUNSTON PEREIRA',
        title: 'Group CEO to the office of Shaikh Ahmed Bin Faisal al Qassimi',
        image: '/guests/dunston.webp',
        cardColor: 'yellow',
      },
      {
        id: 'guest-9',
        name: 'DR. SERGEI DVORIANOV',
        title: 'Vice President & Director Communications',
        organization: 'BRICS Culture Media Forum',
        image: '/guests/sergei.webp',
        cardColor: 'pink',
      },
      {
        id: 'guest-8',
        name: 'VLADIMIR KEDRINSKY',
        title: 'Russian Businessman',
        organization: 'Founder – "Ifree" Company',
        image: '/guests/vladimir.webp',
        cardColor: 'teal',
      },
      {
        id: 'guest-11',
        name: 'TAMIKO SAM',
        title: 'Indo Japan Chamber of Commerce',
        image: '/guests/tamiko.png',
        cardColor: 'yellow',
      },
      {
        id: 'guest-15',
        name: 'SVETLANA VALERYEVNA PCHELNIKOVA',
        title: 'Russian artist, doll designer, collector, and philanthropist',
        image: '/guests/svetlana.png',
        cardColor: 'pink',
      },
    ],
  },
  {
    id: 'guest-group-3',
    heading: 'Education, Media & Institution Leaders',
    subtitle: 'Champions of higher education, women entrepreneurship, skill development & media',
    guests: [
      {
        id: 'guest-12',
        name: 'PROF. V. BALAKISTA REDDY',
        title: 'Chairman',
        organization: 'TSCHE',
        image: '/guests/balakista.webp',
        cardColor: 'teal',
      },
      {
        id: 'guest-7',
        name: 'NITHIN KUMAR REDDY',
        title: 'CEO',
        organization: 'TASK',
        image: '/guests/nithin.webp',
        cardColor: 'yellow',
      },
      {
        id: 'guest-5',
        name: 'VIJAY REDDY VENNAM',
        title: 'Founder & Chairman',
        organization: 'BIG TV',
        image: '/guests/vijay.webp',
        cardColor: 'pink',
      },
      {
        id: 'guest-13',
        name: 'KAVITHA RAJESH',
        title: 'Secretary',
        organization: 'ALEAP Foundation',
        image: '/guests/kavitha.png',
        cardColor: 'teal',
      },
      {
        id: 'guest-14',
        name: 'JAGAN MOHAN REDDY',
        title: 'Secretary',
        organization: 'Sphoorthy Engineering College',
        image: '/guests/mohan.png',
        cardColor: 'yellow',
      },
    ],
  },
  {
    id: 'guest-group-4',
    heading: 'Entrepreneurs & Business Innovators',
    subtitle: 'Founders and managing directors powering technology, connect & enterprise ventures',
    guests: [
      {
        id: 'guest-16',
        name: 'BHAGYA LAKSHMI YALLA',
        title: 'Founder & Managing Director',
        organization: 'Yallas Technology Solutions Pvt Ltd',
        image: '/guests/yalla.png',
        cardColor: 'pink',
      },
      {
        id: 'guest-17',
        name: 'MADHU YALLA',
        title: 'Founder / Managing Director',
        organization: 'Indo Japan Connect',
        image: '/guests/madhu.png',
        cardColor: 'teal',
      },
      {
        id: 'guest-18',
        name: 'VENU',
        title: 'Founder / Managing Director',
        organization: 'K LABS',
        image: '/guests/venu.png',
        cardColor: 'yellow',
      },
    ],
  },
];

// Flat list for backwards compat (home page preview row)
export const guestsData: GuestItem[] = guestGroups.flatMap(g => g.guests);
