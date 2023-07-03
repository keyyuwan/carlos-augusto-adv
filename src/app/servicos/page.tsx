import { Banner } from '@/components/Banner'
import { ServiceCard } from '@/components/ServiceCard'

import seguroImg from '@/assets/services/seguro.svg'
import bancoImg from '@/assets/services/banco.svg'
import legislacaoImg from '@/assets/services/legislacao.svg'
import familiaImg from '@/assets/services/familia.svg'
import empresasImg from '@/assets/services/empresas.svg'
import criminalImg from '@/assets/services/criminal.svg'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Serviços | Carlos Augusto Advogados',
}

interface Service {
  id: string
  title: string
  iconUrl: string
  description: string
  actions: string[]
}

const services: Service[] = [
  {
    id: '1',
    title: 'Seguro',
    iconUrl: seguroImg.src,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    actions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    id: '2',
    title: 'Banco e Financeiro',
    iconUrl: bancoImg.src,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    actions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    id: '3',
    title: 'Legislação Civil',
    iconUrl: legislacaoImg.src,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    actions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    id: '4',
    title: 'Família',
    iconUrl: familiaImg.src,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    actions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    id: '5',
    title: 'Empresas',
    iconUrl: empresasImg.src,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    actions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    id: '6',
    title: 'Criminal',
    iconUrl: criminalImg.src,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    actions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Banner
        label="Serviços"
        title="Áreas de atuação"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              iconUrl={service.iconUrl}
              description={service.description}
              actions={service.actions}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
