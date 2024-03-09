import Logo from "@/components/Logo"
import { Icon } from "@iconify/react"

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-[1024px] w-full py-4 select-none fixed top-0  px-4">
      <div className="flex gap-2 items-center">
        <Logo textcolor="#202023" size="20" />
        <h1 className="text-2xl font-bold leading-none">Karthik</h1>
      </div>
      <nav className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 font-medium">
          <p className="cursor-pointer">about.</p>
          <p className="cursor-pointer">projects.</p>
          <p className="cursor-pointer">contact.</p>
        </div>
        <div className="bg-textColor p-2 rounded-md cursor-pointer">
          <Icon
            icon="material-symbols:light-mode-outline"
            height={20}
            className="text-backgroundColor"
          />
        </div>
      </nav>
    </div>
  )
}

export default Header
