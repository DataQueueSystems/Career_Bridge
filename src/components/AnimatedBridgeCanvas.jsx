export default function AnimatedBridgeCanvas() {
  return (
    <div className="relative w-full overflow-hidden select-none">
      <svg
        viewBox="0 0 1200 340"
        className="w-full h-auto block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Illustration of a student walking across CareerBridge to a modern corporate building"
        role="img"
      >
        <defs>
          {/* Sky ambient gradient */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#030C1B" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#061D42" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0B2545" stopOpacity="1" />
          </linearGradient>

          {/* Bridge beam glow gradient */}
          <linearGradient id="bridgeDeckGrad" x1="100" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FB923C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
          </linearGradient>

          {/* Water reflection gradient */}
          <linearGradient id="waterGrad" x1="0" y1="260" x2="0" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B2545" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#030C1B" stopOpacity="0.95" />
          </linearGradient>

          {/* Corporate tower glass gradient */}
          <linearGradient id="towerGrad1" x1="970" y1="50" x2="1100" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0A1E3F" stopOpacity="0.95" />
          </linearGradient>

          {/* Corporate tower 2 gradient */}
          <linearGradient id="towerGrad2" x1="1080" y1="90" x2="1190" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#172554" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
          </linearGradient>

          {/* Glow filter for bridge cables & beacon */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* 1. TWINKLING STARS & CONSTELLATION                       */}
        {/* ======================================================== */}
        {/* Transparent background so animation floats seamlessly behind footer */}
        <rect width="1200" height="340" fill="none" />

        {/* Twinkling ambient stars */}
        {[
          { cx: 80, cy: 40, r: 1.5, dur: '2.5s' },
          { cx: 160, cy: 75, r: 1.2, dur: '3.1s' },
          { cx: 280, cy: 35, r: 1.6, dur: '2.2s' },
          { cx: 370, cy: 60, r: 1.3, dur: '3.6s' },
          { cx: 460, cy: 30, r: 1.8, dur: '2.8s' },
          { cx: 560, cy: 50, r: 1.4, dur: '3.3s' },
          { cx: 650, cy: 30, r: 1.5, dur: '2.6s' },
          { cx: 740, cy: 65, r: 1.3, dur: '3.8s' },
          { cx: 850, cy: 40, r: 1.6, dur: '2.4s' },
          { cx: 930, cy: 55, r: 1.4, dur: '3.0s' },
        ].map((star, i) => (
          <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill="#FFFFFF">
            <animate attributeName="opacity" values="0.2;0.95;0.2" dur={star.dur} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Subtle career milestone constellation line */}
        <path
          d="M 280 35 L 370 60 L 460 30 L 560 50 L 650 30 L 740 65 L 850 40"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* ======================================================== */}
        {/* 2. WATER LEVEL & REFLECTION RIPPLES                      */}
        {/* ======================================================== */}
        <rect x="0" y="255" width="1200" height="85" fill="rgba(6, 29, 66, 0.35)" />
        <line x1="0" y1="255" x2="1200" y2="255" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />

        {/* Flowing water ripples under the bridge */}
        <path
          d="M 150 270 Q 300 273 450 270 T 750 270 T 1050 270"
          stroke="rgba(96, 165, 250, 0.25)"
          strokeWidth="1.5"
          fill="none"
        >
          <animate attributeName="d" values="
            M 150 270 Q 300 273 450 270 T 750 270 T 1050 270;
            M 150 271 Q 300 268 450 271 T 750 271 T 1050 271;
            M 150 270 Q 300 273 450 270 T 750 270 T 1050 270
          " dur="6s" repeatCount="indefinite" />
        </path>
        <path
          d="M 220 288 Q 380 291 540 288 T 880 288"
          stroke="rgba(249, 115, 22, 0.25)"
          strokeWidth="1.5"
          fill="none"
        >
          <animate attributeName="d" values="
            M 220 288 Q 380 291 540 288 T 880 288;
            M 220 287 Q 380 285 540 287 T 880 287;
            M 220 288 Q 380 291 540 288 T 880 288
          " dur="5s" repeatCount="indefinite" />
        </path>

        {/* ======================================================== */}
        {/* 3. LEFT BANK: RURAL COMMUNITY / COLLEGE STARTING POINT   */}
        {/* ======================================================== */}
        {/* Grassy river bank */}
        <path d="M 0 255 L 140 255 Q 120 275 0 295 Z" fill="#0E2A47" />
        <path d="M 0 240 Q 60 238 120 255 L 0 255 Z" fill="#093530" />

        {/* College / Institution Building */}
        <g transform="translate(18, 145)">
          {/* Main Institution Facade */}
          <rect x="0" y="35" width="80" height="60" rx="3" fill="#132F52" stroke="#2563EB" strokeWidth="1.5" />
          {/* Classical Pediment Gable Roof */}
          <polygon points="-5,35 40,8 85,35" fill="#F97316" opacity="0.9" />
          {/* Pillars */}
          <rect x="12" y="42" width="6" height="53" rx="1" fill="#93C5FD" opacity="0.8" />
          <rect x="37" y="42" width="6" height="53" rx="1" fill="#93C5FD" opacity="0.8" />
          <rect x="62" y="42" width="6" height="53" rx="1" fill="#93C5FD" opacity="0.8" />
          {/* Warm glowing library/classroom window */}
          <rect x="23" y="55" width="10" height="18" rx="2" fill="#FEF08A" opacity="0.9">
            <animate attributeName="opacity" values="0.75;0.95;0.75" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="47" y="55" width="10" height="18" rx="2" fill="#FEF08A" opacity="0.9">
            <animate attributeName="opacity" values="0.95;0.75;0.95" dur="3s" repeatCount="indefinite" />
          </rect>
          {/* Graduation Cap Crest */}
          <circle cx="40" cy="24" r="7" fill="#061D42" />
          <polygon points="34,23 40,20 46,23 40,26" fill="#F97316" />
        </g>

        {/* Streetlight at the entrance of the bridge */}
        <g transform="translate(108, 195)">
          <line x1="0" y1="40" x2="0" y2="5" stroke="#CBD5E1" strokeWidth="2.5" />
          <path d="M 0 5 Q 8 2 10 7" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          <circle cx="10" cy="9" r="4.5" fill="#FEF08A" filter="url(#softGlow)" />
        </g>

        {/* ======================================================== */}
        {/* 4. THE ICONIC BRIDGE (Matching user screenshot)          */}
        {/* ======================================================== */}
        {/* Left Bridge Pier Column */}
        <rect x="100" y="235" width="20" height="40" fill="#1E3A8A" rx="2" />
        {/* Right Bridge Pier Column */}
        <rect x="970" y="235" width="20" height="40" fill="#1E3A8A" rx="2" />

        {/* Vertical suspension columns connecting upper arch to deck */}
        {[
          { x: 180, archY: 198, deckY: 220 },
          { x: 250, archY: 168, deckY: 204 },
          { x: 330, archY: 139, deckY: 184 },
          { x: 410, archY: 118, deckY: 167 },
          { x: 490, archY: 104, deckY: 154 },
          { x: 550, archY: 98,  deckY: 148 }, // Peak center
          { x: 610, archY: 104, deckY: 154 },
          { x: 690, archY: 118, deckY: 167 },
          { x: 770, archY: 139, deckY: 184 },
          { x: 850, archY: 168, deckY: 204 },
          { x: 920, archY: 198, deckY: 220 },
        ].map((col, idx) => (
          <g key={idx}>
            {/* Cable line */}
            <line
              x1={col.x}
              y1={col.archY}
              x2={col.x}
              y2={col.deckY}
              stroke="rgba(147, 197, 253, 0.55)"
              strokeWidth="2"
            />
            {/* Cable joint node */}
            <circle cx={col.x} cy={col.archY} r="3" fill="#60A5FA" />
            <circle cx={col.x} cy={col.deckY} r="2.5" fill="#F97316" />
          </g>
        ))}

        {/* UPPER SUSPENSION ARCH (Iconic curve from logo and screenshot) */}
        <path
          d="M 110 235 Q 550 80 980 235"
          stroke="#0066C5"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 110 235 Q 550 80 980 235"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#softGlow)"
        />

        {/* Secondary inner arch line for structural truss depth */}
        <path
          d="M 120 235 Q 550 92 970 235"
          stroke="rgba(249, 115, 22, 0.7)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
        />

        {/* BRIDGE WALKING DECK / ROADWAY */}
        {/* Main Road Deck Beam */}
        <path
          d="M 90 238 Q 550 148 1000 238"
          stroke="#0F172A"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Glowing walking surface */}
        <path
          d="M 90 236 Q 550 146 1000 236"
          stroke="url(#bridgeDeckGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Safety railing along the bridge */}
        <path
          d="M 100 231 Q 550 141 990 231"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* ======================================================== */}
        {/* 5. RIGHT BANK: MODERN CORPORATE TECH HEADQUARTERS        */}
        {/* ======================================================== */}
        {/* Background Skyscraper 2 */}
        <rect x="1080" y="80" width="85" height="175" rx="3" fill="url(#towerGrad2)" stroke="#1E3A8A" strokeWidth="1" />
        {/* Rooftop Antenna with blinking beacon */}
        <line x1="1122" y1="80" x2="1122" y2="40" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="1122" cy="38" r="4" fill="#EF4444" filter="url(#softGlow)">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite" />
        </circle>

        {/* Tower 2 Windows */}
        {[95, 115, 135, 155, 175, 195, 215].map((y, i) => (
          <g key={i}>
            <rect x="1092" y={y} width="16" height="10" rx="1" fill="#93C5FD" opacity={i % 2 === 0 ? '0.7' : '0.3'} />
            <rect x="1116" y={y} width="16" height="10" rx="1" fill="#FEF08A" opacity={i % 3 === 0 ? '0.85' : '0.4'} />
            <rect x="1140" y={y} width="16" height="10" rx="1" fill="#93C5FD" opacity={i % 2 === 1 ? '0.6' : '0.2'} />
          </g>
        ))}

        {/* Main High-Rise Corporate Tech Tower */}
        <rect x="970" y="45" width="115" height="210" rx="4" fill="url(#towerGrad1)" stroke="#3B82F6" strokeWidth="2" />
        
        {/* Building Crown Sign */}
        <rect x="976" y="52" width="102" height="18" rx="3" fill="#061D42" stroke="#F97316" strokeWidth="1.5" />
        <text x="1027" y="64.5" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="0.8">
          CAREERBRIDGE
        </text>

        {/* Grid Windows with live twinkling corporate lights */}
        {[78, 100, 122, 144, 166, 188].map((y, rowIdx) => (
          <g key={rowIdx}>
            <rect x="984" y={y} width="18" height="12" rx="2" fill="#60A5FA" opacity="0.7">
              {rowIdx === 1 && <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.4s" repeatCount="indefinite" />}
            </rect>
            <rect x="1008" y={y} width="18" height="12" rx="2" fill="#FEF08A" opacity="0.85">
              {rowIdx === 2 && <animate attributeName="opacity" values="0.85;0.3;0.85" dur="3.1s" repeatCount="indefinite" />}
            </rect>
            <rect x="1032" y={y} width="18" height="12" rx="2" fill="#60A5FA" opacity="0.6">
              {rowIdx === 3 && <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />}
            </rect>
            <rect x="1056" y={y} width="18" height="12" rx="2" fill="#FED7AA" opacity="0.75" />
          </g>
        ))}

        {/* Corporate Welcome Entrance Lobby */}
        <g transform="translate(975, 212)">
          {/* Entrance Frame */}
          <rect x="0" y="0" width="55" height="43" rx="3" fill="#0B1E3B" stroke="#F97316" strokeWidth="2" />
          {/* Warm Golden Glow coming out of the open glass door */}
          <rect x="10" y="8" width="35" height="35" rx="2" fill="#FBBF24" opacity="0.9" filter="url(#softGlow)">
            <animate attributeName="opacity" values="0.75;1;0.75" dur="2s" repeatCount="indefinite" />
          </rect>
          <text x="27" y="5" textAnchor="middle" fill="#F97316" fontSize="7" fontWeight="bold">
            ENTRANCE
          </text>
        </g>

        {/* ======================================================== */}
        {/* 6. ANIMATED WALKING HUMAN FIGURE (Student to Corporate)  */}
        {/* ======================================================== */}
        {/*
            Path: M 80 236 Q 550 146 1000 236
            The human starts on the left bank (80px), ascends the bridge to the peak (550px, 146px),
            walks down into the corporate tech entrance (1000px), and loops smoothly!
        */}
        <g>
          {/* Follows exact bridge curvature across 11 seconds */}
          <animateMotion
            path="M 80 234 Q 550 144 1000 234"
            dur="11s"
            repeatCount="indefinite"
            rotate="auto"
          />

          {/* Fade in as they step onto the bridge, fade out inside the building */}
          <animate
            attributeName="opacity"
            values="0;0;1;1;1;1;0;0"
            keyTimes="0;0.04;0.09;0.88;0.94;0.97;0.99;1"
            dur="11s"
            repeatCount="indefinite"
          />

          {/* Human Character Graphic: Student/Job Seeker with Cap & Portfolio */}
          <g transform="translate(0, -32) scale(0.95)">
            {/* Soft shadow under feet */}
            <ellipse cx="6" cy="33" rx="7" ry="2" fill="rgba(0,0,0,0.4)" />

            {/* Sparkle career momentum trail */}
            <circle cx="-6" cy="20" r="1.5" fill="#F97316" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0;0.8" dur="0.8s" repeatCount="indefinite" />
            </circle>

            {/* LEGS with realistic walking stride cycle */}
            {/* Back Leg */}
            <line x1="4" y1="17" x2="0" y2="32" stroke="#0F172A" strokeWidth="3" strokeLinecap="round">
              <animate attributeName="x2" values="-5;11;-5" dur="0.55s" repeatCount="indefinite" />
            </line>
            {/* Front Leg */}
            <line x1="8" y1="17" x2="12" y2="32" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round">
              <animate attributeName="x2" values="13;-3;13" dur="0.55s" repeatCount="indefinite" />
            </line>

            {/* TORSO & BLAZER */}
            <path d="M 2 2 L 11 2 L 12 17 L 3 17 Z" fill="#0066C5" rx="1" />
            {/* Orange Tie / Collar Accent */}
            <line x1="7" y1="2" x2="7" y2="10" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />

            {/* BACKPACK */}
            <rect x="-1" y="4" width="4" height="11" rx="2" fill="#0F172A" />

            {/* ARMS with walking swing */}
            {/* Back Arm */}
            <line x1="4" y1="5" x2="-2" y2="15" stroke="#004E98" strokeWidth="2.5" strokeLinecap="round">
              <animate attributeName="x2" values="-4;10;-4" dur="0.55s" repeatCount="indefinite" />
            </line>
            {/* Front Arm holding White Document Portfolio / Resume */}
            <g>
              <line x1="9" y1="5" x2="15" y2="15" stroke="#0066C5" strokeWidth="2.5" strokeLinecap="round">
                <animate attributeName="x2" values="16;4;16" dur="0.55s" repeatCount="indefinite" />
              </line>
              {/* Portfolio Folder in hand */}
              <rect x="12" y="12" width="7" height="6" rx="1" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8">
                <animate attributeName="x" values="13;1;13" dur="0.55s" repeatCount="indefinite" />
              </rect>
            </g>

            {/* HEAD */}
            <circle cx="7" cy="-3" r="5" fill="#FED7AA" />

            {/* GRADUATION CAP (Symbol of learning & success) */}
            <polygon points="0,-8 7,-11 14,-8 7,-5" fill="#F97316" />
            <polygon points="4,-8 7,-6 10,-8 7,-9" fill="#061D42" />
            {/* Tassel */}
            <line x1="12" y1="-8" x2="14" y2="-3" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="x2" values="13;15;13" dur="0.55s" repeatCount="indefinite" />
            </line>
          </g>
        </g>
      </svg>
    </div>
  );
}
