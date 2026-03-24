import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '05d70584-e5c8-4461-abf8-127a5e2eb195',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'No message provided',
          subject: 'New Contact Submission',
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('failed');
      }
    } catch (error) {
      setStatus('failed');
    }
  };

  return (
    <div className=" min-h-screen font-sans mt-15">
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight">Contact Us</h1>
          <p className="text-xl font-bold text-gray-700 mb-10">Join hundreds of schools upgrading to smart management. We are just a message away!</p>

          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="w-full text-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-full bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                />
              </div>
              <div className="w-full text-left">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter a valid email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-full bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                />
              </div>
            </div>
            
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-6 py-4 rounded-full bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
            />
            
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-3xl bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner resize-none"
            ></textarea>

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="w-full py-4 bg-[#F29200] hover:bg-[#d68100] text-white text-xl font-bold rounded-full transition-all shadow-lg uppercase tracking-widest"
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section: Info Cards */}
      <div className="bg-[#D9D9D9] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Support */}
            <div className="flex flex-col items-center">
              <div className="bg-[#F29200] p-6 rounded-full mb-6 shadow-md">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">Support</h3>
              <p className="text-gray-700 font-semibold">info@smartpathshalabd.com</p>
              <p className="text-gray-700 font-semibold">support@smartpathshalabd.com</p>
              <p className="text-gray-700 font-semibold">sumon.smartpathshala@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="bg-[#F29200] p-6 rounded-full mb-6 shadow-md">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">Phone (Landline)</h3>
              <p className="text-gray-700 font-semibold">+880 1824186352</p>
              <p className="text-gray-700 font-semibold">+880 1824186382</p>
              <p className="text-gray-700 font-semibold">+880 1824187489</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <div className="bg-[#F29200] p-6 rounded-full mb-6 shadow-md">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">Our Office Location</h3>
              <p className="text-gray-700 font-semibold leading-tight text-center">
                Block-D <br /> Level-6 <br /> Hi-Tech Park,
                Rajshahi
              </p>
            </div>
          </div>
        </div>
      </div>

     {/* Map Section */}
<div className="w-full h-[450px] border-t-8 border-[#F29200] overflow-hidden bg-gray-200">
  <iframe
    title="Rajshahi Hi-Tech Park"
    src="https://www.google.com/maps?q=Bangabandhu+Sheikh+Mujib+Hi-Tech+Park+Rajshahi&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
  );
}