import FeatureProduct from './components/FeaturedProducts'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'

const Home = () => {
  return (
    <>
      <HeroSection name='React Ecommerce Website' />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
}

export default Home
