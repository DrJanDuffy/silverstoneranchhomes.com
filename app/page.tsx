import Hero from '@/components/Hero'
import PhotoGallery from '@/components/PhotoGallery'
import PropertyDescription from '@/components/PropertyDescription'
import PriceFeatures from '@/components/PriceFeatures'
import Amenities from '@/components/Amenities'
import PropertyMap from '@/components/PropertyMap'
import VideoSection from '@/components/VideoSection'
import AreaInfo from '@/components/AreaInfo'
import MarketInsights from '@/components/MarketInsights'
import AgentProfile from '@/components/AgentProfile'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhotoGallery />
      <PropertyDescription />
      <PriceFeatures />
      <Amenities />
      <PropertyMap />
      <VideoSection />
      <AreaInfo />
      <MarketInsights />
      <AgentProfile />
    </>
  )
}
