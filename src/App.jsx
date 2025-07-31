import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import ExperienceSection from "./section/ExperienceSection"
import FeatureCards from "./section/FeatureCards"
import Hero from "./section/Hero"
import ShowcaseSection from "./section/ShowcaseSection"

const App = () => {
  return (
  <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
  </>
  )
}

export default App
