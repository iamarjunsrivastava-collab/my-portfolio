import { motion } from "framer-motion";

const education = [
  {
    institution: "United University, Prayagraj",
    degree: "B.Tech — Computer Science & Engineering (Data Science)",
    period: "2023 – 2027",
    logo: "/logos/united-university.png",
    initials: "UU",
  },
  {
    institution: "Sri Chaitanya Educational Institute",
    degree: "Intermediate (Class XII) — PCM",
    period: "2020 – 2022",
    logo: "/logos/sri-chaitanya.jpg",
    initials: "SC",
  },
  {
    institution: "Y.M.C.A. Centenary School & College",
    degree: "High School (Class X)",
    period: "2019 – 2020",
    logo: "/logos/ymca.jpg",
    initials: "YM",
  },
];

const quote = {
  text: "Though we face finite disappointment through our life here, we must keep infinite hope.",
};

function LogoCircle({ logo, initials }: { logo: string; initials: string }) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        border: "1px solid #c0b89a",
        borderRadius: 6,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        padding: 3,
      }}
    >
      <img
        src={logo}
        alt={initials}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: 0,
        }}
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = "none";
          const p = t.parentElement;
          if (p && !p.querySelector(".logo-fb")) {
            const d = document.createElement("div");
            d.className = "logo-fb";
            d.style.cssText =
              "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#888;font-family:Arial,sans-serif;";
            d.textContent = initials;
            p.appendChild(d);
          }
        }}
      />
    </div>
  );
}

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Education list */}
      <div className="mb-10">
        {education.map((edu, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-4"
            style={{ borderBottom: "1px solid #d4c9a8" }}
          >
            <div className="flex items-center gap-3">
              <LogoCircle logo={edu.logo} initials={edu.initials} />
              <div>
                <p style={{ fontSize: 15, color: "#1a1a1a", fontWeight: 600 }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: 13, color: "#666" }}>{edu.degree}</p>
              </div>
            </div>
            <span
              style={{
                fontSize: 13,
                color: "#aaa",
                flexShrink: 0,
                marginLeft: 16,
                fontFamily: "Arial, sans-serif",
              }}
            >
              {edu.period}
            </span>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-6">
        <p
          className="leading-relaxed"
          style={{ fontSize: 15, color: "#444", fontStyle: "italic" }}
        >
          <span style={{ fontSize: 22, color: "#c0b89a", lineHeight: 1 }}>"</span>{" "}
          {quote.text}
        </p>
      </div>
    </motion.div>
  );
}
