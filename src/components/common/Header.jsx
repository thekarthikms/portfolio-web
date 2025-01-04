import Logo from "@/components/common/Logo"
import { ThemeContext } from "@/context/ThemeProvider"
import { Icon } from "@iconify/react"
import { useContext, useState } from "react"

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="flex items-center justify-between max-w-[1024px] w-full py-4 select-none fixed top-0  px-4 z-[999]">
      <div className="flex gap-2 items-center">
        <Logo textcolor="var(--text)" size="20" />
        <h1 className="text-2xl font-bold leading-none">Karthik</h1>
      </div>
      <nav className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 font-medium">
          <a href="#about" className="cursor-pointer">
            #about
          </a>
          <a href="#projects" className="cursor-pointer">
            #projects
          </a>
          <a href="#contact" className="cursor-pointer">
            #contact
          </a>
        </div>
        <div className="flex gap-2">
          <div
            className="bg-textColor p-2 rounded-md cursor-pointer border border-textColor"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Icon
                icon="material-symbols:light-mode-outline"
                height={20}
                className="text-backgroundColor"
              />
            ) : (
              <Icon
                icon="material-symbols:dark-mode-outline"
                height={20}
                className="text-backgroundColor"
              />
            )}
          </div>
          <Menu />
        </div>
      </nav>
    </div>
  )
}

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-highlightColor text-secondaryColor text p-2 rounded-md cursor-pointer relative block md:hidden">
      <Icon
        icon="material-symbols:menu"
        height={20}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute top-10 right-0 px-4 py-2 bg-highlightColor rounded-md w-[150px]">
          <div className="flex md:hidden flex-col items-left gap-6  font-medium">
            <a
              href="#about"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              #about
            </a>
            <a
              href="#projects"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              #projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            >
              #contact
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
