// 'use client'

// import { useState, FormEvent } from 'react'
// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'

// interface Member {
//   _id?: string
//   name: string
//   email: string
//   phone: string
//   roll?: string
//   department?: string
//   batch?: string
//   photo?: string
//   bio?: string
//   skills?: string[]
// }

// interface MemberFormProps {
//   member?: Member | null
//   onClose: () => void
// }

// export function MemberForm({ member, onClose }: MemberFormProps) {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   const [formData, setFormData] = useState<Member>(
//     member || {
//       name: '',
//       email: '',
//       phone: '',
//       roll: '',
//       department: '',
//       batch: '',
//       photo: '',
//       bio: '',
//       skills: [],
//     }
//   )

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     try {
//       const method = member?._id ? 'PUT' : 'POST'
//       const url = member?._id ? `/api/members/${member._id}` : '/api/members'

//       const response = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         setError(data.error || 'Failed to save member')
//         return
//       }

//       onClose()
//     } catch (err) {
//       setError('An error occurred')
//       console.error('  Form error:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 mb-8 backdrop-blur-sm"
//     >
//       <h2 className="text-2xl font-bold text-white mb-6">
//         {member ? 'Edit Member' : 'Add New Member'}
//       </h2>

//       {error && (
//         <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
//           <p className="text-red-400 text-sm">{error}</p>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-2">
//               Name *
//             </label>
//             <Input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="bg-slate-700/50 border-slate-600 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-2">
//               Email *
//             </label>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="bg-slate-700/50 border-slate-600 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-2">
//               Phone *
//             </label>
//             <Input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="bg-slate-700/50 border-slate-600 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-2">
//               Department
//             </label>
//             <Input
//               type="text"
//               name="department"
//               value={formData.department || ''}
//               onChange={handleChange}
//               className="bg-slate-700/50 border-slate-600 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-2">
//               Roll
//             </label>
//             <Input
//               type="text"
//               name="roll"
//               value={formData.roll || ''}
//               onChange={handleChange}
//               className="bg-slate-700/50 border-slate-600 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-2">
//               Batch
//             </label>
//             <Input
//               type="text"
//               name="batch"
//               value={formData.batch || ''}
//               onChange={handleChange}
//               className="bg-slate-700/50 border-slate-600 text-white"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-slate-300 mb-2">
//             Bio
//           </label>
//           <textarea
//             name="bio"
//             value={formData.bio || ''}
//             onChange={handleChange}
//             rows={3}
//             className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg p-2"
//           />
//         </div>

//         <div className="flex gap-3 pt-4">
//           <Button
//             type="submit"
//             disabled={loading}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50"
//           >
//             {loading ? 'Saving...' : 'Save Member'}
//           </Button>
//           <Button
//             type="button"
//             onClick={onClose}
//             variant="outline"
//             className="bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
//           >
//             Cancel
//           </Button>
//         </div>
//       </form>
//     </motion.div>
//   )
// }

























'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface CommitteeMember {
  _id?: string

  identity: 'student' | 'faculty' | 'advisor'

  name: string
  position: string

  studentID: string

  email: string
  phone: string

  department: string
  year: string
  batch: string
  shift: string
  semester: string

  skills: string[]
  hobbies: string[]

  facebook: string
  linkedin: string
  github: string
  portfolio: string

  responsibilities: string
  bio: string

  profilePicture: string

  order: number
  isActive: boolean
}

interface Props {
  member?: CommitteeMember | null
  onClose: () => void
}

export default function MemberForm({
  member,
  onClose,
}: Props) {
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [skillsInput, setSkillsInput] = useState(
    member?.skills.join(', ') || ''
  )

  const [hobbiesInput, setHobbiesInput] = useState(
    member?.hobbies.join(', ') || ''
  )

  const [formData, setFormData] =
    useState<CommitteeMember>(
      member || {
        identity: 'student',

        name: '',

        position: '',

        studentID: '',

        email: '',

        phone: '',

        department: '',

        year: '',

        batch: '',

        shift: '',

        semester: '',

        skills: [],

        hobbies: [],

        facebook: '',

        linkedin: '',

        github: '',

        portfolio: '',

        responsibilities: '',

        bio: '',

        profilePicture: '',

        order: 0,

        isActive: true,
      }
    )

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    setError('')

    const payload = {
      ...formData,

      skills: skillsInput
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),

      hobbies: hobbiesInput
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    }

    try {
      const method = member?._id ? 'PUT' : 'POST'

      const url = member?._id
        ? `/api/committee/${member._id}`
        : '/api/committee'

      const res = await fetch(url, {
        method,

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.message || 'Something went wrong')
        return
      }

      onClose()
    } catch (err) {
      console.error(err)

      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">
        {member ? 'Edit Committee Member' : 'Add Committee Member'}
      </h2>

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        {/* ================= Basic Information ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Identity */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Identity
              </label>

              <select
                name="identity"
                value={formData.identity}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="advisor">Advisor</option>
              </select>
            </div>

            {/* Position */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Position
              </label>

              <Input
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Executive Member"
              />
            </div>

            {/* Name */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Full Name
              </label>

              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Md Mahfuz Hossain"
              />
            </div>

            {/* Student ID */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Student ID
              </label>

              <Input
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email
              </label>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Phone
              </label>

              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Department */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Department
              </label>

              <Input
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Computer Science & Engineering"
              />
            </div>

            {/* Year */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Year
              </label>

              <Input
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2nd Year"
              />
            </div>

            {/* Batch */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Batch
              </label>

              <Input
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                placeholder="66A"
              />
            </div>

            {/* Semester */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Semester
              </label>

              <Input
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                placeholder="4th"
              />
            </div>

            {/* Shift */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Shift
              </label>

              <Input
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                placeholder="Day"
              />
            </div>

            {/* Order */}

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Display Order
              </label>

              <Input
                type="number"
                name="order"
                value={formData.order}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    order: Number(e.target.value),
                  }))
                }
              />
            </div>

          </div>
        </div>
        {/* ================= Skills & Hobbies ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Skills & Hobbies
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Skills
              </label>

              <Input
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                placeholder="React, Next.js, Node.js, Leadership"
              />

              <p className="mt-2 text-xs text-slate-400">
                Separate using commas (,)
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Hobbies
              </label>

              <Input
                value={hobbiesInput}
                onChange={(e) => setHobbiesInput(e.target.value)}
                placeholder="Programming, Travel, Reading"
              />

              <p className="mt-2 text-xs text-slate-400">
                Separate using commas (,)
              </p>
            </div>

          </div>
        </div>

        {/* ================= Social Links ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Social Links
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <Input
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="Facebook URL"
            />

            <Input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
            />

            <Input
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="GitHub URL"
            />

            <Input
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="Portfolio URL"
            />

          </div>
        </div>

        {/* ================= Profile ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Profile Information
          </h3>

          <div className="space-y-5">

            <Input
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              placeholder="Profile Picture URL"
            />

            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows={4}
              placeholder="Responsibilities..."
            />

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={5}
              placeholder="Short Bio..."
            />

          </div>
        </div>

        {/* ================= Settings ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <label className="flex items-center gap-3 text-white">

            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isActive: e.target.checked,
                }))
              }
              className="h-5 w-5 rounded"
            />

            Active Member

          </label>

        </div>

        {/* ================= Buttons ================= */}

        <div className="flex flex-wrap gap-4">

          <Button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8"
          >
            {loading ? 'Saving...' : member ? 'Update Member' : 'Add Member'}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

        </div>

      </form>

    </motion.div>)
}