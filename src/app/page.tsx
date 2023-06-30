import { About, Hero, Rights, Services, Team } from '@/components/HomeSections'
import { Stats } from '@/components/Stats'
import { Depositions } from '@/components/Depositions'

export default function Home() {
  return (
    <>
      <Hero />
      <Rights />
      <About />
      <Services />
      <Depositions />
      <Stats />
      <Team />
    </>
  )
}
