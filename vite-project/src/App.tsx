import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import HomeCards from './components/HomeCards.tsx'
import JobListings from './components/JobListings.tsx'
import ViewAllJobs from './components/ViewAllJobs.tsx'


function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default App
