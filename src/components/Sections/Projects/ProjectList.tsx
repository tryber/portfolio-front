import ProjectCard from './ProjectCard';
import project1 from '../../../assets/project1.png';

function ProjectList() {
  return (
    <section className="bg-dark-600" id="projetos">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-center text-2xl mb-4 font-bold text-white">Projetos</h1>
        <div
          className="grid gap-4 grid-cols-1 justify-center
          sm:grid-cols-2
          md:grid-cols-[repeat(auto-fill,292px)]"
        >
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={ ['javascript', 'tailwind', 'react'] }
            image={ project1 }
            slug=""
          />
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={ ['javascript', 'tailwind', 'react'] }
            image={ project1 }
            slug=""
          />
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={ ['javascript', 'tailwind', 'react'] }
            image={ project1 }
            slug=""
          />
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={ ['javascript', 'tailwind', 'react'] }
            image={ project1 }
            slug=""
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
