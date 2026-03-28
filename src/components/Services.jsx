import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import register from '../assets/lottiefiles/register.json'
import website from '../assets/lottiefiles/website.json'
import admission from '../assets/lottiefiles/Exam Preparation.json'
import database from '../assets/lottiefiles/database.json'
import routine from '../assets/lottiefiles/routine.json'
import mattendance from '../assets/lottiefiles/mattendance.json'
import BAttendance from '../assets/lottiefiles/Biometric Sign in.json'
import MobileBanking from '../assets/lottiefiles/Mobile App Payment Gateway.json'
import AccountsSystem from '../assets/lottiefiles/system.json'
import AssignmentsHomework from '../assets/lottiefiles/Exams Preparation.json'
import ExamManagement from '../assets/lottiefiles/Exam.json'
import Notification from '../assets/lottiefiles/Smartphones Applications.json'
import CertificateGeneration from '../assets/lottiefiles/Certificate.json'
import Promotion from '../assets/lottiefiles/Email Marketing.json'
import Profile from '../assets/lottiefiles/Profile Scanning.json'
import MonitoringDashboard from '../assets/lottiefiles/SmartB Dashboard.json'
import ReportGeneration from '../assets/lottiefiles/reporting.json'
import LeaveManagement from '../assets/lottiefiles/human-experience.json'
import Support from '../assets/lottiefiles/support.json'

const services = [
    
    { id: 1, num: "01", title: "Institution Registration & Settings", desc: "Register your institution in minutes and configure every setting to your needs — departments, academic calendars, user roles, and more from one unified control panel.", lottieData: register },
    { id: 2, num: "02", title: "Government-Compliant Dynamic Website", desc: "Launch a fully dynamic, professionally designed website for your institution without writing a single line of code. Update news, notices, and content in real-time.", lottieData: website },
    { id: 3, num: "03", title: "Smart Digital Admission System", desc: "Modernize enrollment with a fully paperless digital admission system. Students apply online, receive instant confirmations, and track their status live.", lottieData: admission },
    { id: 4, num: "04", title: "Digital Database Management", desc: "Centralize all institutional data — student records, staff information, financials — in a secure, searchable, and structured digital database.", lottieData: database },
    { id: 5, num: "05", title: "Class Routine Management", desc: "Build and publish class schedules automatically. Handle conflicts, substitutions, and updates across all departments in seconds.", lottieData: routine },
    { id: 6, num: "06", title: "Mobile-Based Student Attendance", desc: "Teachers mark attendance via smartphone in seconds. Parents get real-time alerts. Automated reports flag chronic absenteeism before it escalates.", lottieData: mattendance },
    { id: 7, num: "07", title: "Smart Biometric Attendance Machine", desc: "Deploy fingerprint or card-based attendance machines for accurate, tamper-proof teacher and staff tracking — fully synchronized with the cloud.", lottieData: BAttendance },
    { id: 8, num: "08", title: "Mobile Banking Fee Collection", desc: "Accept tuition, exam, and miscellaneous fees securely through integrated mobile banking. No cash handling, no queues — full digital receipts for everyone.", lottieData: MobileBanking },
    { id: 9, num: "09", title: "CA-Standard Accounts System", desc: "Manage institutional finances with a chartered accountant-grade platform covering income, expenses, payroll, and budget analysis in one place.", lottieData: AccountsSystem },
    { id: 10, num: "10", title: "Assignments & Homework via App", desc: "Teachers publish assignments through the app. Students receive instant notifications, submit work digitally, and get feedback without leaving home.",  lottieData: AssignmentsHomework },
    { id: 11, num: "11", title: "Smart Exam Management", desc: "Plan, schedule, and conduct exams with precision. Seat plans, admit cards, and result sheets are auto-generated — saving weeks of manual work.",  lottieData: ExamManagement },
    { id: 12, num: "12", title: "Multi-Channel Notification System", desc: "Send notices instantly via App push, SMS, and Website — reaching every parent, student, and staff member wherever they are.",  lottieData: Notification },
    { id: 13, num: "13", title: "ID & Certificate Generation", desc: "Auto-generate student ID cards, admit cards, seat plans, merit certificates, and transfer documents — formatted, branded, and print-ready.",  lottieData: CertificateGeneration },
    { id: 14, num: "14", title: "Super-Fast Promotion System", desc: "Promote hundreds of students from one class to the next in seconds with a lightning-fast synchronized promotion engine — zero errors, zero delays.",  lottieData: Promotion },
    { id: 15, num: "15", title: "Dedicated Profile System", desc: "Every director, teacher, staff member, student, and guardian gets a dedicated profile — with personalized dashboards, history, and document access.",  lottieData: Profile },
    { id: 16, num: "16", title: "Super Monitoring Dashboard", desc: "Institution heads get a real-time bird's-eye view — attendance rates, fee collection, exam results, and staff activity — all in one place.", lottieData: MonitoringDashboard },
    { id: 17, num: "17", title: "Automated Report Generation", desc: "All reports — attendance, academic, financial — are generated, organized, and synced automatically. Ready to download, share, or print at any time.",  lottieData: ReportGeneration },
    { id: 18, num: "18", title: "Leave Management System", desc: "Teachers and staff submit leave requests digitally. Principals approve with one tap. The system tracks balances and generates detailed leave reports.",  lottieData: LeaveManagement },
    { id: 19, num: "19", title: "Round-the-Clock Support", desc: "Our dedicated team is available 9am to 6pm a day, 6 days a week — via chat, phone, or email — so your institution never faces downtime alone.",  lottieData: Support },
];

