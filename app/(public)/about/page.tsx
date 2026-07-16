'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-8">About WUBCS</h1>

          <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p>
                The World University of Bangladesh Computer Society is dedicated to fostering innovation,
                excellence, and community among students passionate about computer science and technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p>
                To create a thriving ecosystem where aspiring technologists can learn, grow, and contribute
                to the advancement of technology in Bangladesh and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Organize workshops and seminars on cutting-edge technologies</li>
                <li>Host hackathons and coding competitions</li>
                <li>Facilitate networking among tech professionals and students</li>
                <li>Provide mentorship and career guidance</li>
                <li>Collaborate with industry partners on real-world projects</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Join Our Community</h2>
              <p>
                Whether you&apos;re a beginner exploring the world of technology or an experienced developer
                looking to give back to the community, WUBCS has something for you. Be part of something
                extraordinary.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
