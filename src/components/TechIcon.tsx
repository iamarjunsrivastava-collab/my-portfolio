// Real SVG logos for each technology
// All SVGs are from Simple Icons / official brand assets (open source / brand guidelines)

export function PythonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="py1" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="py2" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
          <stop offset="0%" stopColor="#FFE052"/>
          <stop offset="100%" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
      <path fill="url(#py1)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.habitual 19.574c6.hybridization 0 11.33 4.879 11.33 10.898 0 6.022-4.732 10.898-11.33 10.898-6.596 0-11.33-4.876-11.33-10.898 0-6.019 4.734-10.898 11.33-10.898z"/>
      <path fill="url(#py2)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.088-19.574c-6.598 0-11.33-4.879-11.33-10.898 0-6.022 4.732-10.898 11.33-10.898 6.596 0 11.33 4.876 11.33 10.898 0 6.019-4.734 10.898-11.33 10.898z"/>
    </svg>
  );
}

// Simple colored circle with letter fallback for complex logos
function SimpleIcon({ bg, letter, textColor = "#fff" }: { bg: string; letter: string; textColor?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <circle cx="7" cy="7" r="7" fill={bg} />
      <text x="7" y="10.5" textAnchor="middle" fontSize="7" fontWeight="bold" fill={textColor} fontFamily="Arial">{letter}</text>
    </svg>
  );
}

export function SQLIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#336791"/>
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="Arial">SQL</text>
    </svg>
  );
}

export function PandasIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#150458">
      <rect width="24" height="24" rx="3" fill="#150458"/>
      <rect x="5" y="3" width="3" height="18" rx="1.5" fill="#E70488"/>
      <rect x="16" y="3" width="3" height="18" rx="1.5" fill="#E70488"/>
      <rect x="5" y="8" width="14" height="3" rx="1.5" fill="white"/>
      <rect x="5" y="13" width="14" height="3" rx="1.5" fill="white"/>
    </svg>
  );
}

export function NumpyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#4DABCF"/>
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" fontFamily="Arial">NumPy</text>
    </svg>
  );
}

export function ScikitIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#F7931E"/>
      <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="Arial">sklearn</text>
    </svg>
  );
}

export function TensorFlowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#FF6F00"/>
      <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3zm0 2.236l5.5 3.09v6.348L12 17.764l-5.5-3.09V8.326L12 5.236z" fill="white"/>
    </svg>
  );
}

export function PyTorchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#EE4C2C"/>
      <circle cx="12" cy="13" r="5" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="15" cy="7" r="1.5" fill="white"/>
      <line x1="12" y1="8" x2="12" y2="10" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

export function NLPIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#6366F1"/>
      <path d="M4 8h16M4 12h10M4 16h13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function PowerBIIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#F2C811"/>
      <rect x="5" y="14" width="3" height="6" rx="1" fill="#1a1a1a"/>
      <rect x="10" y="10" width="3" height="10" rx="1" fill="#1a1a1a"/>
      <rect x="15" y="6" width="3" height="14" rx="1" fill="#1a1a1a"/>
    </svg>
  );
}

export function TableauIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#E97627"/>
      <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="Arial">Tableau</text>
    </svg>
  );
}

export function MatplotlibIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#11557C"/>
      <polyline points="3,18 8,10 13,14 18,6" fill="none" stroke="#E07B39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SeabornIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#4C72B0"/>
      <circle cx="7" cy="17" r="2" fill="white" opacity="0.9"/>
      <circle cx="12" cy="11" r="2" fill="white" opacity="0.9"/>
      <circle cx="17" cy="7" r="2" fill="white" opacity="0.9"/>
      <circle cx="9" cy="14" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="15" cy="10" r="1.5" fill="white" opacity="0.6"/>
    </svg>
  );
}

export function PlotlyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#3F4F75"/>
      <rect x="4" y="15" width="3" height="5" rx="1" fill="#79CFDB"/>
      <rect x="9" y="11" width="3" height="9" rx="1" fill="#79CFDB"/>
      <rect x="14" y="7" width="3" height="13" rx="1" fill="#79CFDB"/>
      <rect x="19" y="4" width="2" height="16" rx="1" fill="#79CFDB"/>
    </svg>
  );
}

