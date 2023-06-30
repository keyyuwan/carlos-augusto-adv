import { ButtonLink } from '../ButtonLink'
import { Divider } from '../Divider'
import { SectionLabel } from '../SectionLabel'

import carlosAugustoImg from '@/assets/carlos-augusto.jpg'

export function About() {
  return (
    <section className="px-6 py-12 text-center md:grid md:grid-cols-2 md:items-stretch md:gap-8 md:pb-24 md:pt-96 md:text-left lg:gap-32 lg:px-32 lg:pt-80">
      <div className="flex flex-col items-center md:items-start">
        <SectionLabel title="Sobre" />
        <h2 className="mb-5 mt-4 font-title text-2xl font-bold text-gray-700 md:text-3xl lg:mb-8 lg:mt-3 lg:text-4.5xl lg:leading-11">
          Carlos Augusto Advogados
        </h2>
        <Divider />
        <p className="mt-6 font-semibold leading-relaxed text-gray-700 lg:mt-8">
          Trabalhamos com a máxima excelência, agilidade e transparência, tendo
          sempre como pilar a prática da justiça com ética.
        </p>
        <p className="my-6 text-sm leading-7 text-gray-600 lg:text-base">
          Maecenas auctor blandit consectetur. Etiam et tellus vulputate,
          interdum velit eget, gravida metus. Donec porttitor dolor et arcu
          semper, eget pulvinar mauris volutpat. Proin condimentum mi justo,
          dictum placerat quam vulputate at. Integer pulvinar odio nec sem
          eleifend, tincidunt tincidunt erat mollis. Pellentesque cursus ligula
          libero, sed porta ipsum.
        </p>
        <ButtonLink title="Saiba mais" href="/sobre" />
      </div>

      <img
        src={carlosAugustoImg.src}
        alt="Carlos Augusto"
        className="mt-8 w-full object-cover md:mt-0"
      />
    </section>
  )
}