function LottieOrEmoji({ lottieData }) {
  const [error, setError] = useState(false);
  if (lottieData && !error) {
    return (
      <Player
        autoplay loop src={lottieData}
        style={{ width: "100%", height: "100%" }}
        onEvent={(e) => { if (e === "error") setError(true); }}
      />
    );
  }
  return null;
}

function ServiceRow({ service, index }) {
  const containerRef = useRef(null);
  const even = index % 2 === 0;

  // Scroll tracking for stacking effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [1, 1, 0.95, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [1, 1, 0.85, 0.7]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        scale,
        opacity: 1,
        zIndex: index + 1,
      }}
      className={`
        sticky top-28
        relative flex flex-col items-center gap-8
        ${even ? "md:flex-row" : "md:flex-row-reverse"}
        md:gap-12 lg:gap-60
        mb-16
        rounded-3xl
        border border-orange-200
        bg-white
        shadow-sm hover:shadow-2xl hover:shadow-orange-100/40
        px-6 py-10 md:px-12 md:py-16
        overflow-hidden
        transition-shadow duration-500
      `}
    >
      {/* ── Text side ── */}
      <div className="flex-1 max-w-lg relative z-10">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[.2em] uppercase text-orange-500 bg-orange-50 border border-orange-100 rounded-full px-3 py-1 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          Service {service.num}
        </span>
        <h2 className="text-2xl md:text-[2.2rem] font-black leading-tight text-stone-900 mb-6">
          {service.title}
        </h2>
        <p className="text-stone-500 text-[1.1rem] leading-relaxed">
          {service.desc}
        </p>
      </div>

      {/* ── Animation side ── */}
      <div className="flex-shrink-0 flex justify-center items-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotate: even ? 2 : -2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-2xl overflow-hidden bg-orange-50/30"
          style={{ width: "300px", height: "300px" }}
        >
          <LottieOrEmoji lottieData={service.lottieData} />
        </motion.div>
      </div>
    </motion.section>
  );
}

function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <span className="inline-block text-[11px] font-bold tracking-[.25em] uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full px-5 py-2 mb-8">
        Smart Solutions
      </span>
      <h1
        className="text-5xl md:text-[5rem] font-black leading-[1.05] tracking-tight text-stone-900 mb-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Everything Your
        <br />
        <span className="text-orange-500">Institution Needs</span>
      </h1>
      <p className="max-w-2xl mx-auto text-stone-500 text-xl leading-relaxed mb-14">
        A complete digital ecosystem designed to streamline administrative 
        tasks and enhance the learning experience for everyone
      </p>
      <div className="flex justify-center gap-10 md:gap-20">
        {[["50000+", "students"], ["100+", "Institution"], ["9am-6pm", "Support"]].map(([v, l]) => (
          <div key={l} className="text-center">
            <div className="text-2xl font-black text-orange-500">{v}</div>
            <div className="text-stone-400 text-[11px] uppercase tracking-[.2em] mt-2 font-bold">{l}</div>
          </div>
        ))}
      </div>
    </motion.header>
  );
}

export default function Services() {
  return (
    <div className="bg-white min-h-screen selection:bg-orange-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <Hero />
        <div className="space-y-4"> 
           
          {services.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="h-40" />
      </main>
    </div>
  );
}