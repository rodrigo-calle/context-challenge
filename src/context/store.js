// context normal

// import { createContext, useContext, useState } from "react";

// const AppStateContext = createContext();

// const AppProvider = ({ children }) => {
//     // aqui se úeden agregar los estados que la aplicación requiera
//     const [status, setStatus] = useState('');
//     const propsToPass = {
//         status, 
//         setStatus,
//     };
//     return(
//         <AppStateContext.Provider value={propsToPass}>{children}</AppStateContext.Provider>
//     )    
// };

// const useAppState = () => {
//     const context = useContext(AppStateContext);
//     if(context === undefined){
//         throw new Error('UseAppState must be used within a AppProvider');
//     }
//     return context;
// }

// export {AppProvider, useAppState};


//---------------------context con useReducer()-------------------


import { createContext, useContext, useReducer } from "react";
//manejando contextos para el estado y dispatch(manejador)

const AppStateContext = createContext();
const AppDispatchContext = createContext();


const initialState = {
    isLoading: false,
    jobs: [],
    companies: [],
    user: {},
}

function AppReducer(state, action){
    switch(action.type){
        case 'L':
    }
}

const AppProvider = ({ children }) => {
    // aqui se úeden agregar los estados que la aplicación requiera
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //estado y acción

    const propsToPass = {
        state, 
        dispatch,
    };
    return(
        <AppStateContext.Provider value={propsToPass}>
            <AppDispatchContext.Provider vla={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )    
};

const useAppState = () => {
    const context = useContext(AppStateContext);
    if(context === undefined){
        throw new Error('UseAppState must be used within a AppProvider');
    }
    return context;
}

const useAppDispatch = () => {
    const context = useContext(AppDispatchContext);
    if(context === undefined){
        throw new Error('useAppDispatch must be used within a AppProvider');
    }
    return context;
} ;

export {AppProvider, useAppState, useAppDispatch};
