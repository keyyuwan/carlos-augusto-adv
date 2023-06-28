import { RightsItem } from './RightsItem'

import direitoPenalImg from '@/assets/icons/direito-penal.svg'
import direitoCivilImg from '@/assets/icons/direito-civil.svg'
import direitoConsumidorImg from '@/assets/icons/direito-consumidor.svg'

export function Rights() {
  return (
    <div className="grid grid-cols-1 bg-primary text-center lg:absolute lg:left-[50%] lg:mt-[-155px] lg:w-full lg:max-w-[996px] lg:translate-x-[-50%] lg:grid-cols-3 lg:rounded-sm">
      <RightsItem
        iconUrl={direitoPenalImg.src}
        title="Direito Penal"
        description="Lorem ipsum dolor sit amet, consectetur"
      />
      <RightsItem
        iconUrl={direitoCivilImg.src}
        title="Direito Civil"
        description="Lorem ipsum dolor sit amet, consectetur"
      />
      <RightsItem
        iconUrl={direitoConsumidorImg.src}
        title="Direito do Consumidor"
        description="Lorem ipsum dolor sit amet, consectetur"
      />
    </div>
  )
}
