import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { User, Cake, Shield, Cpu, Terminal, Globe, Volume2, VolumeX, Mail, type LucideIcon } from "lucide-react";
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

type Info = { k: string; v: string; I: LucideIcon; href?: string };
const EMAIL = "Ethicalaryan7@gmail.com";
const info: Info[] = [
  { k: "Full Name", v: "Aryan Pratap Singh", I: User },
  { k: "Age", v: "18 yr", I: Cake },
  { k: "Interest", v: "Ethical, Cyber Security", I: Shield },
  { k: "Hobby", v: "Techie", I: Cpu },
  { k: "Talent", v: "Hacking", I: Terminal },
  { k: "Skill", v: "Good Knowledge about Internet", I: Globe },
  { k: "Email", v: EMAIL, I: Mail, href: `mailto:${EMAIL}` },
];
const roles = ["Ethical Hacker", "Cyber Security", "Techie", "Internet Explorer"];

function useTyping() {
  const [t, setT] = useState("");
  useEffect(() => {
    let i = 0, c = 0, del = false;
    const id = setInterval(() => {
      const w = roles[i] ?? "";
      c += del ? -1 : 1;
      setT(w.slice(0, c));
      if (!del && c === w.length + 8) del = true;
      if (del && c <= 0) { del = false; i = (i + 1) % roles.length; }
    }, 90);
    return () => clearInterval(id);
  }, []);
  return t;
}

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

  const typed = useTyping();
  const [muted, setMuted] = useState(false);
  const toggle = () => { const v = vid.current; if (v) { v.muted = !v.muted; setMuted(v.muted); } };

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">
      <video ref={vid} src={bg.url} autoPlay loop muted playsInline className="fixed inset-0 h-full w-full object-cover" />
      <div className="fixed inset-0 bg-background/65" />
      <div className="pointer-events-none fixed inset-0 grid-lines" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 scanline" />

      {!entered && (
        <button onClick={enter} className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-background">
          <div className="pointer-events-none absolute inset-0 grid-lines" />
          <div className="relative h-44 w-44">
            <div className="absolute -inset-1 rounded-full ring-spin" />
            <img src={logo.url} alt="Ethical Aryan logo" className="relative h-full w-full rounded-full" />
          </div>
          <p className="font-display text-sm tracking-[0.4em] text-muted-foreground">SYSTEM READY</p>
          <span className="rounded-full rgb-border px-10 py-3 font-display text-lg tracking-widest text-primary rgb-glow">
            ENTER
          </span>
        </button>
      )}

      {entered && (
        <button onClick={toggle} aria-label="Toggle sound" className="fixed right-4 top-4 z-30 rounded-full rgb-border bg-card p-3 text-primary backdrop-blur-md rgb-glow">
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}

      <section className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center px-5 py-16 text-center">
        <div className="rise">
          <div className="relative h-36 w-36">
            <div className="absolute -inset-1 rounded-full ring-spin" />
            <img src={logo.url} alt="Ethical Aryan logo" className="relative h-full w-full rounded-full" />
          </div>
        </div>
        <div className="mt-6 rise">
          <h1 className="font-display text-4xl font-extrabold rgb-text">Ethical Aryan</h1>
        </div>
        <p className="mt-3 h-7 font-display text-base text-primary">
          &gt; {typed}<span className="caret">_</span>
        </p>
        <p className="mt-2 text-lg text-muted-foreground">नमस्त, आपका स्वागत है</p>

        <div className="mt-8 w-full rise">
          <div className="w-full rounded-2xl rgb-border bg-card p-5 text-left backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-chart-4" />
            <span className="h-3 w-3 rounded-full bg-chart-2" />
            <span className="ml-2 font-display text-xs tracking-widest text-muted-foreground">about_me.sh</span>
          </div>
          <ul className="space-y-3">
            {info.map(({ k, v, I, href }, i) => (
              <li key={k} style={{ animationDelay: `${0.2 + i * 0.1}s` }} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3 rise">
                <span className="rounded-lg rgb-border p-2 text-primary"><I size={20} /></span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
                  {href ? (
                    <a href={href} className="break-all text-lg font-semibold text-primary hover:underline">{v}</a>
                  ) : (
                    <p className="text-lg font-semibold text-foreground">{v}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
        <p className="mt-8 font-display text-xs tracking-[0.3em] text-muted-foreground">© ETHICAL ARYAN</p>
      </section>
    </main>
  );
}
