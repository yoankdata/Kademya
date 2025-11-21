import React from 'react';

export const Pattern = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="7" height="7" fill="hsl(var(--primary))" />
      </pattern>
      <pattern id="pattern-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 0 5 L 5 0 M 0 15 L 15 0 M 10 20 L 20 10" stroke="hsl(var(--primary))" strokeWidth="1" />
      </pattern>
      <pattern id="pattern-combined" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="40" height="40" fill="transparent" />
        <rect x="0" y="0" width="15" height="15" fill="hsl(var(--primary))" />
        <path d="M 20 25 L 25 20 M 20 35 L 35 20 M 30 40 L 40 30" stroke="hsl(var(--primary))" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pattern-combined)" />
  </svg>
);
