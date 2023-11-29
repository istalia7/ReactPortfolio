import Layout from "./components/layout/layout";
import HTML_Logo from "./images/HTML5_logo.png";
import CSS3_Logo from "./images/CSS3_logo.png";
import Javascript_logo from "./images/Javascript_logo.png";

const Competences = () => {
  return (
    <Layout>
      <div className="bg-[#296492] h-screen">
        <h1 className="pt-4 p-2">Mes compétences</h1>
        <p className="pl-2">
          Vous pouvez retrouver ci-dessous les languages que je maîtrise et
          utilise régulièrement
        </p>
        <div className="flex justify-evenly pt-8">
          <div className="flex flex-col w-80 h-auto items-center border-4 border-black rounded-md bg-cyan-300 p-1 break-words">
            <p>HTML 5</p>
            <img src={HTML_Logo} className="w-24 h-24" />
            <p className="pt-3">
              Le HTML5, pour HyperText Markup Language 5, est une version du
              célèbre format HTML utilisé pour concevoir les sites Internet.
            </p>
          </div>
          <div className="flex flex-col w-80 h-auto items-center border-4 border-black rounded-md bg-cyan-300 p-1 break-words">
            <p>CSS 3</p>
            <img src={CSS3_Logo} className="w-24 h-24" />
            <p className="pt-3">
              Cascading Style Sheets (CSS) est un langage de programmation qui
              vous permet de déterminer la design des documents électroniques.
            </p>
          </div>
          <div className="flex flex-col w-80 h-auto items-center border-4 border-black rounded-md bg-cyan-300 p-1 break-words">
            <p>Javascript</p>
            <img src={Javascript_logo} className="w-24 h-24" />
            <p className="pt-3">
              JavaScript est un langage de programmation de scripts
              principalement employé dans les pages web interactives et c'est
              aussi une partie essentielle des applications web.{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competences;
