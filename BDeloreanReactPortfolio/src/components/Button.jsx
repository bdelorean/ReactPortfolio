const Button = ({action, additionalClasses}) => {
    return ( 
        <button className={`text-white text-xs w-full  h-[48px] rounded-md ${additionalClasses}`}>{action}</button>
     );
}
 
export default Button;