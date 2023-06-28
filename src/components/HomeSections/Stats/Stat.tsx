interface StatProps {
  number: number
  title: string
}

export function Stat({ number, title }: StatProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-title text-4.5xl font-bold text-secondary">
        {number}
      </span>
      <p className="font-title font-normal tracking-widest">{title}</p>
    </div>
  )
}
