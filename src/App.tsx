import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoDemo from './components/VideoDemo'
import InstallSection from './components/InstallSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <InstallSection />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
