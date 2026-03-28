import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { PiStudent } from 'react-icons/pi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { RiDoubleQuotesL } from "react-icons/ri";

import client1 from '../assets/image1.png';
import client3 from '../assets/image3.png';
import client2 from '../assets/image2.png';
import client4 from '../assets/image4.png';
import client5 from '../assets/image5.png';
import client6 from '../assets/image6.png';
import client7 from '../assets/image7.png';
import client8 from '../assets/image8.png';
import client9 from '../assets/image9.png';
import client10 from '../assets/image10.png';
import client11 from '../assets/image11.png';
import client12 from '../assets/image12.png';
import client13 from '../assets/image13.png';
import client14 from '../assets/image14.png';
import client15 from '../assets/image15.png';
import client16 from '../assets/image16.png';
import client17 from '../assets/image17.png';
import client18 from '../assets/image18.png';
import client19 from '../assets/image19.png';
import client20 from '../assets/image20.png';
import client21 from '../assets/image21.png';
import client22 from '../assets/image22.png';
import client23 from '../assets/image23.png';
import client24 from '../assets/image24.png';
import client25 from '../assets/image25.png';
import client26 from '../assets/image26.png';
import client27 from '../assets/image27.png';
import client28 from '../assets/image28.png';
import client29 from '../assets/image29.png';
import client30 from '../assets/image30.png';
import client31 from '../assets/image31.png';
import client32 from '../assets/image32.png';
import client33 from '../assets/image33.png';
import client34 from '../assets/image34.png';
import client35 from '../assets/image35.png';
import client36 from '../assets/image36.png';
import client37 from '../assets/image37.png';
import client38 from '../assets/image38.png';
import client39 from '../assets/image39.png';

