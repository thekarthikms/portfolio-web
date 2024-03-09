import Header from "@/components/common/Header"
import Main from "@/components/sections/Main"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

const App = () => {
  return (
    <div className="bg-backgroundColor text-textColor h-screen flex items-center flex-col relative ">
      <Header />
      <div className="h-full w-full  overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
