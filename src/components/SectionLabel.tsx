interface SectionLabelProps {
  title: string
}

export function SectionLabel({ title }: SectionLabelProps) {
  return (
    <h4 className="text-sm font-bold uppercase tracking-[1px] text-secondary">
      {title}
    </h4>
  )
}
