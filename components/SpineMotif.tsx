export function SpineMotif() {
  return (
    <svg viewBox="0 0 640 520" role="img" aria-label="Subtle endoscopic spine surgery line motif" className="h-full w-full">
      <defs>
        <linearGradient id="motifLine" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#D9DEE8" />
          <stop offset="100%" stopColor="#9A7B38" />
        </linearGradient>
      </defs>
      <rect width="640" height="520" fill="#F6F8FB" />
      <path d="M472 48C425 92 399 138 401 187c3 70 61 111 48 177-8 39-35 75-82 108" fill="none" stroke="#D9DEE8" strokeWidth="2" />
      <path d="M120 410c88-38 152-93 193-164 29-51 53-95 101-129" fill="none" stroke="url(#motifLine)" strokeWidth="3" strokeLinecap="round" />
      {[106, 146, 190, 235, 280, 326, 372].map((y, index) => (
        <g key={y} opacity={0.85}>
          <ellipse cx={390 + Math.sin(index) * 18} cy={y} rx="30" ry="13" fill="#fff" stroke="#D9DEE8" strokeWidth="2" />
          <path d={`M${356 + Math.sin(index) * 18} ${y}h-58`} stroke="#D9DEE8" strokeWidth="2" strokeLinecap="round" />
          <circle cx={284 + Math.sin(index) * 18} cy={y} r="4" fill="#9A7B38" />
        </g>
      ))}
      <circle cx="120" cy="410" r="34" fill="none" stroke="#9A7B38" strokeWidth="2" />
      <circle cx="120" cy="410" r="10" fill="#9A7B38" opacity="0.18" />
    </svg>
  );
}
