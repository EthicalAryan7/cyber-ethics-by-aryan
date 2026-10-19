import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import bg from "@/assets/bg.mp4.asset.json";
import logo from "@/assets/logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ethical Aryan — Aryan Pratap Singh" },
      { name: "description", content: "Bio of Aryan Pratap Singh, 18 year old ethical hacker and cyber security enthusiast." },
      { property: "og:title", content: "Ethical Aryan — Aryan Pratap Singh" },
      { property: "og:description", content: "Ethical hacking, cyber security and tech." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const info = [
  ["Full Name", "Aryan Pratap Singh"],
  ["Age", "18 yr"],
  ["Interest", "Ethical, Cyber Security"],
  ["Hobby", "Techie"],
  ["Talent", "Hacking"],
  ["Skill", "Good Knowledge about Internet"],
];

function Index() {
  const vid = useRef<HTMLVideoElement>(null);
  const [entered, setEntered] = useState(false);

  const enter = () => {
    setEntered(true);
    const v = vid.current;
    if (v) { v.muted = false; v.volume = 1; v.play().catch(() => {}); }
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance("नमस्ते, आपका स्वागत है");
      u.lang = "hi-IN";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">
      <video ref={vid} src={bg.url} autoPlay loop muted playsInline className="fixed inset-0 h-full w-full object-cover" />
      <div className="fixed inset-0 bg-background/60" />

      {!entered && (
        <button onClick={enter} className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-6 bg-background/90">
          <img src={logo.url} alt="Ethical Aryan logo" className="h-40 w-40 rounded-full rgb-glow" />
          <span className="rounded-full border-2 border-primary px-8 py-3 font-display text-lg tracking-widest text-primary rgb-glow">
            ENTER
          </span>
        </button>
      )}

      <section className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-12 text-center">
        <img src={logo.url} alt="Ethical Aryan logo" className="h-32 w-32 rounded-full border-2 border-primary rgb-glow" />
        <h1 className="mt-6 font-display text-4xl font-extrabold rgb-text">Ethical Aryan</h1>
        <p className="mt-2 text-lg text-muted-foreground">नमस्ते, आपका स्वागत है</p>

        <div className="mt-8 w-full rounded-2xl border-2 border-primary bg-card p-6 text-left backdrop-blur-md rgb-glow">
          <h2 className="mb-4 font-display text-xl text-primary">About</h2>
          <ul className="space-y-3">
            {info.map(([k, v]) => (
              <li key={k} className="flex justify-between gap-4 border-b border-border pb-2 text-lg">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-right font-semibold text-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
