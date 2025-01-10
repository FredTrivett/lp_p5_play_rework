'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaWindows } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { FaTrash, FaExclamationTriangle, FaShieldAlt, FaLock, FaCloudUploadAlt, FaUserSecret, FaEnvelopeOpenText, FaLaptopCode, FaUsers } from 'react-icons/fa';

const notifications = [
  'Drive Overload',
  '10 Viruses Detected',
  'System Malfunction',
  'Critical Error',
  'Memory Leak',
  'Disk Failure Imminent',
  'Malware Detected',
  'Security Breach',
  'Data Corruption',
  'Network Failure',
  'Firewall Compromised',
  'Unauthorized Access',
  'System Freeze',
  'Hardware Failure',
  'Ransomware Attack',
  'Kernel Panic',
  'Registry Corruption',
  'BSOD: Fatal Exception',
];

export default function Home() {
  const [visibleNotifications, setVisibleNotifications] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      const notificationInterval = setInterval(() => {
        if (visibleNotifications.length < 30) {
          setVisibleNotifications((prevNotifications) => [
            ...prevNotifications,
            notifications[prevNotifications.length % notifications.length],
          ]);
        }
      }, 300);

      const stopNotificationsTimer = setTimeout(() => {
        clearInterval(notificationInterval);
        setShowPopup(true);
      }, 7000);

      return () => {
        clearInterval(notificationInterval);
        clearTimeout(stopNotificationsTimer);
      };
    }, 2000);

    return () => {
      clearTimeout(initialDelay);
    };
  }, [visibleNotifications.length]);

  return (
    <div className="relative overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-black font-pixelify">ManaData</div>
          </Link>
        </div>
      </nav>

      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-black pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/desktop.webp"
            alt="Computer Screen"
            className="w-full h-auto"
            width={1920}
            height={1080}

          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-800 flex items-center px-4 space-x-2">
          <div className="flex items-center space-x-2">
            <FaWindows className="text-white text-xl" />
            <div className="text-white font-bold">Start</div>
          </div>
          <div className="flex-1 flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Type here to search"
                className="w-64 h-8 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <IoIosSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex space-x-1">
              <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white">
                1
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white">
                2
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center text-white">
                3
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-white">
              <span className="font-bold">EN</span>
            </div>
            <div className="text-white">12:00</div>
          </div>
        </div>

        <AnimatePresence>
          {visibleNotifications.map((notification, index) => (
            <motion.div
              key={`${notification}-${index}`}
              initial={{
                scale: 0.8,
                x: Math.random() * (window.innerWidth - 300),
                y: Math.random() * (window.innerHeight - 200),
              }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute bg-red-600 text-white p-4 rounded-md shadow-lg text-lg font-bold z-30 pointer-events-none border-2 border-red-800 laptop-window"
              style={{
                width: '300px',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-normal">Error</div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {notification}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {showPopup && (
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative bg-white text-blue-900 p-8 rounded-lg shadow-lg z-50 max-w-md"
            >
              <h2 className="text-3xl font-bold mb-4 font-pixelify">Attention!</h2>
              <p className="mb-6">
                Your computer is infected with errors. Take action now to fix it!
              </p>
              <Link href="https://fp-lajudie.fr/Nuit%20du%20code/menu.html">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Fix Now
                </button>
              </Link>
            </motion.div>
          </div>
        )}
      </div>

      <div className="bg-white text-black py-28 px-52">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center font-pixelify"
          >
            The Dangers of Data Pollution
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaTrash className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Data Waste</h3>
              <p>
                Excessive data generation leads to massive waste and inefficiency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaExclamationTriangle className="text-5xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Security Risks</h3>
              <p>
                Data breaches compromise sensitive information and put users at risk.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaShieldAlt className="text-5xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Protection</h3>
              <p>
                Proper data management and security measures are crucial for protection.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-black py-28 px-52">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center font-pixelify"
          >
            About ManaData
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/manadata.png"
                alt="Game Screenshot"
                className="w-full rounded-lg shadow-md"
                width={500}
                height={300}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Experience the Power of Data Management</h3>
              <p className="mb-6">
                Immerse yourself in an interactive game that showcases the importance of data management and security. Take on our challenge, eliminate the viruses and save the broken devices.
                <br></br><br></br>
                Thank&apos;s for saving the world !
              </p>
              <Link href="https://fp-lajudie.fr/Nuit%20du%20code/menu.html">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                  Play Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-28 px-52">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center font-pixelify"
          >
            What Can I Do?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaTrash className="text-3xl text-blue-600 mb-4 mx-auto" />
              <p>Delete unnecessary files</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaLock className="text-3xl text-green-600 mb-4 mx-auto" />
              <p>Use strong passwords</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaCloudUploadAlt className="text-3xl text-purple-600 mb-4 mx-auto" />
              <p>Backup important data</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaShieldAlt className="text-3xl text-red-600 mb-4 mx-auto" />
              <p>Install antivirus software</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaUserSecret className="text-3xl text-yellow-600 mb-4 mx-auto" />
              <p>Protect personal information</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaEnvelopeOpenText className="text-3xl text-teal-600 mb-4 mx-auto" />
              <p>Be cautious of suspicious emails</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaLaptopCode className="text-3xl text-indigo-600 mb-4 mx-auto" />
              <p>Keep software up to date</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaUsers className="text-3xl text-pink-600 mb-4 mx-auto" />
              <p>Educate others about data pollution</p>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ManaData. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
