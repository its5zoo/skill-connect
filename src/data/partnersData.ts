// ============================================================
// Partners & Sponsors Data
// ============================================================

import type { Partner } from '../types';

export const partners: Partner[] = [
  // Ecosystem Partners
  { id: 'iacc',      name: 'Indo-American Chamber of Commerce', category: 'ecosystem', logo: '/partners/iacc_logo.png' },
  { id: 'deet',      name: 'DEET – Digital Employment Exchange of Telangana', category: 'ecosystem', logo: '/partners/deet_logo.png' },
  { id: 'task',      name: 'TASK', category: 'ecosystem', logo: '/partners/task_logo.png' },
  { id: 'skillioma', name: 'Skillioma', category: 'ecosystem', logo: '/partners/skillioma_logo.png' },
  { id: 'giet',      name: 'GIET University', category: 'ecosystem', logo: '/partners/giet_logo.png' },
  { id: 'aptto',     name: 'AP TTO Consortium', category: 'ecosystem', logo: '/partners/aptto_logo.png' },
  { id: 'globalhr',  name: 'Global HR Federation', category: 'ecosystem', logo: '/partners/globalhr_logo.png' },
  { id: 'ihra',      name: 'Indian Human Resource Association', category: 'ecosystem', logo: '/partners/ihra_logo.png' },

  { id: 'bsnl',      name: 'BSNL', category: 'ecosystem', logo: '/partners/bsnl_logo.png' },
  { id: 'indojapan', name: 'Indo Japan Connect', category: 'ecosystem', logo: '/partners/indojapan_logo.png' },
  { id: 'ncogn',     name: 'NCOIGN', category: 'ecosystem', logo: '/partners/ncoign_logo.png' },
  { id: 'elevate',   name: 'Elevate Career.AI', category: 'ecosystem', logo: '/partners/elevate_logo.png' },
  { id: 'techforce',  name: 'TechForce Consulting Services', category: 'ecosystem', logo: '/partners/techforce_logo.png' },

  // Media Partners
  { id: 'bigtv',      name: 'BIG TV', category: 'media', logo: '/partners/bigtv_logo.png' },
  { id: 'indianext',  name: 'India News Next', category: 'media', logo: '/partners/indianext_logo.png' },
  { id: 'cloudmedia', name: 'Cloud Media News', category: 'media', logo: '/partners/cloudmedia_logo.png' },
];

export const partnerCategories = [
  { key: 'ecosystem', label: 'Ecosystem and Skill Partners' },
  { key: 'media',     label: 'Media Partners'     },
] as const;
