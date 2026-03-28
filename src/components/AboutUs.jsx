import React from 'react';
import { 
  Target, Eye, Cpu, CheckCircle2, Users, 
  BarChart3, Wallet, GraduationCap, Presentation, 
  ClipboardCheck, CalendarDays, MessageSquare, BookOpen 
} from 'lucide-react';

import logo from '.././assets/logo.png'
import { Link } from 'react-router-dom';
import Documentation from './Documentation';

const AboutPage = () => {
  const services = [
    { icon: <BarChart3 size={32} />, title: "রিয়েল-টাইম ড্যাশবোর্ড", desc: "অ্যাডমিনিস্ট্রেটরদের জন্য প্রতিষ্ঠানের সকল কার্যক্রমের একটি পূর্ণাঙ্গ চিত্র।" },
    { icon: <Wallet size={32} />, title: "বিলিং ও ফিন্যান্স", desc: "স্বয়ংক্রিয় ফি সংগ্রহ, খরচ ট্র্যাকিং এবং স্বচ্ছ আর্থিক প্রতিবেদন।" },
    { icon: <Users size={32} />, title: "শিক্ষার্থী ও অভিভাবক প্রোফাইল", desc: "একাডেমিক অগ্রগতি, উপস্থিতি এবং সরাসরি যোগাযোগের জন্য ডেডিকেটেড পোর্টাল।" },
    { icon: <GraduationCap size={32} />, title: "শিক্ষক ব্যবস্থাপনা", desc: "শিক্ষক ও কর্মীদের বেতন, শিডিউল এবং পারফরম্যান্স ট্র্যাকিং।" },
    { icon: <ClipboardCheck size={32} />, title: "পরীক্ষা ও ফলাফল অটোমেশন", desc: "তাৎক্ষণিক রিপোর্ট কার্ড তৈরি এবং ডিজিটাল পদ্ধতিতে মূল্যায়ন রেকর্ড সংরক্ষণ।" },
    { icon: <CalendarDays size={32} />, title: "একাডেমিক পরিকল্পনা", desc: "ডিজিটাল ক্লাস রুটিন এবং দীর্ঘমেয়াদী একাডেমিক ক্যালেন্ডার পরিচালনা।" },
    { icon: <MessageSquare size={32} />, title: "এসএমএস কমিউনিকেশন", desc: "উপস্থিতি, জরুরি অবস্থা এবং সাধারণ নোটিশের জন্য তাৎক্ষণিক অ্যালার্ট।" },
    { icon: <BookOpen size={32} />, title: "হোমওয়ার্ক ম্যানেজমেন্ট", desc: "অ্যাপের মাধ্যমেই ডিজিটাল অ্যাসাইনমেন্ট জমা এবং শিক্ষকদের ফিডব্যাক সিস্টেম।" },
  ];

  return (
    <div 
      style={{ fontFamily: '"Noto Sans Bengali", sans-serif' }} 
      className="bg-white text-slate-900 py-20 lg:py-32"
    >
      {/* Google Fonts Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Bengali:wght@100..900&family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Racing+Sans+One&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tiro+Bangla:ital@0;1&display=swap');`}
      </style>

      {/* 1. Hero Section with Company Icon */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 rounded-3xl mb-8 w-50 h-50">
            <img src={logo} alt="Smart Pathshala Logo" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-[#F29200]">স্মার্ট পাঠশালা</span> সম্পর্কে জানুন
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            স্মার্ট পাঠশালা হলো একটি আধুনিক শিক্ষা ব্যবস্থাপনা সফটওয়্যার যা তৈরি করেছে  
            <span className="font-bold text-[#F29200]"> স্মার্ট ইনস্টিটিউট এডুকেশন ম্যানেজমেন্ট সার্ভিসেস (SIEMS)</span>। 
            আমরা গতানুগতিক শিক্ষা প্রতিষ্ঠানগুলোকে সম্পূর্ণ ডিজিটাল এবং স্মার্ট ক্যাম্পাসে রূপান্তর করতে বদ্ধপরিকর।
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* 2. Mission & Vision - Large Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 bg-[#F29200] rounded-[3rem] text-white shadow-2xl shadow-blue-600/20 transform hover:-translate-y-2 transition-transform">
            <Target size={48} className="mb-6 text-black" />
            <h2 className="text-3xl font-bold mb-4">আমাদের লক্ষ্য (Mission)</h2>
            <p className="text-blue-50 leading-relaxed text-lg">
              আমাদের মূল লক্ষ্য হলো শিক্ষা ব্যবস্থাকে সহজ, দ্রুত এবং অত্যন্ত কার্যকর করে তোলা। স্কুল, শিক্ষক, শিক্ষার্থী এবং অভিভাবকদের একটি প্ল্যাটফর্মে যুক্ত করার মাধ্যমে আমরা একটি শক্তিশালী যোগাযোগ ব্যবস্থা গড়ে তুলছি।
            </p>
          </div>
          <div className="p-10 bg-black rounded-[3rem] text-white shadow-2xl shadow-slate-900/20 transform hover:-translate-y-2 transition-transform">
            <Eye size={48} className="mb-6 text-[#F29200]" />
            <h2 className="text-3xl font-bold mb-4">আমাদের স্বপ্ন (Vision)</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              আমরা এমন এক ভবিষ্যতের স্বপ্ন দেখি যেখানে প্রতিটি প্রতিষ্ঠান হবে প্রযুক্তি-নির্ভর এবং আন্তর্জাতিক মানের। আধুনিক টুলস ব্যবহারের মাধ্যমে শিক্ষার্থীদের বাস্তবমুখী দক্ষতায় দক্ষ করে তোলাই আমাদের উদ্দেশ্য।
            </p>
          </div>
        </div>
      </section>

      {/* 3. What We Do - Expanded Service Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">আমরা কী করি</h2>
            <div className="h-1.5 w-24 bg-[#F29200] mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              স্মার্ট পাঠশালা হলো একটি পূর্ণাঙ্গ সমাধান যা একটি শিক্ষা প্রতিষ্ঠানের প্রায় প্রতিটি কাজকে ডিজিটাল করে তোলে।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#F29200] hover:border-amber-200 hover:shadow-lg transition-all group">
                <div className="text-[#F29200] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us & Progress */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">কেন স্মার্ট পাঠশালা বেছে নেবেন?</h2>
            <ul className="space-y-6">
              {[
                "ব্যবহারকারী বান্ধব এবং সহজ ইন্টারফেস।",
                "যেকোনো প্রতিষ্ঠানের (স্কুল, কলেজ, মাদ্রাসা) জন্য উপযোগী।",
                "সাশ্রয়ী মূল্যে সর্বোচ্চ ফিচার।",
                "সার্বক্ষণিক ডেডিকেটেড টেকনিক্যাল সাপোর্ট টিম।",
                "নিয়মিত আপডেট এবং নতুন ফিচারের নিশ্চয়তা।"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-slate-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 rounded-[4rem] border border-[#F29200]">
            <h3 className="text-2xl font-bold mb-4 text-[#F29200]">আমাদের অগ্রগতি</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              ইতিমধ্যেই হাজার হাজার শিক্ষার্থী স্মার্ট পাঠশালার সাথে যুক্ত হয়েছে এবং এই সংখ্যা প্রতিদিন বাড়ছে। আমরা দেশের অন্যতম বিশ্বস্ত এডটেক প্ল্যাটফর্ম হিসেবে নিজেদের প্রতিষ্ঠিত করছি।
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-[#F29200]">৫০k+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">সক্রিয় শিক্ষার্থী</div>
              </div>
              <div className="h-12 w-px bg-blue-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#F29200]">সকাল ৯টা - সন্ধ্যা ৬টা</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">এক্সপার্ট সাপোর্ট</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#F29200] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">চলুন একসাথে ভবিষ্যৎ গড়ি</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              একটি স্মার্ট, আধুনিক এবং কানেক্টেড শিক্ষা ব্যবস্থা তৈরিতে আমরা সকল স্কুল, কলেজ এবং শিক্ষা প্রতিষ্ঠানকে আমন্ত্রণ জানাচ্ছি।
            </p>
            <Link to="/contact">
              <button className="bg-white text-[#F29200] px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-xl">
                Contact us
              </button>
            </Link>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
      <Documentation/>
    </div>
  );
};

export default AboutPage;