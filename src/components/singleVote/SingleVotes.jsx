import React from 'react'
import { useAppState } from "../../context/store";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const SingleVote = () => {
    const {candidateOne, candidateTwo, candidateThree, candidateFour} = useAppState();
    const data = [
        {name: 'Candidato uno', votos: candidateOne, color: '#FF7355'},
        {name: 'Candidato dos', votos: candidateTwo, color: '#F5FF55'},
        {name: 'Candidato tres', votos: candidateThree, color: '#55FF81'},
        {name: 'Candidato cuatro', votos: candidateFour, color: '#55CEFF'},
    ];
    const total = candidateOne + candidateTwo + candidateThree + candidateFour;
    return(
        <><h2>Votos por Candidato: Unidades</h2>
        <div className="single-vote">
        {total === 0 ? 
            <p>Aun no se han registrado votos</p>
        : 
        <>  <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#55CEFF" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="votos" fill="#55CEFF" barSize={30} />
            </BarChart>
            <p>Candidato Uno: <span className="">{candidateOne} </span>votos</p>
            <p>Candidato Dos: <span className="">{candidateTwo} </span>votos</p>
            <p>Candidato Tres: <span className="">{candidateThree} </span>votos</p>
            <p>Candidato Cuatro: <span className="">{candidateFour} </span>votos</p></> 
            }
        </div>
        
        </>
    )
    
}

export default SingleVote;