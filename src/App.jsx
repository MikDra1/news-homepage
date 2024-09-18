import FeaturedNews from "./components/FeaturedNews"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import News from "./components/News"
import { NewsHomepageProvider } from "./contexts/NewsHomepageProvider"

function App() {
  return (
    <div className="container">
       <NewsHomepageProvider>
              <Navigation />
              <div className="grid-container">
              <Hero />
              <News />
              </div>
              <FeaturedNews />
          </NewsHomepageProvider>
    </div>
  )
}

export default App
