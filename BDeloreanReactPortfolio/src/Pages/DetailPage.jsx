import { useNavigate, useParams } from "react-router-dom";
import projectsdata from "../projectsdata";
import Button from "../components/Button";

const DetailPage = () => {
  const { projectsdataId } = useParams(); // Haalt projectsdataId uit de URL. Dit is een parameter gedefinieerd in de route "/projectsdata/:projectsdataId".
  const navigate = useNavigate();

  const currentProject = projectsdata.find(
    (card) => card.id === Number(projectsdataId)
  );

  if (!currentProject) {
    return <p>Project not found</p>;
  }
  return (
    <section className="min-h-screen flex flex-col items-center justify- w-1/2 bg-[#31302C]/80 mx-auto px-8">
      <div className="flex flex-col items-start justify-center my-auto gap-3">
        <img src={currentProject.image} alt="" className="w-64 rounded-md" />
        <h2 className="text-white text-xl">{currentProject.Name}</h2>
        <h3 className="text-gray-300 text-xs">{currentProject.language}</h3>
        <p className="text-white text-xs tracking-wide">{currentProject.description}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-orange-400 p-2 text-white rounded-sm"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default DetailPage;
