import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpenIndex(['col1-0']);
      } else {
        setOpenIndex(['col1-0', 'col2-2']);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqsColumn1 = [
    { question: "Smart Pathshala কী?", answer: "Smart Pathshala একটি সম্পূর্ণ স্কুল ম্যানেজমেন্ট সফটওয়্যার, যার মাধ্যমে স্কুলের সকল একাডেমিক ও প্রশাসনিক কাজ ডিজিটালি পরিচালনা করা যায়।" },
    { question: "এই সফটওয়্যারটি কারা ব্যবহার করতে পারবে?", answer: "এই সফটওয়্যারটি স্কুল কর্তৃপক্ষ, শিক্ষক, শিক্ষার্থী এবং অভিভাবক—সকলের জন্য তৈরি করা হয়েছে।" },
    { question: " Smart Pathshala ব্যবহার করে কী কী কাজ করা যায়?", answer: "এর মাধ্যমে উপস্থিতি নেওয়া, ফলাফল প্রকাশ, ফি কালেকশন, ক্লাস রুটিন, হোমওয়ার্ক, নোটিশ প্রদানসহ প্রায় সব ধরনের স্কুল ম্যানেজমেন্ট কাজ করা যায়।" },
    { question: "অভিভাবকরা কীভাবে উপকৃত হবেন?", answer: "অভিভাবকরা মোবাইল অ্যাপের মাধ্যমে সন্তানের উপস্থিতি, ফলাফল, হোমওয়ার্ক এবং ফি পেমেন্ট খুব সহজে দেখতে ও করতে পারবেন। " },
    { question: "সফটওয়্যারটি সেটআপ করতে কি অতিরিক্ত খরচ আছে?", answer: "না, Smart Pathshala সেটআপ এবং প্রাথমিক ডাটা এন্ট্রি সম্পূর্ণ ফ্রি প্রদান করা হয়। " },
    { question: "কাস্টম ফিচার কি যোগ করা যাবে?", answer: "হ্যাঁ, স্কুলের প্রয়োজন অনুযায়ী অতিরিক্ত ফিচার যুক্ত করা সম্ভব। " },
  ];

  const faqsColumn2 = [
    { question: "সফটওয়্যারটি কি মোবাইল ও কম্পিউটার দুই জায়গাতেই ব্যবহার করা যাবে?", answer: "হ্যাঁ, Smart Pathshala মোবাইল অ্যাপ এবং ওয়েব—দুই মাধ্যমেই ব্যবহার করা যায়।" },
    { question: " ডাটা কি নিরাপদ থাকবে?", answer: "অবশ্যই। Smart Pathshala-এ সকল ডাটা নিরাপদভাবে সংরক্ষণ করা হয় এবং আধুনিক সিকিউরিটি সিস্টেম ব্যবহার করা হয়।" },
    { question: "সফটওয়্যারটি ব্যবহার করতে কি ইন্টারনেট প্রয়োজন?", answer: "হ্যাঁ, এই সফটওয়্যারটি ব্যবহার করতে ইন্টারনেট সংযোগ প্রয়োজন।" },
    { question: "ফি পেমেন্ট কীভাবে করা যাবে?", answer: "অভিভাবকরা বিকাশ, নগদ, রকেটসহ বিভিন্ন মোবাইল ব্যাংকিং-এর মাধ্যমে সহজেই ফি পরিশোধ করতে পারবেন।" },
    { question: "কোন সমস্যা হলে কীভাবে সাপোর্ট পাওয়া যাবে?", answer: "আমাদের টেকনিক্যাল সাপোর্ট টিম সবসময় সহায়তার জন্য প্রস্তুত থাকে। ফোন, SMS বা অনলাইন সাপোর্টের মাধ্যমে দ্রুত সহায়তা প্রদান করা হয়।" },
    { question: "কেন Smart Pathshala ব্যবহার করবো?", answer: "Smart Pathshala আপনার স্কুলকে ডিজিটাল, স্মার্ট এবং কার্যকরভাবে পরিচালনা করতে সাহায্য করে, সময় ও খরচ দুটোই কমায় এবং অভিভাবক-শিক্ষক যোগাযোগ সহজ করে।" },
  ];

  const toggleFAQ = (id) => {
    if (openIndex.includes(id)) {
      setOpenIndex(openIndex.filter(i => i !== id));
    } else {
      setOpenIndex([...openIndex, id]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const renderFAQItem = (faq, uniqueId) => (
    <motion.div
      key={uniqueId}
      variants={itemVariants} 
      className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <button
        onClick={() => toggleFAQ(uniqueId)}
        className="w-full px-6 py-5 flex items-center justify-between text-left min-h-[72px]"
      >
        <span className="font-semibold text-gray-800 pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
            openIndex.includes(uniqueId) ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openIndex.includes(uniqueId) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-white via-cyan-50/30 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center text-[#F29200] mb-16 uppercase"
        >
          Frequently Asked <br /> Questions
        </motion.h1>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 items-start"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {faqsColumn1.map((faq, index) => renderFAQItem(faq, `col1-${index}`))}
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {faqsColumn2.map((faq, index) => renderFAQItem(faq, `col2-${index}`))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;