const partners = [
    { 
          id: 1, logo: client1, 
          name: 'Fulkuri Islamic Academy', 
          address: 'PURATON C&B GHAT,CHAPAINAWABGANJ SADAR', totalStudents: 1400,
          review: "Their management system has completely transformed how we handle our daily operations. Truly efficient!"
        },
        { 
          id: 2, logo: client2, name: 'KARIMUNNESSA GIRLS HIGH SCHOOL', address: 'PIROJPUR SADAR, PIROJPUR', totalStudents: 800,
          review: "The user interface is so simple that our teachers and parents adapted to it instantly."
        },
        { 
          id: 3, logo: client3, name: 'Masjid Mission Academy (School & College)', address: 'Barakuthi Sarak, Boalia, Ghoramara, Rajshahi', totalStudents: 4500,
          review: "The best administrative tool we've ever used. It saved us a huge amount of paperwork."
        },
        { 
          id: 4, logo: client6, name: 'Rajshahi Cantonment Board School & College', address: 'Rajshahi Cantonment, Rajshahi', totalStudents: 450,
          review: "Their support team is amazing. They are always ready to help whenever we need them."
        },
        
        { 
          id: 5, logo: client5, name: 'Ranihati M.L High School', address: 'Ranihati bazar, Ranihati, Chapainawabganj', totalStudents: 1000,
          review: "An excellent platform that helps us track student progress with just a few clicks."
        },
        
        { 
          id: 6, logo: client4, name: 'Paragon Kindergarten and School', address: 'Paragon Road, Arani Pourashabha, Arani, Bagha, Rajshahi', totalStudents: 520,
          review: "Reliable, fast, and secure. Our data management has never been this smooth."
        },
        { 
          id: 7, logo: client7, name: 'SIRAJGANJ COLLECTORATE SCHOOL AND COLLEGE', address: 'COLLECTORATE ROAD, SIRAJGANJ SADAR, SIRAJGANJ', totalStudents: 900,
          review: "Highly affordable and effective. It's the perfect solution for modern educational institutions."
        },
        { 
          id: 8, logo: client8, name: 'Sirajganj Collectorate School & College English Version', address: 'COLLECTORATE ROAD, SIRAJGANJ SADAR, SIRAJGANJ', totalStudents: 1050,
          review: "The automated report card system has made our lives so much easier. Exceptional work!"
        },
        { 
          id: 9, logo: client9, name: 'SATRAJITPUR HIGH SCHOOL', address: 'SATRAJITPUR, Chapainawabganj', totalStudents: 1500,
          review: "Great features and very professional layout. We are very happy with the service."
        },
        { 
          id: 10, logo: client10, name: 'Qadirabad Cantonment Sapper College', address: 'Dayarampur, Natore', totalStudents: 1000,
          review: "Even with a large number of students, the system runs perfectly without any lag."
        },
        
        { 
          id: 11, logo: client12, name: 'Rajshahi University School,Rajshahi.', address: 'Rajshahi University, Rajshahi', totalStudents: 2400,
          review: "Their management system has completely transformed our daily operations. Truly efficient!"
        },
        { 
          id: 12, logo: client24, name: 'Khulna Collectorate Public School and College', address: 'College Bhaban, Zilla School, Khulna', totalStudents: 1500,
          review: "The exam management module is a lifesaver for our teachers during peak times."
        },
        { 
          id: 13, logo: client25, name: 'Khilgaon Govt. Colony School & College', address: 'Block-C,Khilgaon, Dhaka-1219', totalStudents: 1200,
          review: "The colorful and easy interface makes it fun for our staff to manage records"
        },
        { 
          id: 14, logo: client29, name: 'Rajshahi Darus Salam Kamil Madrasah', address: 'Rajshahi Court, Rajpara, Rajshahi ', totalStudents: 2000,
          review: "Managing student data has become very organized and easy to access now.."
        },
        { 
          id: 15, logo: client30, name: 'YAqubia Girls High School & College Bogura', address: 'Suttrapur, Bogura Sadar, Bogura', totalStudents: 3500,
          review: "Fantastic support! They always listen to our feedback and improve the system."
        },
        { 
          id: 16, logo: client14, name: 'Mashkata Dighi Multi (Tech) High School And College', address: 'Katakhali,Rajshahi', totalStudents: 2300,
          review: "The best administrative tool we've ever used. It saved us a huge amount of paperwork."
        },
        { 
          id: 17, logo: client15, name: 'MATUAIL HAZI ABDUL LATIF BHUIYAN COLLEGE', address: 'Matuail Dakkhin Para,College Road,Demra(Jatrabari),Dhaka-1362', totalStudents: 700,
          review: "Reliable, fast, and secure. Our data management has never been this smooth."
        },
        { 
          id: 18, logo: client16, name: 'Moudubi Govt. High School', address: 'Moudubi,Patuakhali', totalStudents: 500,
          review: "An excellent platform that helps us track student progress with just a few clicks."
        },
        { 
          id: 19, logo: client37, name: 'AGRANI BIDYALAYA O MAHABIDYALAYA', address: 'Ruet Area, Rajshahi', totalStudents: 3500,
          review: "The exam management module is a lifesaver for our teachers during peak times."
        },
        { 
          id: 20, logo: client18, name: 'Peace School & College Bogura', address: 'bogura', totalStudents: 500 ,
          review: "Highly affordable and effective. It's the perfect solution for modern institutions."
        },
        
        { 
          id: 21, logo: client20, name: 'Ranihati Degree Collage', address: 'Ranihati, Chapainawabganj', totalStudents: 975,
          review: "Great features and very professional layout. We are very happy with the service"
        },
        { 
          id: 22, logo: client21, name: 'Rifats Learning Point', address: 'Riaz Mansion, Subidbazar Point, Sylhet.', totalStudents: 500,
          review: "Even with a large number of students, the system runs perfectly without any lag."
        },
        
        { 
          id: 23, logo: client23, name: 'Govt Janata College', address: 'Dumki, Patuakhali ', totalStudents: 3500,
          review: "We love the intuitive design and how it connects teachers, students, and parents"
        },
        { 
          id: 24, logo: client22, name: 'TEJDASKATHI COLLEGE', address: 'Tejdaskathi, Pirojpur', totalStudents: 350,
          review: "Very innovative and helpful. Our admission process is now 100% digital."
        },
        { 
          id: 25, logo: client26, name: 'Lion School and College, Khulna', address: 'Sher e Bangla Road, Gollamari', totalStudents: 500,
          review: "Our communication with parents has improved significantly since we started using this."
        },
        { 
          id: 26, logo: client27, name: 'Syeda Hasina Khatun Secondary School ', address: 'Jahanpur,Moglabazar, Dakshin Surma, Sylhet', totalStudents:500,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        { 
          id: 27, logo: client28, name: 'Pinnacle Study Home', address: 'Ghoramara, Rajshahi', totalStudents: 500,
          review: "We appreciate the frequent updates and new features they provide regularly."
        },
        
        { 
          id: 28, logo: client31, name: 'NEKJAN GIRLS HIGH SCHOOL', address: 'BHOLAHAT,Chapainawabganj', totalStudents: 450,
          review: "We love the intuitive design and how it connects teachers, students, and parents."
        },
        { 
          id: 29, logo: client32, name: 'FENI GIRISH-AKSHAY ACADEMY', address: 'G. A. Academy Road, Feni Sadar, Feni-3900', totalStudents: 2500,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        { 
          id: 30, logo: client33, name: 'HAMIDPUR NAWDAPARA HIGH SCHOOL', address: 'Nawdapara, Airport Road', totalStudents: 800,
          review: "The exam management module is a lifesaver for our teachers during peak times."
        },
        { 
          id: 31, logo: client34, name: 'Bashirabad Dawatul Islam Fazil Madrasah', address: 'Bashirabad, Kharkhari, Paba,  Rajshahi', totalStudents: 500,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        { 
          id: 32, logo: client35, name: 'AMIRJAN HIGH SCHOOL', address: 'DUMNI, TALNA, KHILKHET, DHAKA - 1229', totalStudents:1300,
          review: "The colorful and easy interface makes it fun for our staff to manage records"
        },
        { 
          id: 33, logo: client36, name: 'AMBIA KINDER GARTEN SCHOOL', address: 'College Road, Kamalganj-3220, Moulvibazar, Bangladesh.', totalStudents: 400,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        
        { 
          id: 34, logo: client38, name: 'Advanced Academy', address: 'Bosua (Alir Mor ),Rajshahi', totalStudents: 500,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        { 
          id: 35, logo: client25, name: 'Khilgaon Govt. Colony School and College (Primary)', address: ' Block-C,Khilgaon, Dhaka-1220', totalStudents: 500,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        { 
          id: 36, logo: client11, name: 'Radiant Public School', address: 'Sadhur Mor, Talaimari, Rajshahi', totalStudents: 500,
          review: "Our communication with parents has improved significantly since we started using this."
        },
        { 
          id: 37, logo: client25, name: 'Khilgaon Govt. Colony School&College{College}', address: ' Block-C,Khilgaon, Dhaka-1221', totalStudents: 500,
          review: "Professional, reliable, and modern. It fits perfectly with our digital school vision."
        },
        { 
          id: 38, logo: client11, name: 'Rajshine Academy', address: 'Uposhohor, Rajshahi', totalStudents: 300,
          review: "Very innovative and helpful. Our admission process is now 100% digital."
        },
        { 
          id: 39, logo: client13, name: 'Islah Academy', address: 'Nawdapara Sugar Center,Sopura Rajshahi', totalStudents: 500,
          review: "The user interface is so simple that our teachers and parents adapted to it instantly."
        },
        { 
          id: 40, logo: client17, name: 'M S Cadet Coaching', address: '81, Central Basabo,Dhaka', totalStudents: 200,
          review: "Their support team is amazing. They are always ready to help whenever we need them."
        },
        { 
          id: 41, logo: client19, name: 'Proyas Coaching Home', address: 'Uddyam -7 (1st Floor), Lamabazar, Sylhet', totalStudents:300,
          review: "The automated report card system has made our lives so much easier. Exceptional work!"
        },
    
  ];

const Clients = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div className="min-h-screen bg-white py-25 px-4 md:px-10">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          Our Digital Education Partners
        </h2>
        <p className="text-gray-500 text-base">Trusted by top educational institutions for smart management</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 md:max-h-20 w-auto object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

       
      {selectedPartner && (
        <div
          onClick={() => setSelectedPartner(null)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4 md:mt-5"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 w-full max-w-lg relative shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center text-sm font-bold z-10"
            >
              ✕
            </button>

            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-6">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50 mb-3">
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="max-h-16 max-w-[180px] object-contain"
                />
              </div>
              <h3 className="text-center text-xl font-extrabold text-gray-900 leading-tight">
                {selectedPartner.name}
              </h3>
            </div>

            {/* Info Sections */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-3">
                <span className="text-xl text-gray-600"><HiOutlineBuildingOffice /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Institute Name</p>
                  <p className="text-sm font-semibold text-gray-800 line-clamp-1">{selectedPartner.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-3">
                <span className="text-xl text-red-400"><IoLocationSharp /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Address</p>
                  <p className="text-sm font-semibold text-gray-800">{selectedPartner.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-cyan-50 border border-cyan-100 rounded-xl p-3">
                <span className="text-xl text-cyan-500"><PiStudent /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Total Students</p>
                  <p className="text-sm font-semibold text-cyan-700">{selectedPartner.totalStudents.toLocaleString()}+</p>
                </div>
              </div>
            </div>

            {/* Client Review / Testimonial */}
            <div className="relative p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="flex items-center gap-2 mb-2">
                <RiDoubleQuotesL className="text-xl text-cyan-400" />
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-600">Client Review</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {selectedPartner.review}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;