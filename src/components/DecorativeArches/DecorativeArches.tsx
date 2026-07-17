import React from 'react';
import styles from './DecorativeArches.module.css';

// Colors based on the flyer design
const COLORS = {
  pink: '#E83472',
  teal: '#00B4C8',
  black: '#111111',
};

// Exact pattern from the user's uploaded image
const archPattern: Array<{ left: keyof typeof COLORS; right: keyof typeof COLORS }> = [
  { left: 'pink', right: 'teal' },
  { left: 'black', right: 'pink' },
  { left: 'black', right: 'pink' },
  { left: 'black', right: 'teal' },
  { left: 'pink', right: 'teal' },
];

const DecorativeArches: React.FC = () => {
  return (
    <div className={styles.archRow} aria-hidden="true">
      {archPattern.map((arch, i) => (
        <div
          key={i}
          className={styles.arch}
          style={{
            '--left': COLORS[arch.left],
            '--right': COLORS[arch.right],
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default DecorativeArches;
