import { useState, useEffect, useRef } from "react";
import logo from '../assets/logo.png'

/* ── tiny in-view hook ── */
const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.05 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
};

/* ── reusable pieces ── */
const ColHead = ({ children }) => (
  <h5 style={{ color: "#F29200" }}
    className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-6 flex items-center gap-2">
    <span className="inline-block w-4 h-px" style={{ background: "#F29200" }} />
    {children}
  </h5>
);

const StaticLink = ({ children }) => (
  <li className="flex items-center gap-2 text-neutral-500 text-[13.5px] cursor-default">
    <span className="block w-3.5 h-px opacity-50" style={{ background: "#F29200" }} />
    {children}
  </li>
);

const NavLink = ({ children, href = "#" }) => (
  <li>
    <a href={href}
      className="group flex items-center gap-2 text-neutral-500 hover:text-black text-[13.5px] transition-colors duration-200">
      <span className="block w-0 group-hover:w-3.5 h-px transition-all duration-300"
        style={{ background: "#F29200" }} />
      {children}
    </a>
  </li>
);

const Social = ({ label, href = "#", children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
    className="w-9 h-9 rounded-lg border border-[#F29200]/20 hover:border-[#F29200] flex items-center justify-center text-[#F29200] bg-[#F29200]/5 hover:bg-[#F29200] hover:text-white transition-all duration-300 hover:-translate-y-1">
    {children}
  </a>
);

/* ─── MAIN FOOTER ─── */
export default function Footer() {
  const [rootRef, visible] = useInView();

  const fadeBase = "transition-all duration-700 ease-out";
  const hide = "opacity-0 translate-y-5";
  const show = "opacity-100 translate-y-0";

  return (
    <footer ref={rootRef} className="sp-root bg-white text-black relative overflow-hidden">
      <div className="h-[3px] w-full" style={{ background: "#F29200" }} />

      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F2920018 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-8xl mx-auto px-6 xl:px-10 pt-16 pb-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 mb-14 ${fadeBase} ${visible ? show : hide}`}>

          {/* ── BRAND & CONTACT ── */}
          <div className="lg:col-span-4">
            <div className="flex items-start gap-3.5 mb-6">
              <img src={logo} alt="Logo" className="w-10 h-auto" />
              <div>
                <p className="sp-syne text-[22px] font-bold text-black leading-tight tracking-tight">Smart Pathshala</p>
              </div>
            </div>

            <p className="text-neutral-500 text-[13.5px] leading-relaxed mb-7 max-w-[300px]">
              Empowering educational institutions with intelligent management solutions — from administration to analytics, all in one platform.
            </p>

            <div className="space-y-3">
              <a href="tel:+8801700000000" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg border border-neutral-200 group-hover:border-[#F29200] flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="#F29200" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-neutral-500 text-sm group-hover:text-black transition-colors">+880 1824186352</span>
              </a>

              <a href="mailto:info@smartpathshala.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg border border-neutral-200 group-hover:border-[#F29200] flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="#F29200" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-neutral-500 text-sm group-hover:text-black transition-colors">info@smartpathshala.com</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-neutral-200 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="#F29200" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-neutral-500 text-sm whitespace-pre-wrap">Block-D, Level-6, Hi-Tech Park, Rajshahi</span>
              </div>
            </div>
          </div>

          {/* ── LINK COLS ── */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <ColHead>Services</ColHead>
              <ul className="space-y-3">
                <StaticLink>Quick Registration</StaticLink>
                <StaticLink>Free Onboard</StaticLink>
                <StaticLink>Website</StaticLink>
                <StaticLink>Routine Management</StaticLink>
                <StaticLink>SMS Notice</StaticLink>
                <li className="pt-3">
                  <a href="/services" className="text-[#F29200] font-bold text-[13px] hover:underline flex items-center gap-1.5 group">
                    See More Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ColHead>Company</ColHead>
              <ul className="space-y-3">
                <NavLink href="/about">About Us</NavLink>
                <NavLink href="/team">Our Team</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
              </ul>
            </div>

            <div>
              <ColHead>Support</ColHead>
              <ul className="space-y-3 mb-8">
                <NavLink href="/contact">Help Center</NavLink>
                <NavLink href="/documentation">Documentation</NavLink>
                <NavLink href="/">System Status</NavLink>
              </ul>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-neutral-100 bg-neutral-50">
                  <span className="text-neutral-500 text-[11px] uppercase tracking-wider">Institutions</span>
                  <span className="sp-syne font-bold text-sm text-[#F29200]">100+</span>
                </div>
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-neutral-100 bg-neutral-50">
                  <span className="text-neutral-500 text-[11px] uppercase tracking-wider">Students</span>
                  <span className="sp-syne font-bold text-sm text-[#F29200]">50000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-neutral-100 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-400 text-xs">© {new Date().getFullYear()} <span className="text-black font-medium">Smart Pathshala</span> — All rights reserved.</p>

          <div className="flex items-center gap-3">
            <Social label="Facebook" href="https://www.facebook.com/share/1BLNeNQgJ9/">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </Social>
            <Social label="LinkedIn" href="https://www.linkedin.com/company/smart-pathshala/posts/?feedView=all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </Social>
            <Social label="Instagram" href="https://www.instagram.com/smartpathshala0">
              <svg
              className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" /></svg>
            </Social>
            <Social label="YouTube" href="https://youtube.com/@smartpathshalabd?si=_RY57oNAMw5ZCsiY">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Social>
          </div>

          <div className="flex items-center text-[11px] mr-14">
            <NavLink href="/privacy-policy">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}