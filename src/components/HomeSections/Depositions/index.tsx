import { SectionLabel } from '@/components/SectionLabel'
import { Deposition } from './Deposition'

import dep01 from '@/assets/depositions/dep-1.svg'
import dep02 from '@/assets/depositions/dep-2.svg'
import dep03 from '@/assets/depositions/dep-3.svg'

interface DepositionType {
  id: string
  avatarUrl: string
  description: string
  name: string
  occupation: string
}

const depositions: DepositionType[] = [
  {
    id: '1',
    avatarUrl: dep01.src,
    description:
      'By cooperating with over many lawyers across the word our law firm is leaders in providing quality legal services.',
    name: 'Camila Oliveira',
    occupation: 'Contadora',
  },
  {
    id: '2',
    avatarUrl: dep03.src,
    description:
      'By cooperating with over many lawyers across the word our law firm is leaders in providing quality legal services.',
    name: 'Jonatas Ramos',
    occupation: 'Engenheiro Civil',
  },
  {
    id: '3',
    avatarUrl: dep02.src,
    description:
      'By cooperating with over many lawyers across the word our law firm is leaders in providing quality legal services.',
    name: 'Gabriela Guimarães',
    occupation: 'Empresária',
  },
]

export function Depositions() {
  return (
    <section className="px-6 py-12 lg:py-24">
      <div className="flex flex-col items-center">
        <SectionLabel title="Depoimentos" />
        <h2 className="mb-5 mt-4 font-title text-2xl font-bold text-gray-700 md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-20 md:mt-20 md:grid-cols-3 md:gap-6 md:px-6 lg:px-14">
        {depositions.map((deposition) => (
          <Deposition
            key={deposition.id}
            avatarUrl={deposition.avatarUrl}
            description={deposition.description}
            name={deposition.name}
            occupation={deposition.occupation}
          />
        ))}
      </div>
    </section>
  )
}
