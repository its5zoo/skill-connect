// ============================================================
// Partners & Sponsors Data
// ============================================================

import type { Partner } from '../types';

export const partners: Partner[] = [
  // Ecosystem Partners
  { id: 'iacc', name: 'Indo-American Chamber of Commerce', category: 'ecosystem' },
  { id: 'deet', name: 'DEET – Digital Employment Exchange of Telangana', category: 'ecosystem' },
  { id: 'task', name: 'TASK', category: 'ecosystem' },
  { id: 'skillioma', name: 'Skillioma', category: 'ecosystem' },

  // Skilling Partners
  { id: 'bsnl', name: 'BSNL', category: 'skilling' },
  { id: 'indojapan', name: 'Indo Japan Connect', category: 'skilling' },
  { id: 'ncogn', name: 'NCOIGN', category: 'skilling' },
  { id: 'elevate', name: 'Elevate Career.AI', category: 'skilling' },

  // Media Partners
  { id: 'techforce', name: 'TechForce Consulting Services', category: 'media' },
  { id: 'bigtv', name: 'BIG TV', category: 'media' },
  { id: 'indianext', name: 'India News Next', category: 'media' },
  { id: 'cloudmedia', name: 'Cloud Media News', category: 'media' },
];
