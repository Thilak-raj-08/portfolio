'use client'

import {
  RiGraduationCapLine,
  RiAwardLine,
  RiCodeBoxLine,
  RiTeamLine,
  RiLightbulbLine,
  RiRocketLine,
  RiMapPinLine,
  RiCalendarLine,
} from 'react-icons/ri'

// Education data - from CV
const education = [
  {
    degree: 'BSc (Hons) Software Engineering',
    grade: 'Second Class, Division One',
    institution: 'International College of Business and Technology (ICBT)',
    location: 'Campus Jaffna',
    period: 'Dec 2024 - Nov 2025',
    icon: RiGraduationCapLine,
    color: 'from-rose-500 to-pink-600',
  },
  {
    degree: 'Higher National Diploma (HND) in Computing',
    grade: 'Distinction',
    institution: 'British College of Applied Studies (BCAS) Campus Jaffna',
    location: 'Pearson BTEC Level 5',
    period: 'Sep 2022 - May 2024',
    icon: RiAwardLine,
    color: 'from-amber-500 to-orange-600',
  },
]

// Key highlights - from CV "Additional Information"
const highlights = [
  {
    icon: RiCodeBoxLine,
    title: 'Modern Tech Stack',
    description: 'Expanding skills in React, Next.js, and Laravel',
  },
  {
    icon: RiLightbulbLine,
    title: 'Problem Solver',
    description: 'Strong analytical skills and attention to detail',
  },
  {
    icon: RiTeamLine,
    title: 'Team Player',
    description: 'Excellent collaboration and communication',
  },
  {
    icon: RiRocketLine,
    title: 'Always Learning',
    description: 'Self-motivated, passionate about new technologies',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 font-medium mb-2 text-sm uppercase tracking-widest">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate software engineer ready to build amazing things
          </p>
        </div>

        {/* Main Grid: Story (Left) + Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Story */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-rose-500">Journey</span>
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hi! I'm <strong className="text-gray-900 dark:text-white">Jeyarajan Thilakraj</strong>,
                a motivated Software Engineering graduate from Point Pedro,
                Jaffna, Sri Lanka. I recently completed my BSc (Hons) in Software
                Engineering at ICBT Campus Jaffna with Second Class, Division One.
              </p>
              <p>
                My journey in software development started during my Higher
                National Diploma in Computing at BCAS, where I graduated with
                a <strong className="text-rose-500">Distinction</strong>. Since then,
                I've been building full-stack web applications using modern
                technologies like Vue.js, Nuxt.js, PHP, Java, and MySQL.
              </p>
              <p>
                I'm currently expanding my expertise in <strong>React</strong>, <strong>Next.js</strong>,
                and <strong>Laravel</strong>, and I'm looking for an internship or junior
                developer role where I can apply my skills, learn from experienced
                engineers, and contribute to real-world projects.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <RiMapPinLine className="text-rose-500 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Jaffna, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <RiCalendarLine className="text-rose-500 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Open to work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-md font-medium transition-all duration-200 shadow-lg shadow-rose-500/30 hover:-translate-y-0.5"
            >
              Let's Connect →
            </a>
          </div>

          {/* Right: Education Timeline */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-rose-500">Education</span> & Qualifications
            </h3>

            <div className="space-y-6 relative">
              {/* Vertical line for timeline */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 to-rose-500/20"></div>

              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <div key={index} className="relative pl-20">
                    {/* Timeline icon */}
                    <div
                      className={`absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg z-10`}
                    >
                      <Icon className="text-white text-2xl" />
                    </div>

                    {/* Content card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full mb-3">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-rose-500 mb-2">
                        Grade: {edu.grade}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom: Key Highlights */}
        <div>
          <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white text-center mb-8">
            What Makes Me <span className="text-rose-500">Different</span>
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 hover:border-rose-500/50"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300">
                    <Icon className="text-rose-500 text-2xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}