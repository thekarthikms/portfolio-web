// components
import Logo from "./components/Logo.jsx";
import NameBio from "./components/NameBio";
import Links from "./components/Links";

const App = () => {
  return (
    <section id="intro">
      <div id="intro-info">
        <Logo textcolor="white" bgcolor="none" />
        <NameBio />
        <Links />
        <div className="dim">portfolio under updation.</div>
      </div>
    </section>
  );
};

export default App;
