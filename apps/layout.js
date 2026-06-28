import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import SmoothExperience from './components/SmoothExperience'

export const metadata = {
  title: 'ChromaCore | Modular Interface Engine',
  description: 'A high-performance design system engine for real-time UI orchestration.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SmoothExperience>{children}</SmoothExperience>
        </ThemeProvider>
      </body>
    </html>
  )
}
