import { Banner } from '@/components/Banner'
import { LawyerCard } from '@/components/LawyerCard'
import { lawyers } from '@/utils/lawyers'

export default function Lawyers() {
  return (
    <>
      <Banner
        label="Equipe"
        title="Conheça nossos advogados"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-[1120px] lg:grid-cols-4">
          {lawyers.map((lawyer) => (
            <LawyerCard
              key={lawyer.id}
              name={lawyer.name}
              occupation={lawyer.occupation}
              photoUrl={lawyer.photoUrl}
            />
          ))}
        </div>
      </section>
    </>
  )
}
