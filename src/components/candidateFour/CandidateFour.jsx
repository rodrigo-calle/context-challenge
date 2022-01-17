import React from 'react'
import {BiUser} from "react-icons/bi";
import { useAppState } from "../../context/store";

import './CandidateFour.css';

const CandidateFour = () => {
    const { setCandidateFour, candidateFour } = useAppState();

    const handleOnClick = () => {
        const addVote = candidateFour +1;
        setCandidateFour(addVote);
    }

    return(
        <div className="candidate-container" onClick={handleOnClick}>
            Candidato Cuatro  <BiUser className="candidate-icon" />
        </div>
    )
}

export default CandidateFour;