// ============================================================
// Types & Interfaces for Future Skills Summit Website
// ============================================================

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  cardColor: 'yellow' | 'teal' | 'pink' | 'gray';
  image?: string;
}

export interface SpeakerGroup {
  id: string;
  title?: string;
  speakers: Speaker[];
}

export interface Partner {
  id: string;
  name: string;
  category: 'ecosystem' | 'skilling' | 'media';
  logo?: string;
}

export interface ChapterHead {
  id: string;
  name: string;
  title: string;
  organization: string;
  cardColor: 'yellow' | 'teal' | 'pink' | 'gray';
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  cardColor: 'yellow' | 'teal' | 'pink' | 'gray';
  image?: string;
}

export interface EventDetails {
  date: string;
  day: string;
  venue: string;
  city: string;
  phone1: string;
  phone2: string;
}
