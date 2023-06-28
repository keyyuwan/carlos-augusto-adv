import { Divider } from '@/components/Divider'
import { SectionLabel } from '@/components/SectionLabel'
import { ServicesItem } from './ServicesItem'

import seguroImg from '@/assets/icons/seguro.svg'
import bancoImg from '@/assets/icons/banco.svg'
import legislacaoImg from '@/assets/icons/legislacao.svg'
import familiaImg from '@/assets/icons/familia.svg'
import empresasImg from '@/assets/icons/empresa.svg'
import criminalImg from '@/assets/icons/criminal.svg'

interface Service {
  id: string
  iconUrl: string
  title: string
  description: string
}

const services: Service[] = [
  {
    id: '1',
    iconUrl: seguroImg.src,
    title: 'Seguro',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '2',
    iconUrl: bancoImg.src,
    title: 'Banco e Financeiro',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '3',
    iconUrl: legislacaoImg.src,
    title: 'Legislação Civil',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '4',
    iconUrl: familiaImg.src,
    title: 'Família',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '5',
    iconUrl: empresasImg.src,
    title: 'Empresas',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '6',
    iconUrl: criminalImg.src,
    title: 'Criminal',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
]

export function Services() {
  return (
    <section className="bg-primary px-6 py-12 lg:py-24">
      <div className="flex flex-col items-center">
        <SectionLabel title="Serviços" />
        <h2 className="mb-5 mt-4 font-title text-2xl font-bold md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
          Áreas de atuação
        </h2>
        <Divider />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:mx-auto lg:mt-20 lg:max-w-[840px] lg:gap-16">
        {services.map((service) => (
          <ServicesItem
            key={service.id}
            iconUrl={service.iconUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}
