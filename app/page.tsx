'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/public/Navbar'
import { Footer } from '@/components/public/Footer'

export default function HomePage() {
  const stats = [
    { label: 'Members', value: '500+' },
    { label: 'Events', value: '50+' },
    { label: 'Achievements', value: '100+' },
    { label: 'Years Active', value: '10+' },
  ]

  const features = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Driving technological advancement through innovative projects and ideas',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Building a vibrant community of tech enthusiasts and developers',
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuous learning and skill development through workshops and events',
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Committed to excellence in everything we do',
    },
  ]

  return (
    <div className="pt-16">
      <Navbar />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-whitext-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-pretty">
              World University of Bangladesh{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Computer Society
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Empowering the next generation of tech innovators through learning, collaboration, and
              community
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button

                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button

                variant="outline"
                className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 px-8 py-6 text-lg"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-slate-900/50 py-20 border-y border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <p className="text-4xl md:text-5xl font-bold   bg-clip-text   mb-2">
                  {stat.value}
                </p>
                <p className="">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold  mb-4">Why Join WUBCS?</h2>
            <p className="  text-lg">Discover what makes our community special</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className=" ">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Premium CTA Section */}
      <section className="relative overflow-hidden py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-whitext-white" />

        {/* Gradient Glow */}
        <div className="absolute -top-32 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-10 left-10 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.15)]"
          >
            <div className="text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
                🚀 Join the WUBCS Community
              </span>

              <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Build.
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Learn.
                </span>
                {" "}Innovate Together.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Become part of the World University of Bangladesh Computer Society.
                Connect with passionate developers, participate in workshops,
                hackathons, programming contests, and shape the future of technology.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Button

                  size="lg"
                  className="h-14 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                >
                  <Link href="/committee">
                    Explore Committee →
                  </Link>
                </Button>

                <Button

                  variant="outline"
                  size="lg"
                  className="h-14 rounded-xl border-white/15 bg-white/5 px-8 text-base text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  <Link href="/events">
                    Upcoming Events
                  </Link>
                </Button>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="mt-2 text-sm text-slate-400">Active Members</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">100+</h3>
                  <p className="mt-2 text-sm text-slate-400">Events Organized</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">25+</h3>
                  <p className="mt-2 text-sm text-slate-400">Workshops</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">10+</h3>
                  <p className="mt-2 text-sm text-slate-400">Hackathons</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
