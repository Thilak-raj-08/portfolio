import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'Jeyarajan Thilakraj | Software Engineer & Full-Stack Developer',
  description:
    'Portfolio of Jeyarajan Thilakraj — BSc (Hons) Software Engineering Graduate (Second Class, Division One) & Full-Stack Developer specializing in Next.js, React, Nuxt.js, and Laravel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#070b14] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans antialiased selection:bg-rose-500/20 selection:text-rose-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
