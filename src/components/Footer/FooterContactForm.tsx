import { Input } from '../Form/Input'

export function FooterContactForm() {
  return (
    <form className="mt-6 space-y-4 lg:mt-10">
      <div className="space-y-4 lg:flex lg:items-center lg:gap-4 lg:space-y-0">
        <Input placeholder="Nome" required />
        <Input placeholder="Telefone" type="tel" required />
      </div>
      <Input placeholder="E-mail" type="email" required />
      <textarea
        placeholder="Mensagem"
        required
        className="h-[120px] w-full rounded-sm border-none p-5 text-sm text-gray-700 outline-none"
      />
      <button
        type="submit"
        className="flex h-11 w-full items-center justify-center rounded-sm bg-secondary px-5 text-xs font-semibold uppercase leading-7 tracking-widest transition-colors hover:bg-secondary/90"
      >
        Enviar
      </button>
    </form>
  )
}
