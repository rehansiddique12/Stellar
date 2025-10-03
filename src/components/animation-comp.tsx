
// import main from "../assets/img/title.png";
// type Node = {
//   side: "left" | "right"
//   label: string
//   yPct: number // percentage from top (0-100)
//   // Placeholder image path (replace with real brand assets if desired)
//   src: string
// }

// const LEFT_X = 80;
// const RIGHT_X = 920;
// const CENTER_X = 500;
// const CENTER_Y = 200;
// const VIEW_W = 1000;
// const VIEW_H = 400;
// const RING_R = 68;
// const ELBOW_OFFSET = 120; 

// function makeElbowPath(side: "left" | "right", endX: number, endY: number) {
  
//   const startX = CENTER_X + (side === "left" ? -RING_R : RING_R);
//   const startY = CENTER_Y;
//   const cornerX = CENTER_X + (side === "left" ? -ELBOW_OFFSET : ELBOW_OFFSET);

//   return `M ${startX} ${startY} H ${cornerX} V ${endY} H ${endX}`;
// };

// const nodes: Node[] = [
//   // Left side (top to bottom)
//   { side: "left", label: "Figma", yPct: 18, src: "/figma-logo.jpg" },
//   { side: "left", label: "Monday", yPct: 33, src: "/monday-logo.jpg" },
//   { side: "left", label: "Twitter", yPct: 50, src: "/twitter-logo.jpg" },
//   { side: "left", label: "Pinterest", yPct: 65, src: "/pinterest-logo.jpg" },
//   { side: "left", label: "Dropbox", yPct: 82, src: "/dropbox-logo.jpg" },

//   // Right side (top to bottom)
//   { side: "right", label: "Instagram", yPct: 18, src: "/instagram-logo.jpg" },
//   { side: "right", label: "Mailchimp", yPct: 33, src: "/mailchimp-logo.jpg" },
//   { side: "right", label: "Facebook", yPct: 50, src: "/facebook-logo.png" },
//   { side: "right", label: "Slack", yPct: 65, src: "/slack-logo.jpg" },
//   { side: "right", label: "Snapchat", yPct: 82, src: "/snapchat-logo.jpg" },
// ];

// function Badge({
//   side,
//   yPct,
//   label,
//   src,
// }: {
//   side: "left" | "right"
//   yPct: number
//   label: string
//   src: string
// }) {
//   const vertical = `calc(${yPct}% - 28px)`; // center a 56px badge vertically
//   const horizontal = side === "left" ? { left: "1.25rem" } : { right: "1.25rem" };

//   return (
//     <div
//       className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card ring-1 ring-border shadow-sm"
//       style={{ top: vertical, ...horizontal }}
//       aria-label={label}
//       role="img"
//     >
//       <img src={src || "/placeholder.svg"} alt={label} className="h-6 w-6" crossOrigin="anonymous" />
//     </div>
//   );
// };

// export function Animationcomp() {
//   // Build both base and animated overlay strokes for each connector
//   const connectorLayers = nodes.map((n, idx) => {
//     const endY = (n.yPct / 100) * VIEW_H;
//     const endX = n.side === "left" ? LEFT_X : RIGHT_X;
//     const d = makeElbowPath(n.side, endX, endY);
//     return (
//       <g key={idx} fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <path d={d} stroke="oklch(0.92 0 0)" strokeWidth="1.5" />
//         <path
//           d={d}
//           stroke="url(#flow)"
//           strokeWidth="2"
//           strokeDasharray="28 180"
//           className="rounded-full"
//           style={{ animation: "dash-move 6s linear infinite" }}
//         />
//       </g>
//     );
//   });

//   return (
//     <section
//       className="relative mx-auto w-full max-w-screen-xl overflow-visible"
//       style={{ aspectRatio: "24 / 10" }}
//       aria-label="Integrations map"
//     >
//       <style>{`
//         @keyframes dash-move { 
//           to { stroke-dashoffset: -2000; }
//         }
//         @keyframes ring-spin {
//           to { stroke-dashoffset: -600; }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           svg [style*="dash-move"], svg [style*="ring-spin"] { animation: none !important; }
//         }
//       `}</style>

//       {/* SVG connectors + glow + animated gradients */}
//       <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="absolute inset-0" aria-hidden="true">
//         <defs>
//           <radialGradient id="halo" cx="50%" cy="50%" r="60%">
//             <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="1" />
//             <stop offset="55%" stopColor="oklch(1 0 0)" stopOpacity="0.9" />
//             <stop offset="100%" stopColor="oklch(1 0 0)" stopOpacity="0" />
//           </radialGradient>

//           <linearGradient id="flow" x1="0" y1="0" x2={`${VIEW_W}`} y2="0" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="oklch(0.72 0.22 300)" stopOpacity="0" />
//             <stop offset="12%" stopColor="oklch(0.72 0.22 300)" stopOpacity="0.9" />
//             <stop offset="24%" stopColor="oklch(0.72 0.22 300)" stopOpacity="0" />
//             <animateTransform
//               attributeName="gradientTransform"
//               type="translate"
//               from="-200 0"
//               to={`${VIEW_W} 0`}
//               dur="6s"
//               repeatCount="indefinite"
//             />
//           </linearGradient>

//           <linearGradient id="ringGrad" x1="10" y1="0" x2="100%" y2="0">
//             <stop offset="0%" stopColor="oklch(0.72 0.22 300)" />
//             <stop offset="50%" stopColor="oklch(0.74 0.17 310)" />
//             <stop offset="100%" stopColor="oklch(0.72 0.22 300)" />
//           </linearGradient>
//         </defs>

//         {/* halo */}
//         <circle cx={CENTER_X} cy={CENTER_Y} r="120" fill="url(#halo)" />

//         {/* connectors */}
//         <g>{connectorLayers}</g>

//         <circle
//           cx={CENTER_X}
//           cy={CENTER_Y}
//           r={RING_R}
//           fill="none"
//           stroke="url(#ringGrad)"
//           strokeWidth="2"
//           strokeDasharray="6 10"
//           style={{ animation: "ring-spin 8s linear infinite" }}
//         />
//       </svg>

//       <div
//         className="absolute left-1/2 top-1/2 z-20 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card ring-1 ring-border shadow-sm"
//         aria-label="Cloud"
//         role="img"
//       >
//         <div className="relative flex h-full w-full items-center justify-center">
//           <div className="absolute inset-1 rounded-full ring-1 ring-border/70" />
//           <img
//             src={main}
//             alt="Cloud icon"
//             className="relative h-10 w-10"
//             crossOrigin="anonymous"
//           />
//         </div>
//       </div>

//       {/* outer badges remain */}
//       {nodes.map((n, i) => (
//         <Badge key={`${n.label}-${i}`} side={n.side} yPct={n.yPct} label={n.label} src={n.src} />
//       ))}
//     </section>
//   );
// };

// export default Animationcomp;
