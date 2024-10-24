import {useNavigate} from "react-router-dom"



const Project = ({img,title,detail,btn,id}) => {
    const navigate = useNavigate();
    function goToDetails(){
        navigate(`/projectsdata/${id}`)
    }


    return ( <section className="w-[290px] h-[250px]  shadow-lg overflow-hidden rounded-lg cursor-pointer" onClick={goToDetails}>
    <img src={img} alt="Project img" className="w-full h-4/5 object-cover"/>
    <div className="flex flex-row justify-around items-center  bg-gray-300 h-1/5 p-4">
        <div className="flex flex-col jusity-start items-center">
            <h2>{title}</h2>
            <p>{detail}</p>
        </div>
        <button>{btn}</button>
    </div>
    </section> );
}
 
export default Project;