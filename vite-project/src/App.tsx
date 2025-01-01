import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import HomeCards from './components/HomeCards.tsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero 
        title='Become a React Dev'
        subtitle='Find the React job that fits your skill set'
      />
      <HomeCards/>
    </>
  )
}

export default App
