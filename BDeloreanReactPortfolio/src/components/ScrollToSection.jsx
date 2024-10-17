import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const ScrollToSection = () => {
    const { hash }= useLocation(); // Haal het huidige hash-gedeelte van de URL op (bijv. #about)

    useEffect (()=>{
        if(hash){
            const element = document.getElementById(hash.replace('#',''));
            // Verwijder het '#' teken en zoek naar een element met dat id
            if(element){
                element.scrollIntoView({behavior:"smooth"})
                // Scroll naar het element dat overeenkomt met het id
            }
        }
    },[hash]); // Voer de functie opnieuw uit wanneer de hash verandert
    return ( <>
    </> );
}
 
export default ScrollToSection;