import { Menu } from 'lucide-react'

import { ButtonLink } from './ButtonLink'
import { ActiveLink } from './ActiveLink'

import logoImg from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 w-full bg-primary px-5 shadow-header lg:px-16">
      {/* Mobile Header */}
      <div className="flex h-full items-center justify-between lg:hidden">
        <img src={logoImg.src} alt="Carlos Augusto Advogados" />

        {/* Hamburguer */}
        <button>
          <Menu className="text-secondary" />
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex lg:h-full lg:items-center lg:justify-between">
        <img src={logoImg.src} alt="Carlos Augusto Advogados" />

        <nav className="flex h-full items-center">
          <ActiveLink href="/" title="Home" />
          <ActiveLink href="/servicos" title="Serviços" />
          <ActiveLink href="/advogados" title="Advogados" />
          <ActiveLink href="/sobre" title="Sobre" />
          <ActiveLink href="/contato" title="Contato" />
        </nav>

        {/* Hamburguer (Mobile) */}
        <ButtonLink title="Entrar em contato" href="/contato" />
      </div>
    </header>
  )
}
