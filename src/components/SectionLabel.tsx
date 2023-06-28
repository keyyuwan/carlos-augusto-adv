interface SectionLabelProps {
  title: string
}

export function SectionLabel({ title }: SectionLabelProps) {
  return <h4 className="text-sm font-bold uppercase text-secondary">{title}</h4>
}
