import { useState } from "react";

const teamMembers = [
  { id: 1, name: "Sumon Shuvo", designation: "Managing Director", contact: "+880 1303-441033", serviceArea: "Rajshahi Office", email: "sumon.siems@gmail.com", img: "https://i.ibb.co.com/Y4NRGs9D/sumon.jpg" },
  { id: 2, name: "MD Asif Islam", designation: "Frontend Engineer", contact: "+880 1718285436", serviceArea: "Rajshahi Office", email: "bisalasif@gmail.com", img: "https://i.ibb.co.com/dh3cGSX/asif.jpg" },
  { id: 3, name: "MD. Abu Raihan", designation: "System Engineer", contact: "+880 1952213662", serviceArea: "Rajshahi Office", email: "raihansiems@gmail.com", img: "https://i.ibb.co.com/DPzKpRm4/Raihan.png" },
  { id: 4, name: "MD Arif Hossen", designation: "System Engineer", contact: "+880 1824186352", serviceArea: "Rajshahi Office", email: "rakibsiems@gmail.com", img: "https://i.ibb.co.com/wNB098pk/arif.jpg" },
  { id: 5, name: "Muntasir Ahmed", designation: "System Engineer", contact: "+880 1815103126", serviceArea: "Rajshahi University School", email: "muntasir0939@gmail.com", img: "https://i.ibb.co.com/gZFMNWqT/muntashir-jpg.jpg" },
  { id: 6, name: "Md Alim Hossain", designation: "System Engineer", contact: "+880 1827066205", serviceArea: "Rajshahi Office", email: "alim444h@gmail.com", img: "https://i.ibb.co.com/bgXDCmM9/alim.jpg" },
  { id: 7, name: "Sheikh Foysal Shahrier Rabit", designation: "System Engineer", contact: " +880 1560061649", serviceArea: " Khulna", email: " siems.rabit@gmail.com", img: "https://i.ibb.co.com/9mGQXk14/Foysal-shahrier.jpg" },
];

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .02h3a2 2 0 012 1.72 12.05 12.05 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.7A2 2 0 0122 14.92v2z" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function TeamMembers() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-anim { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .photo-zoom { transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
        .card-wrap:hover .photo-zoom { transform: scale(1.1); }
        .img-card { transition: all 0.4s ease; }
        .card-wrap:hover .img-card {
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);
          transform: translateY(-5px);
        }
      `}</style>

      <div className="min-h-screen bg-white font-sans px-5 py-25">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <span className="inline-block bg-indigo-50 text-[#F29200] text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-2 border border-indigo-100">
            SIEMS NETWORK
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Meet Our Team
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Expert professionals dedicated to delivering seamless technology solutions and exceptional service.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((m, i) => (
            <div
              key={m.id}
              className="card-anim card-wrap group cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(m.id)}
              onMouseLeave={() => setHovered(null)}
            >

              {/* ── Image Card ── */}
              <div
                className="img-card rounded-3xl overflow-hidden relative aspect-[4/5]"
                style={{
                  background: "linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute w-20 h-20 rounded-full bg-indigo-500/5 -top-5 -left-5" />
                  <div className="absolute w-14 h-14 rounded-full bg-blue-500/5 bottom-10 -right-5" />

                  <img
                    src={m.img}
                    alt={m.name}
                    className="photo-zoom absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-sm border border-white/20">
                      {m.designation}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Text Content ── */}
              <div className="mt-5 px-1">
                <h3 className="text-slate-900 font-bold text-lg leading-tight mb-3 transition-colors group-hover:text-[#F29200]">
                  {m.name}
                </h3>

                <div className="space-y-2.5">
                  {/* Action: Phone Dialpad */}
                  <a 
                    href={`tel:${m.contact}`} 
                    className="flex items-center gap-3 text-slate-500 hover:text-[#F29200] transition-colors cursor-pointer group/item"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-indigo-50 group-hover/item:border-indigo-100">
                      <PhoneIcon />
                    </div>
                    <span className="text-xs font-medium">{m.contact}</span>
                  </a>
                  
                  {/* Action: Email Client */}
                  <a 
                    href={`mailto:${m.email}`} 
                    className="flex items-center gap-3 text-slate-500 hover:text-[#F29200] transition-colors cursor-pointer group/item"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-indigo-50 group-hover/item:border-indigo-100">
                      <MailIcon />
                    </div>
                    <span className="text-xs font-medium truncate">{m.email}</span>
                  </a>

                  {/* Location (Non-clickable unless you have a GMaps link) */}
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                      <MapIcon />
                    </div>
                    <span className="text-xs font-medium">{m.serviceArea}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}