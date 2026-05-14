'use client'

import {
  RiCodeSSlashLine,
  RiServerLine,
  RiDatabase2Line,
  RiPaletteLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiVuejsFill,
  RiReactjsFill,
  RiBootstrapFill,
  RiTailwindCssFill,
  RiGithubFill,
  RiGitBranchLine,
  RiFigmaFill,
} from 'react-icons/ri'

// Skills grouped by category - from your CV
// For brands without dedicated icons, we use styled text badges
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: RiCodeSSlashLine,
    description: 'Building responsive and modern user interfaces',
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'HTML5', icon: RiHtml5Fill, color: 'text-orange-500' },
      { name: 'CSS3', icon: RiCss3Fill, color: 'text-blue-500' },
      { name: 'JavaScript', icon: RiJavascriptFill, color: 'text-yellow-500' },
      { name: 'TypeScript', label: 'TS', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
      { name: 'Vue.js', icon: RiVuejsFill, color: 'text-green-500' },
      { name: 'Nuxt.js', label: 'Nx', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
      { name: 'Next.js', label: 'N', color: 'text-gray-900 dark:text-white', bg: 'bg-gray-100 dark:bg-gray-700' },
      { name: 'React', icon: RiReactjsFill, color: 'text-cyan-500' },
      { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: 'text-teal-500' },
      { name: 'Bootstrap', icon: RiBootstrapFill, color: 'text-purple-600' },
    ],
  },
  {
    title: 'Backend Development',
    icon: RiServerLine,
    description: 'Server-side programming and API development',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'PHP', label: 'PHP', color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
      { name: 'Java', label: 'Java', color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30' },
      { name: 'Python', label: 'Py', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
      { name: 'C#', label: 'C#', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    ],
  },
  {
    title: 'Database Management',
    icon: RiDatabase2Line,
    description: 'Designing and managing relational databases',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'MySQL', icon: RiDatabase2Line, color: 'text-blue-600' },
      { name: 'PostgreSQL', icon: RiDatabase2Line, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Design & Tools',
    icon: RiPaletteLine,
    description: 'Design tools and version control systems',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Adobe XD', label: 'Xd', color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900/30' },
      { name: 'Figma', icon: RiFigmaFill, color: 'text-purple-500' },
      { name: 'Canva', label: 'Cv', color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30' },
      { name: 'Git', icon: RiGitBranchLine, color: 'text-orange-600' },
      { name: 'GitHub', icon: RiGithubFill, color: 'text-gray-900 dark:text-white' },
      { name: 'Bitbucket', label: 'Bb', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    ],
  },
]

// Helper component - renders either an icon or a styled text badge
function SkillIcon({ skill }) {
  if (skill.icon) {
    const Icon = skill.icon
    return (
      <Icon
        className={`text-3xl mb-2 ${skill.color} group-hover:scale-125 transition-transform duration-300`}
      />
    )
  }
  return (
    <div
      className={`w-10 h-10 mb-2 rounded-lg ${skill.bg} flex items-center justify-center font-bold text-sm ${skill.color} group-hover:scale-125 transition-transform duration-300`}
    >
      {skill.label}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-rose-500 font-medium mb-2 text-sm uppercase tracking-widest">
            What I Know
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable web applications
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <CategoryIcon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all duration-300 cursor-default border border-transparent hover:border-rose-500/30"
                    >
                      <SkillIcon skill={skill} />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12 bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 text-white">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-display font-bold mb-2">
                Currently Learning
              </h3>
              <p className="text-white/90 text-sm">
                Expanding my skills in <strong>React</strong>, <strong>Next.js</strong>, and <strong>Laravel</strong> to
                build more powerful full-stack applications. Always exploring new technologies and best practices!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}