import React from 'react';
import { FileText, CheckCircle, ClipboardList, Send, Settings, PenTool, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const processSteps = [
  {
    id: 1,
    title: "সফটওয়্যার ক্রয় ও ব্যবস্থাপনা কমিটির সভা ও সিদ্ধান্ত (Managing Committee Resolution)",
    desc: "প্রতিষ্ঠান কর্তৃপক্ষ সফটওয়্যার ব্যবহারের প্রয়োজনীয়তা অনুভব করে এবং প্রতিষ্ঠানের প্রশাসনিক ও আর্থিক কার্যক্রম ডিজিটাল করার বিষয়ে একটি সিদ্ধান্ত গ্রহণ করে।",
    icon: <ClipboardList className="w-6 h-6" />,
    fileName: "/স্কুল ব্যবস্থাপনা কমিটি তৈরি.pdf"
  },
  {
    id: 2,
    title: "দরপত্র আহ্বান (Tender/Quotation Invitation)",
    desc: "প্রতিষ্ঠানের পক্ষ থেকে উপযুক্ত সফটওয়্যার নির্বাচনের জন্য দরপত্র বা কোটেশন আহ্বান করা হয়। এতে সফটওয়্যারের ফিচার, মূল্য তালিকা এবং অন্যান্য শর্তাবলী সম্পর্কে তথ্য চাওয়া হয়।",
    icon: <PenTool className="w-6 h-6" />,
    fileName: "/দরপত্র আহ্বান বিজ্ঞবপ্ত.pdf"
  },
  {
    id: 3,
    title: "প্রস্তাব ও অফার লেটার (Offer Letter)",
    desc: "প্রাথমিক যোগাযোগের পর, 'স্মার্ট পাঠশালা'র পক্ষ থেকে প্রতিষ্ঠানের ডিজিটাল রূপান্তরের জন্য একটি বিস্তারিত প্রস্তাব এবং অফার লেটার পাঠানো হয়। এতে সফটওয়্যারের প্রধান বৈশিষ্ট্য যেমন ডায়নামিক ওয়েবসাইট, ডিজিটাল হাজিরা এবং পরীক্ষা ব্যবস্থাপনা সম্পর্কে তথ্য থাকে।",
    icon: <Send className="w-6 h-6" />,
    fileName: "/Offer Letter2026.pdf"
  },
  {
    id: 4,
    title: "সফটওয়্যার নির্বাচন ও অনুমোদন (Software Selection & Approval)",
    desc: "প্রাপ্ত দরপত্রসমূহ যাচাই-বাছাই করে একটি নির্বাচন কমিটি সফটওয়্যার নির্বাচনের বিষয়ে সুপারিশ করে এবং ব্যবস্থাপনা কমিটি তা অনুমোদন দেয়।",
    icon: <CheckCircle className="w-6 h-6" />,
    fileName: "/বিদ্যালয় পবিচালনা কবিটিি সভাি বসদ্ধান.pdf"
  },
  {
    id: 5,
    title: "কার্যাদেশ প্রদান (Work Order)",
    desc: "নির্বাচিত সফটওয়্যার কোম্পানিকে আনুষ্ঠানিকভাবে কাজ শুরু করার জন্য কার্যাদেশ প্রদান করা হয়। এতে কাজের পরিধি এবং সময়সীমা নির্দিষ্ট করা থাকে।",
    icon: <Award className="w-6 h-6" />,
    fileName: "/কার্যাদেশ ২০২৫.pdf"
  },
  {
    id: 6,
    title: "চূড়ান্ত চুক্তি সম্পাদন (Final Agreement)",
    desc: "সফটওয়্যারটি সফলভাবে কার্যকর হওয়ার পর, উভয় পক্ষের মধ্যে একটি আনুষ্ঠানিক সেবা চুক্তি (Service Agreement) স্বাক্ষরিত হয়। এই চুক্তিতে সফটওয়্যার ব্যবহারের শর্তাবলী এবং অন্যান্য নিয়মাবলী উল্লেখ থাকে।",
    icon: <FileText className="w-6 h-6" />,
    fileName: "/চুক্তিপত্র.pdf"
  },
  {
    id: 7,
    title: "সফটওয়্যার বাস্তবায়ন ও প্রশিক্ষণ (Implementation & Training)",
    desc: "কার্যাদেশ পাওয়ার পর, নির্ধারিত সময়ের মধ্যে সফটওয়্যার সেটআপ, ডাটা এন্ট্রি এবং শিক্ষক-কর্মচারীদের প্রয়োজনীয় প্রশিক্ষণ প্রদান করা হয়।",
    icon: <Settings className="w-6 h-6" />,
    fileName: "/tutorial"
  },
];

const Documentation = () => {
  return (
    <div className="bg-slate-50 py-25 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#F29200] tracking-wide uppercase">কার্যপদ্ধতি</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            আমাদের সাথে যুক্ত হওয়ার ধাপসমূহ
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            একটি প্রতিষ্ঠান যেভাবে ধাপে ধাপে ডিজিটাল স্মার্ট পাঠশালায় রূপান্তরিত হয়।
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="h-full flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">

                {/* Icon + Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 text-black rounded-xl group-hover:bg-[#F29200] group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-200 group-hover:text-[#F29200]">
                    0{step.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* PDF Button */}
                <div className="mt-auto">
                  <a
                    href={step.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600 border border-gray-200 py-2 px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    <FileText className="w-4 h-4" />
                    ডকুমেন্ট দেখুন
                  </a>
                </div>
              </div>

              {/* Connector */}
              {index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 bg-[#F29200] rounded-2xl p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-bold">আপনার প্রতিষ্ঠান কি প্রস্তুত?</h3>
          <p className="mt-2 text-blue-100">
            আজই আমাদের সাথে যোগাযোগ করে আপনার ডিজিটালাইজেশন প্রক্রিয়া শুরু করুন।
          </p>
          <NavLink to="/contact">
            <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Contact
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Documentation;