import React from 'react'
import {BiUser} from "react-icons/bi";
import { useAppState } from "../../context/store";

const CandidateThree = () => {
    const { setCandidateThree, candidateThree } = useAppState();
    const handleOnClick = () => {
        const addVote = candidateThree +1;
        setCandidateThree(addVote);
    }

    return(
        <div className="candidate-container" onClick={handleOnClick}>
            Candidato Tres  <BiUser className="candidate-icon" />
        </div>
    )
}

export default CandidateThree;