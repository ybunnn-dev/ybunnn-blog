export default function BannerBackground() {
  return (
    <div className="relative h-40 sm:h-56 w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-cyan-100 dark:from-dark_gradient dark:to-light_gradient transition-colors duration-300">

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Science SVG layer */}
      <svg
        viewBox="0 0 680 180"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <style>{`
          @keyframes floatUp   { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)} }
          @keyframes floatDown { 0%,100%{transform:translateY(0)}  50%{transform:translateY(6px)}  }
          @keyframes floatSide { 0%,100%{transform:translate(0,0)} 50%{transform:translate(4px,-5px)} }
          @keyframes spinOrbit { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes dashMove  { to{stroke-dashoffset:-40} }

          .sci-mol1   { animation: floatUp   4s   ease-in-out infinite;       transform-origin: 100px 80px;  }
          .sci-mol2   { animation: floatDown 5.5s ease-in-out infinite 1s;    transform-origin: 310px 45px;  }
          .sci-mol3   { animation: floatSide 6s   ease-in-out infinite 0.5s;  transform-origin: 170px 140px; }
          
          .sci-atom   { animation: floatUp   7s   ease-in-out infinite 2s;    transform-origin: 340px 90px; }
          .sci-orbit1 { animation: spinOrbit 8s   linear     infinite;        transform-origin: 340px 90px; }
          .sci-orbit2 { animation: spinOrbit 10s  linear     infinite reverse; transform-origin: 340px 90px; }
          
          /* NEW: Origins for the new elements on the right */
          .sci-mol4   { animation: floatDown 5s ease-in-out infinite 0.5s;    transform-origin: 620px 140px; }
          .sci-atom2  { animation: floatSide 6s ease-in-out infinite 1.5s;    transform-origin: 580px 40px; }
          .sci-orbit3 { animation: spinOrbit 7s linear infinite;              transform-origin: 580px 40px; }
          .sci-orbit4 { animation: spinOrbit 9s linear infinite reverse;      transform-origin: 580px 40px; }

          .sci-dna    { stroke-dasharray:6 3; animation: dashMove 2s linear infinite; }
          .sci-dna2   { stroke-dasharray:6 3; animation: dashMove 2s linear infinite -1s; }
        `}</style>

        {/* — Standing Vertical DNA helix — */}
        <g opacity="0.6">
          {(() => {
            const strands = Array.from({ length: 45 }).map((_, i) => {
              const t = i / 44;
              const x = 500;
              const y = 200 - t * 220; 
              
              const nx = 1;
              const ny = 0;

              const offset1 = Math.sin(t * Math.PI * 8) * 30;
              const offset2 = Math.sin(t * Math.PI * 8 + Math.PI) * 30;

              return {
                x1: x + nx * offset1, y1: y + ny * offset1,
                x2: x + nx * offset2, y2: y + ny * offset2
              };
            });

            const path1 = strands.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x1.toFixed(1)} ${p.y1.toFixed(1)}`).join(' ');
            const path2 = strands.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x2.toFixed(1)} ${p.y2.toFixed(1)}`).join(' ');
            
            // INCREASED GAP: Changed from i % 3 to i % 6 to drastically reduce the number of horizontal lines
            const rungs = strands.filter((_, i) => i % 6 === 0);

            return (
              <>
                <path className="sci-dna" d={path1} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path className="sci-dna2" d={path2} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                <g stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
                  {rungs.map((p, i) => (
                    <line key={`rung-${i}`} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} />
                  ))}
                </g>
                <g fill="white" opacity="0.9">
                  {rungs.map((p, i) => (
                    <g key={`dot-${i}`}>
                      <circle cx={p.x1} cy={p.y1} r="2.5" />
                      <circle cx={p.x2} cy={p.y2} r="2.5" />
                    </g>
                  ))}
                </g>
              </>
            );
          })()}
        </g>

        {/* — H₂O molecule — */}
        <g className="sci-mol1" opacity="0.8">
          <line x1="100" y1="75" x2="78"  y2="95" stroke="white" strokeWidth="1.8" />
          <line x1="100" y1="75" x2="122" y2="95" stroke="white" strokeWidth="1.8" />
          <circle cx="100" cy="75" r="11" fill="white" opacity="0.9" />
          <circle cx="78"  cy="95" r="7"  fill="white" opacity="0.75" />
          <circle cx="122" cy="95" r="7"  fill="white" opacity="0.75" />
          <text x="100" y="79" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0e7490" fontFamily="sans-serif">O</text>
          <text x="78"  y="99" textAnchor="middle" fontSize="9"  fontWeight="600" fill="#0e7490" fontFamily="sans-serif">H</text>
          <text x="122" y="99" textAnchor="middle" fontSize="9"  fontWeight="600" fill="#0e7490" fontFamily="sans-serif">H</text>
        </g>

        {/* — CO₂ molecule — */}
        <g className="sci-mol2" opacity="0.75">
          <line x1="265" y1="45" x2="225" y2="45" stroke="white" strokeWidth="1.8" />
          <line x1="265" y1="45" x2="305" y2="45" stroke="white" strokeWidth="1.8" />
          <line x1="265" y1="41" x2="225" y2="41" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <line x1="265" y1="41" x2="305" y2="41" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <circle cx="225" cy="45" r="9"  fill="white" opacity="0.8" />
          <circle cx="265" cy="45" r="11" fill="white" opacity="0.9" />
          <circle cx="305" cy="45" r="9"  fill="white" opacity="0.8" />
          <text x="265" y="49" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0e7490" fontFamily="sans-serif">C</text>
          <text x="225" y="49" textAnchor="middle" fontSize="9"  fontWeight="600" fill="#0e7490" fontFamily="sans-serif">O</text>
          <text x="305" y="49" textAnchor="middle" fontSize="9"  fontWeight="600" fill="#0e7490" fontFamily="sans-serif">O</text>
        </g>

        {/* — Benzene ring — */}
        <g className="sci-mol3" opacity="0.6" stroke="white" strokeWidth="1.5" fill="none">
          <polygon points="170,118 186,109 202,118 202,136 186,145 170,136" />
          <polygon points="176,122 186,116 196,122 196,132 186,138 176,132" opacity="0.45" />
        </g>

        {/* — Atom with orbits (Middle) — */}
        <g className="sci-atom" opacity="0.55">
          <circle cx="340" cy="90" r="5.5" fill="white" />
          <ellipse className="sci-orbit1" cx="340" cy="90" rx="26" ry="9" stroke="white" strokeWidth="1.2" fill="none" />
          <ellipse className="sci-orbit2" cx="340" cy="90" rx="26" ry="9" stroke="white" strokeWidth="1.2" fill="none" transform="rotate(60 340 90)" />
          <ellipse cx="340" cy="90" rx="26" ry="9" stroke="white" strokeWidth="1.2" fill="none" transform="rotate(120 340 90)" opacity="0.5" />
        </g>

        {/* — NEW: Small Molecule (Lower Right) — */}
        <g className="sci-mol4" opacity="0.65">
          <line x1="620" y1="140" x2="640" y2="130" stroke="white" strokeWidth="1.5" />
          <circle cx="620" cy="140" r="8" fill="white" opacity="0.9" />
          <circle cx="640" cy="130" r="5" fill="white" opacity="0.75" />
        </g>

        {/* — NEW: Small Atom (Top Right) — */}
        <g className="sci-atom2" opacity="0.5">
          <circle cx="580" cy="40" r="4" fill="white" />
          <ellipse className="sci-orbit3" cx="580" cy="40" rx="18" ry="6" stroke="white" strokeWidth="1" fill="none" />
          <ellipse className="sci-orbit4" cx="580" cy="40" rx="18" ry="6" stroke="white" strokeWidth="1" fill="none" transform="rotate(60 580 40)" />
          <ellipse cx="580" cy="40" rx="18" ry="6" stroke="white" strokeWidth="1" fill="none" transform="rotate(120 580 40)" opacity="0.5" />
        </g>

        {/* Scatter dots */}
        {[[60,150,2.5,0.3],[200,155,2,0.25],[350,140,3,0.3],[370,30,2,0.2],[140,40,2,0.25],[550,155,2.5,0.3],[620,80,2,0.2]].map(
          ([cx,cy,r,o],i) => <circle key={`dot-${i}`} cx={cx} cy={cy} r={r} fill="white" opacity={o} />
        )}
      </svg>
    </div>
  );
}