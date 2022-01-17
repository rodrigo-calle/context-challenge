// context normal

import { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = 0;
    // aqui se úeden agregar los estados que la aplicación requiera
    const [candidateOne, setCandidateOne] = useState(initialState);
    const [candidateTwo, setCandidateTwo] = useState(initialState);
    const [candidateThree, setCandidateThree] = useState(initialState);
    const [candidateFour, setCandidateFour] = useState(initialState);
    const [porcent, setPorcent] = useState(false);
    const [unit, setUnit] = useState(true);

    const valueToPass = {
        candidateOne,
        setCandidateOne,
        candidateTwo,
        setCandidateTwo,
        candidateThree,
        setCandidateThree,
        candidateFour,
        setCandidateFour,
        porcent,setPorcent,
        unit, setUnit 
    };
    return(
        <AppStateContext.Provider value={valueToPass}>{children}</AppStateContext.Provider>
    )    
};

const useAppState = () => {
    const context = useContext(AppStateContext);
    if(context === undefined){
        throw new Error('UseAppState must be used within a AppProvider');
    }
    return context;
}

export {AppProvider, useAppState};


//---------------------context con useReducer()-------------------


// import { createContext, useContext, useReducer } from "react";
// import { CANDIDATE_FOUR, CANDIDATE_ONE, CANDIDATE_THREE, CANDIDATE_TWO } from "./constants";
// //manejando contextos para el estado y dispatch(manejador)

// const AppStateContext = createContext();
// const AppDispatchContext = createContext();


// const initialState = {
//     candidateOne: 0,
//     candidateTwo: 0,
//     candidateThree: 0,
//     candidateFour: 0
// }

// function AppReducer(state, action){
//     switch(action.type){
//         case CANDIDATE_ONE:
//             return {
//                  ...state,
//                 vote: action.add,
//          }
//         case CANDIDATE_TWO:
//             return {
//                 ...state,
//                 vote: action.add
//             }
//         case CANDIDATE_THREE:
//             return {
//                     ...state,
//                 vote: action.add,
//             }
//         case CANDIDATE_FOUR:
//             return {
//                 ...state,
//                 vote: action.add
//             }
//         default:
//             throw new Error('action not found')

//     }
// }

// const AppProvider = ({ children }) => {
//     // aqui se úeden agregar los estados que la aplicación requiera
//     const [state, dispatch] = useReducer(AppReducer, initialState);
//     //estado y acción

//     const propsToPass = {
//         state, 
//         dispatch,
//     };
//     return(
//         <AppStateContext.Provider value={propsToPass}>
//             <AppDispatchContext.Provider vla={dispatch}>
//                 {children}
//             </AppDispatchContext.Provider>
//         </AppStateContext.Provider>
//     )    
// };

// const useAppState = () => {
//     const context = useContext(AppStateContext);
//     if(context === undefined){
//         throw new Error('UseAppState must be used within a AppProvider');
//     }
//     return context;
// }

// const useAppDispatch = () => {
//     const context = useContext(AppDispatchContext);
//     if(context === undefined){
//         throw new Error('useAppDispatch must be used within a AppProvider');
//     }
//     return context;
// } ;

// export {AppProvider, useAppState, useAppDispatch};
