import React from 'react'
import {BiUser} from "react-icons/bi";
import { useAppState } from "../../context/store";

const CandidateOne = () => {
    const { setCandidateOne, candidateOne } = useAppState();

    const handleOnClick = () => {
        const addVote = candidateOne +1;
        setCandidateOne(addVote);
    }

    return(
        <div className="candidate-container" onClick={handleOnClick}>
            Candidato Uno  <BiUser className="candidate-icon" />
        </div>
    )
}

export default CandidateOne;