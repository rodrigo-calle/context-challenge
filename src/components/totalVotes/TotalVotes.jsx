import React, { useEffect, useState } from 'react'
import { useAppState } from "../../context/store";


const TotalVotes = () => {
    const [total, setTotal] = useState()
    const {candidateOne, candidateTwo, candidateThree, candidateFour} = useAppState();
    
    useEffect(() => {
        const totalVotes = candidateOne + candidateTwo + candidateThree + candidateFour;
        setTotal(totalVotes);
    }, [candidateOne, candidateTwo, candidateThree, candidateFour])
    return(
        <div className="container-total" style={{textAlign: 'center'}}>
            <h2>Votos Totales</h2>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>Total: {total} votos</p>
        </div>
    );
}
export default TotalVotes;