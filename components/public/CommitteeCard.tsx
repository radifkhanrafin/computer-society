'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaPhoneAlt,
  FaUserGraduate,
  FaIdCard,
} from 'react-icons/fa';
import { Button } from '../ui/button';

interface Member {
  _id: string;
  identity: string;
  name: string;
  position: string;
  studentID: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  batch: string;
  shift: string;
  semester: string;

  hobbies: string[];
  skills: string[];

  facebook?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;

  responsibilities: string;
  bio: string;

  profilePicture: string;
}

interface CommitteeCardProps {
  member: Member;
  index?: number;
}

export default function CommitteeCard({
  member,
  index = 0,
}: CommitteeCardProps) {
  const {
    name,
    position,
    studentID,
    email,
    phone,
    department,
    year,
    batch,
    semester,
    hobbies,
    skills,
    facebook,
    linkedin,
    github,
    portfolio,
    responsibilities,
    bio,
    profilePicture,
  } = member;
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/90 shadow-2xl backdrop-blur-xl"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative z-10 p-6">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <motion.img
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
            }}
            src={profilePicture}
            alt={name}
            className="h-36 w-36 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_30px_rgba(34,211,238,.35)]"
          />

          <h2 className="mt-5 text-center text-2xl font-bold text-white">
            {name}
          </h2>

          <p className="mt-2 rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            {position}
          </p>
        </div>

        {/* Info */}
        <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-cyan-400" />
            <span className="text-gray-300">{department}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaIdCard className="text-cyan-400" />
            <span className="text-gray-300">{studentID}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-cyan-400" />
            <span className="text-gray-300">{phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            <span className="truncate text-gray-300">
              {email}
            </span>
          </div>
        </div>

        {/* Identity */}
        <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">

          <h3 className="mb-3 text-center font-semibold text-cyan-300">
            Academic Information
          </h3>

          <div className="grid grid-cols-3 gap-3 text-center">

            <div>
              <p className="text-xs text-gray-400">
                Batch
              </p>

              <p className="font-semibold text-white">
                {batch}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Semester
              </p>

              <p className="font-semibold text-white">
                {semester}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Year
              </p>

              <p className="font-semibold text-white">
                {year}
              </p>
            </div>

          </div>
        </div>

<AnimatePresence>
  {expanded && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: .35 }}
      className="overflow-hidden"
    >
        {/* About */}
        <div className="mt-6">
          <h3 className="mb-3 text-lg font-semibold text-cyan-300">
            About
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            {bio}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h3 className="mb-3 text-lg font-semibold text-cyan-300">
            Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mt-8">
          <h3 className="mb-3 text-lg font-semibold text-purple-300">
            Hobbies
          </h3>

          <div className="flex flex-wrap gap-2">
            {hobbies.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-lg font-semibold text-cyan-300">
            Responsibilities
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            {responsibilities}
          </p>
        </div>
 </motion.div>
  )}
</AnimatePresence>
        {/* Social Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {facebook && (
            <motion.a
              whileHover={{
                scale: 1.15,
                rotate: 6,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/40"
            >
              <FaFacebookF size={18} />
            </motion.a>
          )}

          {linkedin && (
            <motion.a
              whileHover={{
                scale: 1.15,
                rotate: -6,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg transition-all duration-300 hover:shadow-sky-500/40"
            >
              <FaLinkedinIn size={18} />
            </motion.a>
          )}

          {github && (
            <motion.a
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 hover:shadow-white/20"
            >
              <FaGithub size={18} />
            </motion.a>
          )}

          {portfolio && (
            <motion.a
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all duration-300 hover:shadow-emerald-400/40"
            >
              <FaGlobe size={18} />
            </motion.a>
          )}

          <motion.a
            whileHover={{
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href={`mailto:${email}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:shadow-red-500/40"
          >
            <FaEnvelope size={18} />
          </motion.a>
        </div>
        <Button
          variant="ghost"
          onClick={() => setExpanded(!expanded)}
          className="mt-6 w-full rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
        >
          {expanded ? "Show Less" : "See More"}
        </Button>
      </div>
    </motion.div>
  );
}