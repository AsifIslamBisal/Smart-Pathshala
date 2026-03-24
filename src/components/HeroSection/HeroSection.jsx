import { useState, useEffect, useRef } from "react";
import video1 from '../../assets/herovideos/video1.mp4'

const slides = [
  {
    tag: "Digital Transformation",
    title: "The Future of Education Management",
    desc: "Experience a powerful all-in-one system designed to streamline administration, automate attendance, and connect your entire campus seamlessly.",
    video: video1,
  },
  {
    tag: "Effortless Automation",
    title: "Smart Result & Fee Management",
    desc: "Save hours of manual work with one-click marksheets and automated fee collection via mobile payments. Accurate, fast, and reliable.",
    video: video1,
  },
  {
    tag: "Next-Gen Connectivity",
    title: "Bridging the Gap Between Home & School",
    desc: "Real-time SMS alerts and a dedicated portal keep parents updated on student performance, attendance, and important school announcements.",
    video: video1,
  },
];

const DURATION = 8000;

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const videoRefs = useRef([]);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    clearTimeout(timerRef.current);
    setTextVisible(false);

    const oldVid = videoRefs.current[current];
    if (oldVid) oldVid.pause();

    setTimeout(() => {
      setCurrent(idx);
      setTextVisible(true);

      const vid = videoRefs.current[idx];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }

      timerRef.current = setTimeout(
        () => goTo((idx + 1) % slides.length),
        DURATION
      );
    }, 350);
  };

  useEffect(() => {
    const vid = videoRefs.current[0];
    if (vid) vid.play().catch(() => {});
    timerRef.current = setTimeout(() => goTo(1), DURATION);

    return () => clearTimeout(timerRef.current);
  }, []);

  const handleVideoEnd = (idx) => {
    if (idx === current) {
      goTo((idx + 1) % slides.length);
    }
  };

  const slide = slides[current];

  return (
    <section className="font-outfit relative w-full h-screen min-h-[520px] max-h-[780px] overflow-hidden bg-black">
      {/* ── Videos ── */}
      {slides.map((s, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          src={s.video}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnd(i)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* ── Overlay ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.78) 22%, rgba(255,255,255,0.38) 48%, transparent 68%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="absolute inset-0 z-20 flex items-center px-10 md:px-16 lg:px-24">
        <div className="max-w-md">
          <span className={`inline-block text-[11px] font-semibold tracking-[3px] uppercase text-amber-700 mb-3 transition-all duration-500 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            {slide.tag}
          </span>

          <h1 className={`font-playfair text-4xl md:text-5xl font-black leading-[1.1] text-gray-900 mb-4 transition-all duration-500 delay-75 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {slide.title}
          </h1>

          <p className={`text-sm md:text-base font-light text-gray-600 leading-relaxed mb-8 max-w-sm transition-all duration-500 delay-150 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            {slide.desc}
          </p>

          {/* Button Fixed Here */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.smartpathshala.teacher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-[#F29200] active:scale-95 transition-all duration-200 no-underline"
          >
            <DownloadIcon />
            Download Now
          </a>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute bottom-6 left-10 md:left-16 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[3px] rounded-full transition-all duration-300 border-0 cursor-pointer ${
              i === current ? "w-10 bg-amber-700" : "w-6 bg-black/25 hover:bg-black/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}