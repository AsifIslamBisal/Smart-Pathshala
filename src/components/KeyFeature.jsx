import { useState } from "react";
import {
  Zap, Globe, ClipboardList, UserPlus, GraduationCap,
  CreditCard, Calendar, CheckSquare, Bell, MessageSquare,
  BookOpen, FileText, DollarSign, BarChart2, BookMarked,
  LayoutDashboard, Smartphone, Star, Award, Users,
  TrendingUp, CalendarCheck, FileCheck, Ticket, Table2,
  Library, PartyPopper, Mail,
} from "lucide-react";

const features = [
  {
    category: "Admission & Registration",
    icon: UserPlus,
    items: [
      { name: "Quick Registration", icon: Zap },
      { name: "Free Onboard", icon: Award },
      { name: "Admission", icon: ClipboardList },
      { name: "Student Register", icon: UserPlus },
      { name: "Teacher Register", icon: Users },
    ],
  },
  {
    category: "Academic Management",
    icon: BookOpen,
    items: [
      { name: "Routine Management", icon: Calendar },
      { name: "Homework", icon: BookMarked },
      { name: "Assignment", icon: FileText },
      { name: "Exam Management", icon: BarChart2 },
      { name: "Admit Card", icon: Ticket },
      { name: "Seat Plan", icon: Table2 },
    ],
  },
  {
    category: "Attendance & ID",
    icon: CheckSquare,
    items: [
      { name: "Attendance", icon: CheckSquare },
      { name: "ID Card", icon: CreditCard },
      { name: "Leave Management", icon: CalendarCheck },
      { name: "TC Management", icon: FileCheck },
    ],
  },
  {
    category: "Communication",
    icon: MessageSquare,
    items: [
      { name: "Guardian Notice", icon: Bell },
      { name: "SMS Notice", icon: MessageSquare },
      { name: "Teacher Notice", icon: Mail },
      { name: "Guardian App", icon: Smartphone },
      { name: "Teacher App", icon: Smartphone },
    ],
  },
  {
    category: "Finance & Billing",
    icon: DollarSign,
    items: [
      { name: "Digital Billing", icon: DollarSign },
      { name: "Account Management", icon: BarChart2 },
    ],
  },
  {
    category: "Administration",
    icon: LayoutDashboard,
    items: [
      { name: "Institute Head Dashboard", icon: LayoutDashboard },
      { name: "Smart Report Management", icon: TrendingUp },
      { name: "Library Management", icon: Library },
      { name: "Event Management", icon: PartyPopper },
      { name: "Testimonial Management", icon: Star },
      { name: "Website", icon: Globe },
    ],
  },
];

const APPS = [
  { 
    icon: Users, 
    name: "Guardian App", 
    sub: "Download on Play Store", 
    link: "https://play.google.com/store/apps/details?id=com.smartpathshala.guardian" 
  },
  { 
    icon: GraduationCap, 
    name: "Teacher App", 
    sub: "Download on Play Store", 
    link: "https://play.google.com/store/apps/details?id=com.smartpathshala.teacher" 
  },
  { 
    icon: LayoutDashboard, 
    name: "Headteacher App", 
    sub: "Download on Play Store", 
    link: "https://play.google.com/store/apps/details?id=com.smartpathshala.headteacher" 
  },
];

const KeyFeature = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* HERO HEADER*/}
      <header className="max-w-4xl mx-auto px-5 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          The All-in-One Solution for <span style={{ color: "#F29200" }}>Modern Education Institute</span> Management
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Streamline admissions, academics, and administration with our powerful, 
          secure, and easy-to-use cloud platform.
        </p>
      </header>

      {/*  FEATURES GRID  */}
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {features.map((cat, ci) => (
            <div
              key={ci}
              onMouseEnter={() => setActive(ci)}
              onMouseLeave={() => setActive(null)}
              className="rounded-2xl border-2 bg-white overflow-hidden transition-all duration-200"
              style={{
                borderColor: active === ci ? "#F29200" : "#e5e7eb",
                transform: active === ci ? "scale(1.015)" : "scale(1)",
                boxShadow: active === ci ? "0 14px 40px rgba(242,146,0,0.15)" : "0 1px 6px rgba(0,0,0,0.05)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b-2 transition-colors duration-200"
                style={{
                  background: active === ci ? "rgba(242,146,0,0.07)" : "#fafafa",
                  borderColor: active === ci ? "rgba(242,146,0,0.15)" : "#f0f0f0",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                  style={{ background: active === ci ? "#F29200" : "#111111" }}
                >
                  <cat.icon size={17} color="white" />
                </div>
                <span className="font-black text-sm text-gray-900">{cat.category}</span>
              </div>

              {/* Items */}
              <div className="px-3 py-2 space-y-0.5">
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-default transition-colors duration-150 group"
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(242,146,0,0.08)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(242,146,0,0.12)" }}
                    >
                      <item.icon size={13} color="#F29200" />
                    </div>
                    <span className="text-xs font-bold text-gray-800 flex-1">{item.name}</span>
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(242,146,0,0.15)" }}
                    >
                      <CheckSquare size={9} color="#F29200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  APPS SECTION */}
      <section className="max-w-7xl mx-auto px-5 pb-10">
        <div className="rounded-2xl  px-7 py-8 text-center">
          <Smartphone size={30} color="#F29200" className="mx-auto mb-2.5" />
          <h2 className="text-lg font-black text-gray-900 mb-1">Mobile Apps</h2>
          <p className="text-xs text-gray-400 mb-6">Available on Google Play Store</p>

          <div className="flex justify-center gap-30 flex-wrap">
            {APPS.map((app, i) => (
              <a
                key={i}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border-2 no-underline transition-all duration-200"
                style={{ borderColor: "rgba(242,146,0,0.25)", background: "#fff4e0" }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 22px rgba(242,146,0,0.2)";
                  e.currentTarget.style.borderColor = "#F29200";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(242,146,0,0.25)";
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#F29200" }}>
                  <app.icon size={17} color="white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-gray-900">{app.name}</div>
                  <div className="text-xs text-gray-400">{app.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyFeature;