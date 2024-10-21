import { useState } from "react";
import Project from "../components/Project";
import projectsdata from "../projectsdata";

const Projects = () => {
  const [projects, setProjects] = useState(projectsdata);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value; // Waarde van het invoerveld ophalen
    e.preventDefault();
    setSearchInput(value); // Update de state met de huidige invoer

    // Hier filteren we de lijst van projecten (projectsdata) om een nieuwe array te maken (filteredProjects).
    // Om de vergelijking niet hoofdlettergevoelig te maken, gebruiken we .toLowerCase() voor zowel de projectnaam als de zoekterm.
    // .includes() controleert of de zoekterm voorkomt in de projectnaam.
    // Als dit waar is, wordt het project toegevoegd aan de nieuwe array (filteredProjects).
    const filteredProjects = projectsdata.filter((card) =>
      card.Name.toLowerCase().includes(value.toLowerCase())
    );
    setProjects(filteredProjects);// Update de projectenlijst met de gefilterde resultaten
  };

  return (
    <section className="h-auto">
      {/* Search balk */}
      <div className="w-96 h-8 bg-[#5C584E] mx-auto flex items-center justify-center mt-4 rounded-lg">
        <input
          type="text"
          placeholder="Zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
          className="w-60 h-6 p-1 text-center rounded-md bg-[#5C584E] border placeholder:text-xs placeholder:italic text-xs text-white focus:outline-none"
        />
        <svg
          className="w-5 h-5 text-white ml-2" // Dimensiuni și culoare pentru iconiță
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.742 10.267a5.475 5.475 0 1 0-1.338 1.338 5.475 5.475 0 0 0 1.338-1.338zm-5.475-.795a4.475 4.475 0 1 1 4.475 4.475 4.475 4.475 0 0 1-4.475-4.475zM13.454 13.768l3.88 3.88a1 1 0 0 1-1.414 1.414l-3.88-3.88a7.475 7.475 0 1 1 1.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* Projects list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10 gap-5 place-items-center ">
        {projects.map((card, key) => (
          <Project
            key={card.id}
            img={card.image}
            title={card.Name}
            detail={card.language}
            btn={card.button}
            id={card.id} // om naar de detail pagina te kunnen navigeren 
            
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
