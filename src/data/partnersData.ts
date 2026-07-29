// ============================================================
// Partners & Sponsors Data
// ============================================================

import type { Partner } from '../types';

export const partners: Partner[] = [
  // 1. International & Industry Organizations
  { id: 'iacc',      name: 'Indo-American Chamber of Commerce', category: 'international', logo: '/partners/iacc_logo.webp' },
  { id: 'indojapan', name: 'Indo Japan Connect', category: 'international', logo: '/partners/indojapan_logo.webp' },
  { id: 'globalhr',  name: 'Global HR Federation', category: 'international', logo: '/partners/globalhr_logo.webp' },
  { id: 'ihra',      name: 'Indian Human Resource Association', category: 'international', logo: '/partners/ihra_logo.webp' },
  { id: 'aptto',     name: 'AP TTO Consortium', category: 'international', logo: '/partners/aptto_logo.webp' },

  // 2. Skill Ecosystem Partners
  { id: 'deet',      name: 'DEET – Digital Employment Exchange of Telangana', category: 'skill', logo: '/partners/deet_logo.webp' },
  { id: 'braincode',  name: 'Braincode Boost-A-Brain', category: 'skill', logo: '/partners/braincode_logo.webp' },
  { id: 'task',      name: 'TASK', category: 'skill', logo: '/partners/task_logo.webp' },
  { id: 'bsnl',      name: 'BSNL', category: 'skill', logo: '/partners/bsnl_logo.webp' },
  { id: 'musicchamps', name: 'Music Champs', category: 'skill', logo: '/partners/musicchamps_logo.webp' },
  { id: 'klabs',       name: 'K Labs', category: 'skill', logo: '/partners/klabs_logo.webp' },

  // 3. Academic Partner
  { id: 'giet',      name: 'GIET University', category: 'academic', logo: '/partners/giet_logo.webp' },
  { id: 'skillioma', name: 'Skillioma', category: 'academic', logo: '/partners/skillioma_logo.webp' },
  { id: 'ttpoa',       name: 'Telangana Training and Placement Officers Association', category: 'academic', logo: '/partners/ttpoa_logo.webp' },
  { id: 'vairis',      name: 'Vairis Everyday Diamond Wear', category: 'academic', logo: '/partners/vairis_logo.webp' },

  // 4. Corporate & Technology Partner
  { id: 'techforce',  name: 'TechForce Consulting Services', category: 'corporate', logo: '/partners/techforce_logo.webp' },
  { id: 'ncogn',     name: 'NCOIGN', category: 'corporate', logo: '/partners/ncoign_logo.webp' },
  { id: 'elevate',   name: 'Elevate Career.AI', category: 'corporate', logo: '/partners/elevate_logo.webp' },
  { id: 'reward',      name: 'Recognizing and Empowering Widows Association for Rural Development', category: 'corporate', logo: '/partners/reward_logo.webp' },

  // 5. Medical Partner
  { id: 'medicover',   name: 'Medicover Hospitals', category: 'medical', logo: '/partners/medicover_logo.webp' },

  // 6. Media Partners
  { id: 'bigtv',      name: 'BIG TV', category: 'media', logo: '/partners/bigtv_logo.webp' },
  { id: 'indianext',  name: 'India News Next', category: 'media', logo: '/partners/indianext_logo.webp' },
  { id: 'cloudmedia', name: 'Cloud Media News', category: 'media', logo: '/partners/cloudmedia_logo.webp' },
];

export const partnerCategories = [
  { key: 'international', label: 'International & Industry Organizations' },
  { key: 'skill',         label: 'Skill Ecosystem Partners' },
  { key: 'academic',      label: 'Academic Partner' },
  { key: 'corporate',     label: 'Corporate & Technology Partner' },
  { key: 'medical',       label: 'Medical Partner' },
  { key: 'media',         label: 'Media Partners' },
] as const;
