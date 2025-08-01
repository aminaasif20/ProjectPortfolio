import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Contact from "./section/Contact"
import ExperienceSection from "./section/ExperienceSection"
import FeatureCards from "./section/FeatureCards"
import Footer from "./section/Footer"
import Hero from "./section/Hero"
import ShowcaseSection from "./section/ShowcaseSection"
import TechStack from "./section/TechStack"
import Testmonials from "./section/Testmonials"

const App = () => {
  return (
    <>
      <NavBar />

      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <ShowcaseSection />
      </section>

      <section id="logos">
        <LogoSection />
      </section>

      <section id="features">
        <FeatureCards />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="tech">
        <TechStack />
      </section>

      <section id="testimonials">
        <Testmonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  )
}

export default App
