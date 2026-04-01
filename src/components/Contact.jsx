import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 

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
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className=" min-h-screen font-sans mt-15 overflow-hidden">
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight">Contact Us</h1>
            <p className="text-xl font-bold text-gray-700 mb-10">Join hundreds of schools upgrading to smart management. We are just a message away!</p>
          </motion.div>
          <motion.div 
            className="space-y-5"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div variants={fadeInUp} className="w-full text-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-full bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner transition-all ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="w-full text-left">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter a valid email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-full bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner transition-all ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                />
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp}>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-6 py-4 rounded-full bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner transition-all ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-3xl bg-[#D9D9D9] border-none focus:ring-2 focus:ring-[#F29200] text-gray-800 placeholder-gray-500 shadow-inner resize-none transition-all"
              ></textarea>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="w-full py-4 bg-[#F29200] hover:bg-[#d68100] text-white text-xl font-bold rounded-full transition-all shadow-lg uppercase tracking-widest"
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </motion.button>
            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="text-green-600 font-bold mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Support */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <motion.div whileHover={{ rotate: 10 }} className="bg-[#F29200] p-6 rounded-full mb-6 shadow-md">
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-black uppercase mb-2">Support</h3>
              <p className="text-gray-700 font-semibold">info@smartpathshalabd.com</p>
              <p className="text-gray-700 font-semibold">support@smartpathshalabd.com</p>
              <p className="text-gray-700 font-semibold">sumon.smartpathshala@gmail.com</p>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <motion.div whileHover={{ rotate: 10 }} className="bg-[#F29200] p-6 rounded-full mb-6 shadow-md">
                <Phone className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-black uppercase mb-2">Phone</h3>
              <p className="text-gray-700 font-semibold">+880 1824186352</p>
              <p className="text-gray-700 font-semibold">+880 1824186382</p>
              <p className="text-gray-700 font-semibold">+880 1824187489</p>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <motion.div whileHover={{ rotate: 10 }} className="bg-[#F29200] p-6 rounded-full mb-6 shadow-md">
                <MapPin className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-black uppercase mb-2">Our Office Location</h3>
              <p className="text-gray-700 font-semibold leading-tight text-center">
                Block-D <br /> Level-6 <br /> Hi-Tech Park,
                Rajshahi
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Map Section*/}
      <motion.div 
        className="w-full h-[450px] border-t-8 border-[#F29200] overflow-hidden bg-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </div>
  );
}