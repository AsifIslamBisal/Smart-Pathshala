import React from 'react';
import { Database, FileText, UserCheck, Bell, Scale, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "March 24, 2026";

  const policySections = [
    {
      icon: <Database className="w-8 h-8 text-[#F29200]" />,
      title: "Information Collection",
      description: "To provide a seamless school management experience, we collect the following types of data:",
      points: [
        "Institutional registration and administrative profiles.",
        "Student, Teacher, and Staff profiles (Names, Photos, Contact Info).",
        "Biometric or technical data via Smart Attendance machines.",
        "Financial transaction data via integrated mobile banking.",
        "Academic records including results, assignments, and routines."
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-[#F29200]" />,
      title: "How We Use Your Data",
      description: "The collected information is used strictly for operational excellence:",
      points: [
        "Managing digital databases and automated reporting.",
        "Generating ID cards, admit cards, and certificates.",
        "Sending critical notices via SMS, Apps, and the Web.",
        "Providing monitoring dashboards for school authorities.",
        "Automating promotion and result sheet management."
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#F29200]" />,
      title: "User Rights & Control",
      points: [
        "Right to access and update institutional data at any time.",
        "Full control over student and staff data entry/deletion.",
        "Request for correction of any inaccurate system records."
      ]
    },
    {
      icon: <Bell className="w-8 h-8 text-[#F29200]" />,
      title: "Communications",
      points: [
        "Push notifications for app updates and security alerts.",
        "Automated SMS for fee payments and academic reminders."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-25 md:py-24">
        
        {/* 2. Hero Section */}
        <header className="max-w-3xl mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-[#F29200] text-xs font-bold uppercase tracking-wider mb-6">
            <CheckCircle size={14} /> Trusted by Institutions
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-slate-900">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            At Smart Pathshala, we prioritize your data security. This policy outlines how we protect the information of educational institutions, students, and parents.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
             <span className="h-px w-12 bg-[#F29200]"></span>
             <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Last Updated: {lastUpdated}</p>
             <span className="h-px w-12 bg-[#F29200]"></span>
          </div>
        </header>

        {/* 3. Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {policySections.map((section, index) => (
            <div key={index} className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{section.title}</h3>
              
              {section.description && (
                <p className="text-slate-600 mb-6 leading-relaxed">{section.description}</p>
              )}

              <ul className="space-y-4">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-[#F29200] rounded-full"></div>
                    </div>
                    <span className="text-slate-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4. Legal & TIN Section */}
        <section className="bg-slate-900 text-white p-8 md:p-16 rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Scale className="w-8 h-8 text-indigo-400" />
                <h3 className="text-3xl font-bold">Legal Compliance & Transparency</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                Smart Pathshala is a fully registered legal entity. We strictly adhere to national financial regulations and maintain a valid **Taxpayer's Identification Number (TIN) Certificate**. This ensures our commitment to transparency, ethical business practices, and fiscal responsibility.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="flex flex-col items-center gap-2 p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-500">
                <FileText size={48} className="text-gray-300" />
                <span className="text-sm font-medium">TIN Cert: 17356*******</span>
                <span className="text-xs text-gray-400"> (নিরাপত্তার স্বার্থে নম্বর গোপন রাখা হয়েছে)</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 5. Minimalist Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-slate-900">Smart Pathshala © 2026</p>
            <p className="text-sm text-slate-500 mt-1">Empowering Digital Education Excellence.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            
            <a href="/contact" className="hover:text-[#F29200] transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;