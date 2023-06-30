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

export const services: Service[] = [
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
