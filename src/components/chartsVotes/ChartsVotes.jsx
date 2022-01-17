import React, {useEffect, useState} from 'react'
import { useAppState } from "../../context/store";


const ChartsVotes = () => {
    const {candidateOne, candidateTwo, candidateThree, candidateFour} = useAppState();
    const [porcentOne, setPorcenOne] = useState(0);
    const [porcentTwo, setPorcenTwo] = useState(0);
    const [porcentThree, setPorcenThree] = useState(0)
    const [porcentFour, setPorcenFour] = useState(0);

    useEffect(() => {
        const total = candidateOne+ candidateTwo+candidateThree+candidateFour;
        setPorcenOne(((candidateOne/total)*100).toFixed(2));
        setPorcenTwo(((candidateTwo/total)*100).toFixed(2));
        setPorcenThree(((candidateThree/total)*100).toFixed(2));
        setPorcenFour(((candidateFour/total)*100).toFixed(2));

        
    }, [candidateOne, candidateTwo, candidateThree, candidateFour])
    return(
        <div className="container-single-vote">
        <h2>Votos por Candidato: Porcentaje</h2>
        {isNaN(porcentOne) ? 
            <p>Aun no se han registrado votos</p>
        : 
            <><p>Candidato Uno: <span className="">{`${porcentOne}%`}</span> votos</p>
            <p>Candidato Dos: <span className="">{`${porcentTwo}%`}</span> votos</p>
            <p>Candidato Tres: <span className="">{`${porcentThree}%`}</span> votos</p>
            <p>Candidato Cuatro: <span className="">{`${porcentFour}%`}</span> votos</p></>
        
        }
            
        </div>
    )
}

export default ChartsVotes;