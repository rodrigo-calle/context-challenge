import React from 'react'
import {BiUser} from "react-icons/bi";
import { useAppState } from "../../context/store";

const CandidateTwo = () => {
    const { setCandidateTwo, candidateTwo } = useAppState();
    const handleOnClick = () => {
        const addVote = candidateTwo +1;
        setCandidateTwo(addVote);
    }
    return(
        <div className="candidate-container" onClick={handleOnClick}>
            Candidato Dos  <BiUser className="candidate-icon" />
        </div>
    )
}

export default CandidateTwo;