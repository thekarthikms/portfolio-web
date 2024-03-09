// components

import Links from "@/components/Links"
import Logo from "@/components/Logo"
import NameBio from "@/components/NameBio"

import Header from "@/components/common/Header"
import Main from "@/components/sections/Main"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

const oldApp = () => {
  return (
    <section id="intro" className="bg-backgroundColor">
      <div id="intro-info">
        <Logo textcolor="white" bgcolor="none" />
        <NameBio />
        <Links />
        <div className="dim">portfolio under updation.</div>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <div className="bg-backgroundColor text-textColor flex items-center flex-col relative ">
      <Header />
      <div className="h-[100svh] w-full  overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
