import React, { useState } from 'react';

const Tutorial = () => {
  const videos = [
    { id: 1, title: "Invoices Editing", youtubeId: "_rkdE7bRmMA" },
    { id: 2, title: "Smart Pathshala Print Management 1", youtubeId: "HVodBrGtpIA" },
    { id: 3, title: "Expense Management Smart Pathshala", youtubeId: "zslSZid8nO0" },
    { id: 4, title: "Exam Routine Create Smart Pathshala", youtubeId: "ALRHMQdkmcI" },
    { id: 5, title: "Exam Configure Last Video Smart Pathshala ", youtubeId: "VM19K8tPhdg" },
    { id: 6, title: "Exam Configuration Part 2", youtubeId: "V-ORfjzLbzs" },
    { id: 7, title: "Exam Tabulations Management.. ", youtubeId: "WmHRAgx5t9A" },
    { id: 8, title: "Academic Transcript ", youtubeId: "DzHl4kcF4F8" },
    { id: 9, title: "Transfer Certificate ", youtubeId: "bH_FIXXp_o4" },
    { id: 10, title: "SMS Setting & Reports ", youtubeId: "pYDoqtflRIE" },
    { id: 11, title: "Testimonial Management ", youtubeId: "3M2wuXdi1dA" },
    { id: 12, title: "Exam Seat Plan ", youtubeId: "N6SjGKwk8dU" },
    { id: 13, title: "Student Ledger Report ", youtubeId: "sJSHRKwSv8g" },
    { id: 14, title: "Billing Report Student Dues ", youtubeId: "eEnT0m5fiyE" },
    { id: 15, title: "Billing Reports Headwise & Daily Collections ", youtubeId: "M1_5GV7vRMw" },
    { id: 16, title: "Cash Pay Management ", youtubeId: "zsQ2lefBB88" },
    { id: 17, title: "Bulk Billing Invoices ", youtubeId: "HjdleoHjvzk" },
    { id: 18, title: "ID Card Management ", youtubeId: "qrxFsovisvk" },
    { id: 19, title: "Custom Billing Management", youtubeId: "FUNClYPxv6w" },
    { id: 20, title: "Billing Config Management ", youtubeId: "xOrrTrzC24E" },
    { id: 21, title: "Billing Head Management ", youtubeId: "WtDgAI9Bvs0" },
    { id: 22, title: "4th Subject Add Smart Pathshala||কিভাবে স্মার্ট পাঠশালায় অপশনাল  সাবজেক্ট বা চতুর্থ বিষয় যুক্ত করব??", youtubeId: "hPBfPowBpx4" },
    { id: 23, title: "Exam Grading Management||কিভাবে স্মার্ট পাঠশালায় এক্সাম গ্রেডিং এড করবো?", youtubeId: "TKfsoawt9XI" },
    { id: 24, title: "Class Attendance Reports Download and Print Smart Pathshala.", youtubeId: "IvT5mZ-9l7o" },
    { id: 25, title: "Smart Pathshala Exam Type and Head Management|| কিভাবে স্মার্ট পাঠশালায় এক্সাম টাইপ ও হেড তৈরি করব?", youtubeId: "3dH30em_zXw" },
    { id: 26, title: "Smart Pathshala Routine Management|| কি ভাবে স্মার্ট পাঠশালায় রুটিন এড করবো?", youtubeId: "RsbSzrk0ms0" },
    { id: 27, title: "Student Enrolment Web || Smart pathshalai kivabe Student Enrol korbo...", youtubeId: "AvYrMNRY7BI" },
    { id: 28, title: "Student List Print, Gurdian ID SMS and Other's ||Smart Pathsalai kivabe student list print SMS korbo", youtubeId: "jTrscb90Wy8" },
    { id: 29, title: "Student Management || Smart Pathshalai kivabe Student Add korbo..", youtubeId: "NZkZXs0krqw" },
    { id: 30, title: "Teacher Management || Smart Patshalai kivabe Teacher add korben...", youtubeId: "_roOjIR1rDs" },
    { id: 31, title: "Category Management || Smart Pathshalai kivabe Category add korbo...", youtubeId: "rgEM45jy6gc" },
    { id: 32, title: "Peroid Management || Smart Pathshalai kivabe Period add korbo..", youtubeId: "Co1V5T-gKDY" },
    { id: 33, title: "Day Management || Smart Pathshalai kivabe Day Add korbo...", youtubeId: "SXdFyi15mxw" },
    { id: 34, title: "Shift Management || Smart Pathshalai kivabe shift add korbo..", youtubeId: "SvH4vleSUyQ" },
    { id: 35, title: "Class Management || Smart Pathshalai kivabe class add korbo..", youtubeId: "6h5505tVI3A" },
    { id: 36, title: "Section Management Tutorial || Smart Pathshalai kivabe Section add korbo...", youtubeId: "iWZXRkEnm_g" },
    { id: 37, title: "Logo Change Tutiorial Video || Smart Pathshalai kivabe Logo add korbo..", youtubeId: "3-_OVIdN6qI" },
    { id: 38, title: "New School Onboard || kivabe Smart Pathshalai notun school Registration korbo...", youtubeId: "KODFbVz_e3g" },
    { id: 39, title: "SmartPathshala Log In Manegment || Kivabe Smart Pathshala Login korbo", youtubeId: "yj9j1HLhe90" },
    { id: 40, title: "Marksheet Quality Check Tutorial Smart Pathshala || kivabe Marksheet QC korbo", youtubeId: "qy78B4F-tAw" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState("");

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto mt-20">
      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search tutorial..."
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer transform transition duration-300 hover:scale-105  p-2 rounded-lg"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              className="rounded-lg w-full"
              src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
              alt={video.title}
            />
            <p className="mt-2 font-semibold">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[800px]">
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <iframe
              className="w-full h-[450px] rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tutorial;