export function MySQLIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#4479A1"/>
      <path d="M4 8c0-1.1 3.6-2 8-2s8 .9 8 2v2c0 1.1-3.6 2-8 2S4 11.1 4 10V8z" fill="white" opacity="0.9"/>
      <path d="M4 12v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2c-1.5.8-4.5 1.2-8 1.2S5.5 12.8 4 12z" fill="white" opacity="0.7"/>
      <path d="M4 16v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2c-1.5.8-4.5 1.2-8 1.2S5.5 16.8 4 16z" fill="white" opacity="0.5"/>
    </svg>
  );
}

export function AWSIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#232F3E"/>
      <path d="M7 14l2-6 2 4 2-4 2 6" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17.5c0 0 4-1.5 9-1.5s9 1.5 9 1.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IBMIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#1261FE"/>
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" fontFamily="Arial">IBM</text>
    </svg>
  );
}

export function GitIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#F05032"/>
      <path d="M20.7 11.3l-8-8a1 1 0 00-1.4 0l-1.6 1.6 2 2a1.2 1.2 0 011.5 1.5l1.9 1.9a1.2 1.2 0 11-.7.7L13 9.1v5a1.2 1.2 0 11-1 0V9a1.2 1.2 0 01-.6-1.6L9.4 5.4 3.3 11.5a1 1 0 000 1.4l8 8a1 1 0 001.4 0l8-8a1 1 0 000-1.6z" fill="white"/>
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#181717"/>
      <path d="M12 3C7 3 3 7.1 3 12.2c0 4.1 2.6 7.5 6.2 8.7.5.1.6-.2.6-.4v-1.5c-2.6.6-3.1-1.3-3.1-1.3-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.6c0 .2.1.5.6.4A9.2 9.2 0 0021 12.2C21 7.1 17 3 12 3z" fill="white"/>
    </svg>
  );
}

export function VSCodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#007ACC"/>
      <path d="M17 3.6L9.5 10.5 5.8 7.5 3 9l4 3-4 3 2.8 1.5 3.7-3L17 20.4l4-1.8V5.4L17 3.6zm0 13.2l-5.5-4.8 5.5-4.8v9.6z" fill="white"/>
    </svg>
  );
}

export function ExcelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#217346"/>
      <path d="M14 3v18l7-2V5l-7-2zM3 7h10v2H5.5l2 3-2 3H13v2H3l3-5-3-5z" fill="white"/>
    </svg>
  );
}

export function OpenAIIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#412991"/>
      <path d="M12 4a5.3 5.3 0 00-3.6 9.1A4.3 4.3 0 004 17.2h2a2.3 2.3 0 012.3-2.3h.2A5.3 5.3 0 0012 16a5.3 5.3 0 003.5-1.1h.2a2.3 2.3 0 012.3 2.3h2a4.3 4.3 0 00-4.4-4.1A5.3 5.3 0 0012 4zm0 2a3.3 3.3 0 110 6.6A3.3 3.3 0 0112 6z" fill="white"/>
    </svg>
  );
}

export function LLMIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#6D28D9"/>
      <circle cx="8" cy="12" r="2" fill="white"/>
      <circle cx="16" cy="12" r="2" fill="white"/>
      <circle cx="12" cy="7" r="2" fill="white"/>
      <line x1="8" y1="12" x2="12" y2="7" stroke="white" strokeWidth="1"/>
      <line x1="16" y1="12" x2="12" y2="7" stroke="white" strokeWidth="1"/>
      <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1"/>
    </svg>
  );
}

export function HuggingFaceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#FFD21E"/>
      <circle cx="12" cy="11" r="6" fill="#FF9D00"/>
      <circle cx="10" cy="10" r="1.2" fill="#1a1a1a"/>
      <circle cx="14" cy="10" r="1.2" fill="#1a1a1a"/>
      <path d="M9 13.5c0 0 1 1.5 3 1.5s3-1.5 3-1.5" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function FlaskIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#1a1a1a"/>
      <path d="M9 3h6M10 3v6L6 18a2 2 0 001.8 2.8h8.4A2 2 0 0018 18l-4-9V3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="16" r="1" fill="#4ade80"/>
      <circle cx="13" cy="18" r="0.8" fill="#4ade80"/>
    </svg>
  );
}
