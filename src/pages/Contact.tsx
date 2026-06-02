import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ArrowRight, Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const links = [
  { label: "Email",     icon: Mail,      href: "mailto:iamarjunsrivastava@gmail.com" },
  { label: "Phone",     icon: Phone,     href: "tel:+918810761322" },
  { label: "LinkedIn",  icon: Linkedin,  href: "https://www.linkedin.com/in/arjun-srivastava-228021282/" },
  { label: "Github",    icon: Github,    href: "https://github.com/iamarjunsrivastava-collab" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/iamarjunsrivastava" },
];

function NowPlayingWidget() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/song.mp3");
    audio.volume = 0.8;
    audioRef.current = audio;
    audio.addEventListener("ended", () => { setPlaying(false); setProgress(0); });
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    });
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: 4, padding: "10px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Spotify logo */}
        <div style={{ width: 44, height: 44, background: "#1DB954", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.568 11.233 1.328a.78.78 0 01.257 1.072zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 11-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 01-1.006 1.582l.052.026z" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#c9a227" }}>this is how you fall in love</p>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Jeremy Zucker, Chelsea Cutler</p>
        </div>
        <button onClick={togglePlay}
          style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--border-color)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "opacity 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--icon-color)">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--icon-color)">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      </div>
      <div style={{ height: 3, background: "var(--border-light)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "#1DB954", borderRadius: 2, transition: "width 0.5s linear" }} />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="text-center mb-8">
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-main)", marginBottom: 24 }}>
          Let's Work Together
        </h2>
        <div className="flex items-center justify-center gap-4 mb-5">
          <div style={{ width: 60, height: 60, border: "1px solid var(--border-color)", overflow: "hidden", background: "var(--bg-card)", transform: "rotate(-6deg)", borderRadius: 4 }}>
            <img src="/profile.jpg" alt="Arjun" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              onError={(e) => {
                const t = e.currentTarget; t.style.display = "none";
                const p = t.parentElement;
                if (p && !p.querySelector(".av-fb2")) {
                  const d = document.createElement("div"); d.className = "av-fb2";
                  d.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#888;font-family:Arial,sans-serif;";
                  d.textContent = "AS"; p.appendChild(d);
                }
              }}
            />
          </div>
          <span style={{ fontSize: 18, color: "var(--text-muted)" }}>⇌</span>
          <div style={{ width: 60, height: 60, border: "1px solid var(--border-color)", background: "var(--bg-card)", transform: "rotate(4deg)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>
        <p style={{ fontSize: 15, fontWeight: 700, color: "var(--text-main)", marginBottom: 4 }}>Suggestion / Idea / Thought ?</p>
        <p style={{ fontSize: 14, color: "var(--text-muted)" }}>I'll help you get the insights you've been dreaming of. Just send me a message.</p>
        <div style={{ fontSize: 20, marginTop: 10 }}>🔥</div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-light)" }}>
        {links.map(({ label, icon: Icon, href }) => (
          <a key={label} href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="contact-row"
          >
            <div className="flex items-center gap-3">
              <Icon size={16} strokeWidth={1.5} style={{ color: "var(--icon-color)" }} />
              <span style={{ fontSize: 15, color: "var(--text-main)" }}>{label}</span>
            </div>
            <ArrowRight size={15} strokeWidth={1.5} style={{ color: "var(--text-faint)" }} />
          </a>
        ))}
      </div>

      <div style={{ marginTop: 32, paddingBottom: 8 }}>
        <p style={{ fontSize: 15, fontWeight: 700, color: "var(--text-main)", marginBottom: 12 }}>Now Playing ♪</p>
        <NowPlayingWidget />
      </div>
    </motion.div>
  );
}
