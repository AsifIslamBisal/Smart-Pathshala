import React from 'react';
import { 
  Target, Eye, CheckCircle2, Users, 
  BarChart3, Wallet, GraduationCap, 
  ClipboardCheck, CalendarDays, MessageSquare, BookOpen 
} from 'lucide-react';

import logo from '.././assets/logo.png'
import { Link } from 'react-router-dom';
import Documentation from './Documentation';
import { motion } from 'framer-motion';
import FAQ from './FAQ';

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


  const smoothFadeInUp = {
    hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 
      }
    }
  };

  return (
    <div 
      style={{ fontFamily: '"Noto Sans Bengali", sans-serif' }} 
      className="bg-white text-slate-900 py-20 lg:py-32 overflow-hidden"
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@100..900&display=swap');`}
      </style>

      {/* Hero Section & Logo Animation */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <motion.div 
            className="inline-flex items-center justify-center p-4 rounded-3xl mb-8 w-50 h-50"
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.8 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <img src={logo} alt="Smart Pathshala Logo" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-[#F29200]">স্মার্ট পাঠশালা</span> সম্পর্কে জানুন
          </motion.h1>

          <motion.p 
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            স্মার্ট পাঠশালা হলো একটি আধুনিক শিক্ষা ব্যবস্থাপনা সফটওয়্যার যা তৈরি করেছে  
            <span className="font-bold text-[#F29200]"> স্মার্ট ইনস্টিটিউট এডুকেশন ম্যানেজমেন্ট সার্ভিসেস (SIEMS)</span>। 
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision - Slow Slide-in */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="p-10 bg-[#F29200] rounded-[3rem] text-white shadow-2xl shadow-blue-600/20"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Target size={48} className="mb-6 text-black" />
            <h2 className="text-3xl font-bold mb-4">আমাদের লক্ষ্য (Mission)</h2>
            <p className="text-blue-50 leading-relaxed text-lg">
              আমাদের মূল লক্ষ্য হলো শিক্ষা ব্যবস্থাকে সহজ, দ্রুত এবং অত্যন্ত কার্যকর করে তোলা।
            </p>
          </motion.div>

          <motion.div 
            className="p-10 bg-black rounded-[3rem] text-white shadow-2xl shadow-slate-900/20"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Eye size={48} className="mb-6 text-[#F29200]" />
            <h2 className="text-3xl font-bold mb-4">আমাদের স্বপ্ন (Vision)</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              আমরা এমন এক ভবিষ্যতের স্বপ্ন দেখি যেখানে প্রতিটি প্রতিষ্ঠান হবে প্রযুক্তি-নির্ভর।
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do  */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">আমরা কী করি</h2>
            <div className="h-1.5 w-24 bg-[#F29200] mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-[#F29200] hover:shadow-2xl transition-shadow duration-500 group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <div className="text-[#F29200] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*  Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl font-bold mb-8">কেন স্মার্ট পাঠশালা বেছে নেবেন?</h2>
            <ul className="space-y-6">
              {[
                "ব্যবহারকারী বান্ধব এবং সহজ ইন্টারফেস।",
                "যেকোনো প্রতিষ্ঠানের জন্য উপযোগী।",
                "সাশ্রয়ী মূল্যে সর্বোচ্চ ফিচার।",
                "সার্বক্ষণিক ডেডিকেটেড টেকনিক্যাল সাপোর্ট টিম।",
                "নিয়মিত আপডেট এবং নতুন ফিচারের নিশ্চয়তা।"
              ].map((text, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-slate-700 font-medium">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-12 rounded-[4rem] border border-[#F29200]"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#F29200]">আমাদের অগ্রগতি</h3>
            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#F29200]">৫০k+</div>
                <div className="text-sm text-slate-500">সক্রিয় শিক্ষার্থী</div>
              </div>
              <div className="h-12 w-px bg-blue-200"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#F29200]">সকাল ৯টা - সন্ধ্যা ৬টা</div>
                <div className="text-sm text-slate-500">এক্সপার্ট সাপোর্ট</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6">
        <motion.div 
          className="max-w-7xl mx-auto bg-[#F29200] rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">চলুন একসাথে ভবিষ্যৎ গড়ি</h2>
            <Link to="/contact">
              <motion.button 
                className="bg-white text-[#F29200] px-10 py-4 rounded-full font-bold text-lg shadow-xl"
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Documentation/>
      <FAQ/>
    </div>
  );
};

export default AboutPage;