import './globals.css'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  title: 'Jeyarajan Thilakraj | Software Engineer & Full-Stack Developer',
  description:
    'Portfolio of Jeyarajan Thilakraj — BSc (Hons) Software Engineering Graduate (Second Class, Division One) & Full-Stack Developer specializing in Next.js, React, Nuxt.js, and Laravel.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 dark:bg-[#070b14] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans antialiased selection:bg-rose-500/20 selection:text-rose-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
