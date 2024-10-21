const Button = ({action, additionalClasses}) => {
    return ( 
        <button className={`text-white text-xs md:w-full w-[200px] h-[48px] rounded-md ${additionalClasses}`}>{action}</button>
     );
}
 
export default Button;