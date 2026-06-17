import React from 'react';

interface StartupLogoProps {
  name: string;
  className?: string;
}

export function StartupLogo({ name, className = 'h-10' }: StartupLogoProps) {
  const normName = name.toLowerCase().replace(/\s+/g, '');

  if (normName === 'pixforce') {
    return (
      <svg
        viewBox="0 0 160 55"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Pix Force Logo"
      >
        {/* Pixel Square - Brand Green */}
        <rect x="5" y="5" width="16" height="16" fill="#0a585c" rx="2" />
        
        {/* Secondary Pixel Square - Brand Green */}
        <rect x="110" y="27" width="9" height="9" fill="#0a585c" rx="1.5" />

        {/* Text "PIX." */}
        <g fill="#0a585c">
          {/* P */}
          <path d="M22 10.5 H33 C39.5 10.5 44 14 44 19.5 C44 25 39.5 28.5 33 28.5 H28 V39.5 H22 V10.5 Z M28 16.5 V22.5 H32.5 C35.5 22.5 37.5 21.5 37.5 19.5 C37.5 17.5 35.5 16.5 32.5 16.5 H28 Z" />
          
          {/* I */}
          <rect x="49" y="10.5" width="6" height="29" />
          
          {/* X */}
          <path d="M60.5 10.5 H67.5 L75.5 23.5 L83.5 10.5 H90.5 L80 25.5 L91 39.5 H84 L75.5 27.5 L67 39.5 H60 L71 25.5 L60.5 10.5 Z" />

          {/* Dot */}
          <rect x="96" y="32.5" width="7" height="7" rx="1" />
        </g>

        {/* Text "FORCE" */}
        <g fill="#0a585c" style={{ letterSpacing: '0.15em' }}>
          {/* F */}
          <path d="M22 44.5 H33 V46.5 H24.5 V49.5 H31.5 V51.5 H24.5 V55.5 H22 V44.5 Z" />
          {/* O */}
          <path d="M42 44 C45 44 47.5 46.5 47.5 50 C47.5 53.5 45 56 42 56 C39 56 36.5 53.5 36.5 50 C36.5 46.5 39 44 42 44 Z M42 46 C40.5 46 39 47.5 39 50 C39 52.5 40.5 54 42 54 C43.5 54 45 52.5 45 50 C45 47.5 43.5 46 42 46 Z" />
          {/* R */}
          <path d="M53 44.5 H59 C61.5 44.5 63 45.5 63 47.5 C63 49.5 61.5 50.5 59 50.5 H55.5 V55.5 H53 V44.5 Z M55.5 46.5 V48.5 H58.5 C59.5 48.5 60.5 48 60.5 47.5 C60.5 47 59.5 46.5 58.5 46.5 H55.5 Z L63 55.5 H60.5 L56 50.5" stroke="#0a585c" strokeWidth="0.5" />
          {/* C */}
          <path d="M74.5 45 C77.5 45 79.5 47 79.5 50 C79.5 53 77.5 55 74.5 55 C71.5 55 69.5 53 69.5 50 C69.5 47 71.5 45 74.5 45 Z M74.5 47 C72.5 47 71.5 48.5 71.5 50 C71.5 51.5 72.5 53 74.5 53 C76.5 53 77.5 51.5 77.5 50 C77.5 48.5 76.5 47 74.5 47 Z" />
          {/* E */}
          <path d="M85 44.5 H95 V46.5 H87.5 V49 H93 V51 H87.5 V53.5 H95 V55.5 H85 V44.5 Z" />
        </g>
      </svg>
    );
  }

  if (normName === 'voltta') {
    return (
      <svg
        viewBox="0 0 160 50"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Voltta Logo"
      >
        <g fill="#0a585c">
          {/* Custom sliced V */}
          <path d="M10 5 L17.5 27 H18 L25.5 5 H31 L20.5 35 H15 L5 5 H10 Z" />
          <path d="M17.5 27 L15.5 21 L16.8 17.5 L20.5 28.5 H15.5 Z" fill="#0a585c" opacity="0.8" />
          
          {/* O */}
          <path d="M46 4 C53.5 4 59.5 10 59.5 19 C59.5 28 53.5 34 46 34 C38.5 34 32.5 28 32.5 19 C32.5 10 38.5 4 46 4 Z M46 9 C41.5 9 38 13 38 19 C38 25 41.5 29 46 29 C50.5 29 54 25 54 19 C54 13 50.5 9 46 9 Z" />
          
          {/* L */}
          <path d="M65 5 H71 V29 H83 V34 H65 V5 Z" />
          
          {/* T1 */}
          <path d="M87 5 H104 V10 H92.5 V34 H87 V5 Z" />
          
          {/* T2 */}
          <path d="M107 5 H124 V10 H112.5 V34 H107 V5 Z" />
          
          {/* Custom sliced A with electric cut */}
          <path d="M137 5 H142 L152 34 H146.5 L144.5 28 H134.5 L132.5 34 H127 L137 5 Z M139.5 13 L136 23 H143 L139.5 13 Z" />
          {/* Bolt cut in details */}
          <path d="M136.5 21.5 L141 18 L138 23.5 H143.5 L139 27" fill="#ffffff" />
        </g>
      </svg>
    );
  }

  if (normName === 'sunne') {
    return (
      <svg
        viewBox="0 0 160 50"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Sunne Logo"
      >
        <g>
          {/* S Emblem Segment - Brand Green */}
          <path
            d="M 12,6 C 18,6 23.5,9.5 26.5,14 L 32.5,9.5 C 28.5,3.5 21,0 12,0 C 5.5,0 0.5,3.5 0.5,9.5 C 0.5,15.5 5.5,17 10.5,18.5 L 14.5,19.5 C 19.5,21 21.5,22 21.5,25.5 C 21.5,29.5 17.5,31 12,31 C 6.5,31 1.5,28 0,25.5 L 0,31.5 C 2.5,34.5 7,37 12,37 C 19.5,37 27.5,33.5 27.5,25.5 C 27.5,18.5 22.5,17 17.5,15.5 L 13.5,14.5 C 8.5,13 6.5,12.5 6.5,9 C 6.5,5.5 10.5,6 12,6 Z"
            fill="#0a585c"
          />
        </g>

        {/* Text "SUNNE" - Brand Green */}
        <g fill="#0a585c">
          {/* S */}
          <path d="M49 10 C52 10 54 11.5 55 13.5 L59 11 C57 7.5 53.5 6 49 6 C42.5 6 38.5 10 38.5 15 C38.5 20.5 42.5 22 47 23.5 L50.5 24.5 C54 25.5 55.5 26.5 55.5 29 C55.5 31.5 53 33 49 33 C44.5 33 41 31 40 28.5 L36 31 C37.5 34.5 42.5 37 49 37 C56 37 60.5 33 60.5 28.5 C60.5 22.5 56.5 21 52 19.5 L48.5 18.5 C45 17.5 43.5 16.5 43.5 14 C43.5 11.5 46 10 49 10 Z" />
          {/* U */}
          <path d="M67 6.5 H72 V25 C72 29 74.5 31 78 31 C81.5 31 84 29 84 25 V6.5 H89 V25 C89 32.5 83.5 36 78 36 C72.5 36 67 32.5 67 25 V6.5 Z" />
          {/* N1 */}
          <path d="M96 6.5 H101 L110.5 25.5 V6.5 H115.5 V35.5 H111 L101.5 16.5 V35.5 H96 V6.5 Z" />
          {/* N2 */}
          <path d="M122 6.5 H127 L136.5 25.5 V6.5 H141.5 V35.5 H137 L127.5 16.5 V35.5 H122 V6.5 Z" />
          {/* E */}
          <path d="M149 6.5 H163 V11.5 H154 V18 H161.5 V23 H154 V29.5 H163.5 V35.5 H149 V6.5 Z" />
        </g>
      </svg>
    );
  }

  if (normName === 'beenx') {
    return (
      <svg
        viewBox="0 0 160 55"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Beenx Logo"
      >
        {/* Real wide-aspect-ratio Word Beenx on the left */}
        <g fill="#0a585c">
          {/* B */}
          <path d="M5 10 H17 C21 10 23 11.5 23 14.5 C23 16.5 21.5 18 19 18.5 C22 19 24 21 24 24 C24 27.5 21 29.5 17 29.5 H5 V10 Z M9.5 14.5 V18 H15.5 C17 18 18 17 18 16 C18 15 17 14.5 15.5 14.5 H9.5 Z M9.5 21.5 V26 H16.5 C18 26 19 25 19 23.5 C19 22 18 21.5 16.5 21.5 H9.5 Z" />
          {/* e1 */}
          <path d="M31 17 C33.5 17 35.5 18.5 36 21 H28 C28.2 22.5 29.5 24 31.5 24 C33 24 34.2 23 34.8 22 L37.5 23 C36.5 25.5 34.2 27 31.5 27 C27 27 24 23.5 24 19.5 C24 15.5 27 12 31.5 12 C35.5 12 38 15.5 38 19.5 H28 C28.2 18.5 29.5 17 31 17 Z M31 15 C29.5 15 28.5 16 28.1 17 H33.9 C33.5 16 32.5 15 31 15 Z" />
          {/* e2 */}
          <path d="M45 17 C47.5 17 49.5 18.5 50 21 H42 C42.2 22.5 43.5 24 45.5 24 C47 24 48.2 23 48.8 22 L51.5 23 C50.5 25.5 48.2 27 45.5 27 C41 27 38 23.5 38 19.5 C38 15.5 41 12 45.5 12 C49.5 12 52 15.5 52 19.5 H42 C42.2 18.5 43.5 17 45 17 Z M45 15 C43.5 15 42.5 16 42.1 17 H47.9 C47.5 16 46.5 15 45 15 Z" />
          {/* n */}
          <path d="M55 13 V27.5 H59 V19 C59 16.5 60.5 15 63 15 C65 15 66 16.5 66 19 V27.5 H70 V18 C70 14 67.5 12 64 12 C61 12 59.5 13.5 58.5 15 V13 H55 Z" />
          {/* x */}
          <path d="M74 13 H78.5 L84 20 L89.5 13 H94 L87.5 21 L94.5 29 H90 L84 22 L78 29 H73.5 L80.5 21 L74 13 Z" />
        </g>
        
        {/* Curving decorative 'X' icon on the right side - Standardized to Eneva brand Green/Teal */}
        <g strokeLinecap="round">
          {/* Upper of the slice X */}
          <path d="M110 12 L124 22" stroke="#0a585c" strokeWidth="4.5" />
          {/* Lower of the slice X */}
          <path d="M136 12 L122 22" stroke="#0a585c" strokeWidth="4.5" />
          {/* Long dynamic sweep line */}
          <path d="M132 10 C124 14 115 19 110 25" stroke="#0a585c" strokeWidth="4" fill="none" />
          
          {/* Spark dots */}
          <circle cx="109.5" cy="25.5" r="3" fill="#0a585c" />
          <circle cx="132" cy="10" r="3" fill="#0a585c" />
        </g>

        {/* High-quality styled taglines under Word Beenx */}
        <text
          x="5"
          y="41"
          fill="#0a585c"
          fontSize="4.8"
          fontFamily="sans-serif"
          fontWeight="850"
          letterSpacing="0.05em"
        >
          energia do presente
        </text>
        <text
          x="5"
          y="47"
          fill="#0a585c"
          fontSize="4.8"
          fontFamily="sans-serif"
          fontWeight="850"
          letterSpacing="0.05em"
        >
          potência no futuro_
        </text>
      </svg>
    );
  }

  // Fallback if none matches
  return (
    <div className={`flex items-center justify-center font-bold tracking-tight text-eneva-teal-deep text-lg ${className}`}>
      {name}
    </div>
  );
}
