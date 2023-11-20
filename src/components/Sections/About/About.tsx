import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

function About() {
  return (
    <div className="bg-dark-900" id="sobre">
      <section className="max-w-screen-xl mx-auto p-8 text-white">
        <div className="flex flex-col md:flex-row">
          <h2
            className="flex-shrink-0 w-1/4 text-2xl 
          mb-4 font-bold 
          text-white md:mb-0 md:mr-4"
          >
            Sobre mim
          </h2>
          <p className="text-base md:w-3/4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem temporibus non
            unde aspernatur suscipit repellat nobis. Maxime tempore vel atque, fuga
            laudantium dolores vero optio dolor, cupiditate dolore adipisci dolorem!
          </p>
        </div>
        <div className="flex flex-col mt-4 md:flex-row font-bold">
          <h2 className="flex-shrink-0 w-1/4 text-2xl mb-2 md:mb-0 md:mr-4">
            Habilidades
          </h2>
          <div className="text-base md:w-3/4">
            <h3 className="mb-4">Hard Skills</h3>
            <HardSkills />
            <h3 className="mb-4">Soft Skills</h3>
            <SoftSkills />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
