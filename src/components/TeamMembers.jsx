import { useState } from "react";
import { Phone, Mail, MapPin } from 'lucide-react';
import sumon from "../assets/team/SUMON.jpeg";
import asif from "../assets/team/ASIF.jpeg";
import noyon from "../assets/team/NOYON.jpeg";
import masum from "../assets/team/MASUM.jpeg";
import raihan from "../assets/team/RAIHAN.jpeg";
import alim from "../assets/team/ALIM.jpeg";
import ariful from "../assets/team/ARIFUL.jpeg";
import foysal from "../assets/team/FOYSAL.jpeg";
import muntasir from "../assets/team/MUNTASIR.jpeg";
import rakibul from "../assets/team/RAKIBUL.jpeg";
import shahin from "../assets/team/SHAHIN.jpeg";
import shwrov from "../assets/team/SHWROV.jpeg";
import jakir from "../assets/team/JAKIR.jpeg";

const teamMembers = [
  
  { id: 1, name: "MD MASUM PK", designation: "System Engineer", contact: "+880 1328133568", serviceArea: "Dhaka", email: "mridul.smartpathshala@gmail.com", img: masum },
  { id: 2, name: "MD. ABU RAIHAN", designation: "System Engineer", contact: "+880 1952213662", serviceArea: "Rajshahi Office", email: "raihansiems@gmail.com", img: raihan },
  { id: 3, name: "MD ALIM HOSSAIN", designation: "System Engineer", contact: "+880 1827066205", serviceArea: "Rajshahi Office", email: "alim444h@gmail.com", img: alim },
  { id: 4, name: "MD ARIFUL ISLAM", designation: "Sales and Support Engineer", contact: "+880 1701012143", serviceArea: "Masjid Mission Academy", email: "arif.hh422@gmail.com", img: ariful },
  { id: 5, name: "SHEIKH FOYSAL SHAHRIER RABIT", designation: "System Engineer", contact: " +880 1560061649", serviceArea: "Khulna", email: " siems.rabit@gmail.com", img: foysal },
  { id: 6, name: "MUNTASIR AHMED", designation: "System Engineer", contact: "+880 1815103126", serviceArea: "Rajshahi University School", email: "muntasir0939@gmail.com", img: muntasir },
  { id: 7, name: "MD RAKIBUL ISLAM", designation: "System Engineer", contact: "+880 1824186352", serviceArea: "Rajshahi Office", email: "rakibsiems@gmail.com", img: rakibul },
  { id: 8, name: "SHAHIN", designation: "System Engineer", contact: "+880 1701013225", serviceArea: "Sirajganj", email: "shahin.smartpathshala@gmail.com", img: shahin },
  { id: 9, name: "SHWROV CHOWDHURY", designation: "Sales and Support Engineer", contact: " +880 1827185408", serviceArea: "Rajshahi Office ", email: " svchowdhury05@gmail.com", img: shwrov },
  { id: 10, name: "MD JAKIR HASAN", designation: "Sales and Support Engineer", contact: " +880 130797073", serviceArea: "Rajshahi Office ", email: " md.rakibhasan256@gmail.com", img: jakir },
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

  {/* Google Fonts Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Bengali:wght@100..900&family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Racing+Sans+One&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tiro+Bangla:ital@0;1&display=swap');`}
      </style>

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

      <div style={{ fontFamily: '"Noto Sans Bengali", sans-serif' }} className="min-h-screen bg-white font-sans px-5 py-25">

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

       <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/30">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      
      {/* Left Side: Profile Card */}
      <div className="w-full lg:w-[38%] lg:sticky lg:top-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:scale-[1.01] duration-300">
          
          {/* Image Section  */}
          <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[600px] bg-white overflow-hidden">
            <img 
              src={sumon} 
              alt="Sumon Shuvo, Managing Director" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          
          <div className="px-6 py-4 md:py-4">
            {/* Name and Designation */}
            <div className="text-left mb-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">SUMON SHUVO</h3>
              <p className="text-[#F29200] font-semibold text-lg mt-1">Managing Director</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 border-t border-gray-100 pt-4 text-gray-700">
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#F29200] shrink-0">
                  <Phone size={20} />
                </div>
                <a href="tel:+8801303441033" className="hover:text-[#F29200] transition-colors">
                  <span className="text-base font-medium">+880 1303-441033</span>
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#F29200] shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-base font-medium">Rajshahi Office</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#F29200] shrink-0">
                  <Mail size={20} />
                </div>
                <a href="mailto:sumon.siems@gmail.com" className="hover:text-[#F29200] transition-colors break-all">
                  <span className="text-base font-medium">sumon.siems@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Company Footer */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">
                SIEMS - Smart Pathshala
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Message Content */}
      <div className="w-full lg:w-[62%] bg-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
            ব্যবস্থাপনা পরিচালকের <span className="text-[#F29200]">বার্তা</span>
          </h2>
          <p className="text-md md:text-lg text-gray-400 ">Message from the Managing Director</p>
          <div className="h-1.5 w-20 md:w-24 bg-[#F29200] mt-4 rounded-full"></div>
        </div>

        <div className="text-gray-700 space-y-4 leading-relaxed">
          <div className="font-medium text-lg md:text-xl text-gray-800  border-l-4 border-[#F29200] pl-4 bg-orange-50/50 py-4 rounded-r-lg">
            "Smart Pathshala আমার কাছে শুধু একটি সফটওয়্যার নয়—এটি একটি স্বপ্ন, একটি দায়িত্ব এবং একটি পরিবর্তনের সূচনা।"
          </div>

          <p className="text-base md:text-lg">
            Smart Pathshala-এর যাত্রা আমার কাছে শুধুমাত্র একটি সফটওয়্যার তৈরির গল্প নয়—এটি একটি স্বপ্নের বাস্তব রূপ, একটি দায়িত্ববোধের প্রতিফলন এবং একটি পরিবর্তনের অঙ্গীকার।
          </p>

          <p className="text-base md:text-lg">
            আমি সবসময় বিশ্বাস করি, একটি দেশের প্রকৃত উন্নয়ন নির্ভর করে তার শিক্ষা ব্যবস্থার উপর। কিন্তু বাস্তবতা হলো, আমাদের দেশের অনেক শিক্ষা প্রতিষ্ঠান এখনো পুরনো এবং জটিল ম্যানুয়াল পদ্ধতির ওপর নির্ভরশীল।
          </p>

          <div className="bg-gray-50 p-5 md:p-6 rounded-xl border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#F29200] rounded-full inline-block"></span>
              আমাদের লক্ষ্য খুবই পরিষ্কার:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 shrink-0">✔</span>
                <span>প্রতিষ্ঠানগুলোকে একটি <span className="font-semibold">Smart Campus</span>-এ রূপান্তর করা</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 shrink-0">✔</span>
                <span>প্রশাসনিক কাজগুলোকে সহজ ও স্বয়ংক্রিয় করা</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 shrink-0">✔</span>
                <span>সবার মধ্যে একটি শক্তিশালী যোগাযোগ ব্যবস্থা তৈরি করা</span>
              </li>
            </ul>
          </div>

          <p className="pt-4 text-gray-800 font-medium text-base md:text-lg">
            আমি সকল শিক্ষা প্রতিষ্ঠানকে আমন্ত্রণ জানাই—আমাদের সাথে যুক্ত হয়ে একটি স্মার্ট ও আধুনিক শিক্ষা ব্যবস্থা গড়ে তুলুন।
          </p>
        </div>

        <div className="mt-10 md:mt-12 pt-8 border-t border-gray-100">
          <div>
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-none">Sumon Shuvo</p>
            <p className="text-[#F29200] font-medium mt-2">Managing Director</p>
            <p className="text-gray-500 text-sm mt-1">SIEMS (Smart Institute Education Management Services)</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ── Core Engineering Leaders - Compact Full Image ── */}
        <div className="max-w-6xl mx-auto mt-10 mb-16 px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">
              Core <span className="text-[#F29200]">Engineering</span> Team
            </h2>
            <div className="h-1 w-16 bg-[#F29200] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8 items-center">
            {[
              { 
                name: "MD ASIF ISLAM", 
                designation: "Frontend Engineer", 
                contact: "+880 1732006068", 
                serviceArea: "Rajshahi Office", 
                email: "bisalasif@gmail.com", 
                img: asif
              },
              { 
                name: "ABDULLAH AL MAHMUD", 
                designation: "Backend Engineer", 
                contact: "+880 1732006068", 
                serviceArea: "Rajshahi Office", 
                email: "info@smartpathshalabd.com", 
                img: noyon
              },
              
            ].map((eng, idx) => (
              <div 
                key={idx} 
                className="relative group w-full md:w-[450px] h-[550px] md:h-[550px] overflow-hidden rounded-[2rem] shadow-xl border-[3px] border-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Full Image */}
                <img 
                  src={eng.img} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  alt={eng.name}
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Info Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  
                  {/* Badge */}
                  <div className="mb-2">
                    <span className="inline-block bg-[#F29200] text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest shadow-lg">
                      {eng.designation}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4 drop-shadow-md uppercase">
                    {eng.name}
                  </h3>
                  
                  {/* Hover Details */}
                  <div className="h-0 group-hover:h-28 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-white/90 text-[13px]">
                        <MailIcon />
                        <span className="truncate">{eng.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-[13px]">
                        <MapIcon />
                        <span>{eng.serviceArea}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`tel:${eng.contact}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-slate-900 rounded-xl text-xs font-extrabold hover:bg-[#F29200] hover:text-white transition-all shadow-lg uppercase"
                    >
                      <PhoneIcon />
                      Contact Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-12">
          {teamMembers.map((m, i) => (
            <div
              key={m.id}
              className="card-anim card-wrap group cursor-default w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
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
                  <a 
                    href={`tel:${m.contact}`} 
                    className="flex items-center gap-3 text-slate-500 hover:text-[#F29200] transition-colors cursor-pointer group/item"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-indigo-50 group-hover/item:border-indigo-100">
                      <PhoneIcon />
                    </div>
                    <span className="text-xs font-medium">{m.contact}</span>
                  </a>
                  
                  <a 
                    href={`mailto:${m.email}`} 
                    className="flex items-center gap-3 text-slate-500 hover:text-[#F29200] transition-colors cursor-pointer group/item"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover/item:bg-indigo-50 group-hover/item:border-indigo-100">
                      <MailIcon />
                    </div>
                    <span className="text-xs font-medium truncate">{m.email}</span>
                  </a>

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