import React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const Pricing = () => {
  const cards = [
    {
      title: "EduLite",
      price: "৳8",
      description: "Start Smart, Grow with Confidence",
      bullets: [
        "Website", "Admission", "Digital Register", "Smart Class Routine",
        "Digital Attendance", "Apps Notification (No Cost)", "SMS Notification (Condition Apply)*",
        "Full Accounts Management", "Billing", "Exam Management", "Leaves Management",
        "Home work", "Assginment", "Document Management",
        "ID Card, Admit Card, Seat Plan, Testimonials, TC (Auto Genarated Softcopy).",
        "Smart Reports", "Institute Head Apps", "Teacher Apps", "Guardians Apps."
      ],
      primaryDataEntry: true,
      callCenterSupport: true,
      smsSupport: "SMS Support (Education Institiute will bear all SMS cost)"
    },
    {
      title: "EduPlus",
      price: "৳15",
      description: "Empowering Educational Institutes for Better Management",
      bullets: [
        "Website", "Admission", "Digital Register", "Smart Class Routine",
        "Digital Attendance", "Apps Notification (No Cost)", "SMS Notification (Condition Apply)*",
        "Full Accounts Management", "Billing", "Exam Management", "Leaves Management",
        "Home work", "Assginment", "Document Management",
        "ID Card, Admit Card, Seat Plan, Testimonials, TC (Auto Genarated Softcopy).",
        "Smart Reports", "Institute Head Apps", "Teacher Apps", "Guardians Apps."
      ],
      primaryDataEntry: true,
      callCenterSupport: true,
      smsSupport: "SMS Support by SIEMS (Absent, Billing & Exam Results- Half Yearly & Final).",
      extraNote: "Education Institiute will bear Others SMS cost."
    },
    {
      title: "EduPro",
      price: "৳20",
      description: "Advanced Solution for Smart Education Institutes",
      bullets: [
        "Website", "Admission", "Digital Register", "Smart Class Routine",
        "Digital Attendance", "Apps Notification (No Cost)", "SMS Notification (Condition Apply)*",
        "Full Accounts Management", "Billing", "Exam Management", "Leaves Management",
        "Home work", "Assginment", "Document Management",
        "ID Card, Admit Card, Seat Plan, Testimonials, TC (Auto Genarated Softcopy).",
        "Smart Reports", "Institute Head Apps", "Teacher Apps", "Guardians Apps."
      ],
      primaryDataEntry: true,
      callCenterSupport: true,
      smsSupport: "SMS Support by SIEMS (Absent, Billing & Exam Results- Half Yearly & Final).",
      extraNote: "Education Institiute will bear Others SMS cost.",
      employeeSupport: "Regular Employee Support (If the number of Students 2,000)"
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-gray-50 py-16 px-4 font-outfit"
    >
      <div className="max-w-7xl mx-auto mt-5">
        <h1 className="text-3xl sm:text-5xl font-black text-center mb-2 text-gray-900">
          SMART PATHSHALA
        </h1>
        <p className="text-center text-gray-600 font-bold mb-8 tracking-widest uppercase">
          Service Price List 2026
        </p>

        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              
              className="relative bg-white rounded-3xl w-72 sm:w-80 p-8 shadow-xl transition-all duration-500 group hover:bg-gradient-to-b hover:from-black hover:via-[#F29200] hover:via-70% hover:to-[#F29200] border border-gray-100 flex flex-col overflow-hidden"
              style={{ minHeight: "620px" }}
            >
              {/* Card Header */}
              <h2 className="text-2xl font-bold text-center mb-2 transition-colors duration-500 text-black group-hover:text-white">
                {card.title}
              </h2>
              <div className="text-center mb-4 transition-colors duration-500 text-[#F29200] group-hover:text-white">
                <span className="text-3xl font-black">{card.price}</span>
                <span className="text-sm font-medium">/month</span>
              </div>
              <p className="text-center mb-6 text-xs sm:text-sm transition-colors duration-500 text-black group-hover:text-white/90">
                {card.description}
              </p>

              {/* Feature List */}
              <ul className="mb-8 space-y-3 flex-grow border-t border-gray-100 group-hover:border-white/20 pt-6 transition-all duration-500">
                <p className="text-[10px] font-bold uppercase text-black group-hover:text-white/70 mb-2">Software Services:</p>
                {card.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm transition-colors duration-500 text-black group-hover:text-white"
                  >
                    <span className="mr-2 text-[#F29200] group-hover:text-white transition-colors duration-500">✓</span>
                    {bullet}
                  </li>
                ))}
                
                {card.primaryDataEntry && (
                   <li className="flex items-start text-sm transition-colors duration-500 text-black group-hover:text-white">
                    <span className="mr-2 text-[#F29200] group-hover:text-white transition-colors duration-500">✓</span> Primary Data Entry
                   </li>
                )}
                {card.callCenterSupport && (
                   <li className="flex items-start text-sm transition-colors duration-500 text-black group-hover:text-white">
                    <span className="mr-2 text-[#F29200] group-hover:text-white transition-colors duration-500">✓</span> Call center Support
                   </li>
                )}
                {card.smsSupport && (
                   <li className="flex items-start text-sm transition-colors duration-500 text-red-500 group-hover:text-white font-medium">
                    <span className="mr-2">★</span> {card.smsSupport}
                   </li>
                )}
                {card.extraNote && (
                   <li className="flex items-start text-sm transition-colors duration-500 text-red-500 group-hover:text-white font-medium">
                    <span className="mr-2">★</span> {card.extraNote}
                   </li>
                )}
                {card.employeeSupport && (
                   <li className="flex items-start text-sm transition-colors duration-500 text-black group-hover:text-white font-medium">
                    <span className="mr-2 text-[#F29200] group-hover:text-white transition-colors duration-500">✓</span> {card.employeeSupport}
                   </li>
                )}
              </ul>

              {/* Hover Button Effect */}
              <div className="opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <NavLink
                  to="/contact"
                  className="block w-full text-center bg-white text-[#F29200] font-bold py-4 rounded-xl shadow-lg no-underline hover:scale-105 active:scale-95 transition-transform"
                >
                  Contact Us
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center text-gray-500 space-y-2">
          <p className="font-semibold text-gray-800">Hotline:  880 1824186352, 880 1824186382, 880 1824187489</p>
          <p className="text-xs">*Note: Education Institute will bear other SMS costs. Conditions apply.</p>
          
          <div className="flex justify-center mt-6">
            <a
              href="https://school.smartpathshalabd.com/institute-onboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2.5 rounded-full bg-black text-white text-sm font-bold hover:shadow-xl hover:bg-[#F29200] hover:scale-105 active:scale-95 transition-all duration-300">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;