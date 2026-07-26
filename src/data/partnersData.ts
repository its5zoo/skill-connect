// ============================================================
// Partners & Sponsors Data
// ============================================================

import type { Partner } from '../types';

export const partners: Partner[] = [
  // Ecosystem Partners
  { id: 'iacc',      name: 'Indo-American Chamber of Commerce', category: 'ecosystem', logo: '/other/partners/iacc_logo.webp' },
  { id: 'deet',      name: 'DEET – Digital Employment Exchange of Telangana', category: 'ecosystem', logo: '/other/partners/deet_logo.webp' },
  { id: 'task',      name: 'TASK', category: 'ecosystem', logo: '/other/partners/task_logo.webp' },
  { id: 'skillioma', name: 'Skillioma', category: 'ecosystem', logo: '/other/partners/skillioma_logo.webp' },
  { id: 'giet',      name: 'GIET University', category: 'ecosystem', logo: '/other/partners/giet_logo.webp' },
  { id: 'aptto',     name: 'AP TTO Consortium', category: 'ecosystem', logo: '/other/partners/aptto_logo.webp' },
  { id: 'globalhr',  name: 'Global HR Federation', category: 'ecosystem', logo: '/other/partners/globalhr_logo.webp' },
  { id: 'ihra',      name: 'Indian Human Resource Association', category: 'ecosystem', logo: '/other/partners/ihra_logo.webp' },

  { id: 'bsnl',      name: 'BSNL', category: 'ecosystem', logo: '/other/partners/bsnl_logo.webp' },
  { id: 'indojapan', name: 'Indo Japan Connect', category: 'ecosystem', logo: '/other/partners/indojapan_logo.webp' },
  { id: 'ncogn',     name: 'NCOIGN', category: 'ecosystem', logo: '/other/partners/ncoign_logo.webp' },
  { id: 'elevate',   name: 'Elevate Career.AI', category: 'ecosystem', logo: '/other/partners/elevate_logo.webp' },
  { id: 'techforce',  name: 'TechForce Consulting Services', category: 'ecosystem', logo: '/other/partners/techforce_logo.webp' },

  // Media Partners
  { id: 'bigtv',      name: 'BIG TV', category: 'media', logo: '/other/partners/bigtv_logo.webp' },
  { id: 'indianext',  name: 'India News Next', category: 'media', logo: '/other/partners/indianext_logo.webp' },
  { id: 'cloudmedia', name: 'Cloud Media News', category: 'media', logo: '/other/partners/cloudmedia_logo.webp' },
];

export const partnerCategories = [
  { key: 'ecosystem', label: 'Ecosystem and Skill Partners' },
  { key: 'media',     label: 'Media Partners'     },
 ] as const;
