interface RightsItemProps {
  iconUrl: string
  title: string
  description: string
}

export function RightsItem({ iconUrl, title, description }: RightsItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-11 py-12 lg:h-[310px]">
      <img src={iconUrl} alt={title} />
      <h3 className="font-title text-lg lg:text-xl">{title}</h3>
      <div className="h-[2px] w-[60px] bg-secondary" />
      <p>{description}</p>
    </div>
  )
}
