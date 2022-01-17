import './App.css';
import CandidateOne from './components/candidateOne/CandidateOne';
import CandidateTwo from './components/candidateTwo/CandidateTwo';
import CandidateThree from './components/candidateThree/CandidateThree';
import CandidateFour from './components/candidateFour/CandidateFour';
import TotalVotes from "./components/totalVotes/TotalVotes";
import SingleVote from "./components/singleVote/SingleVotes";
import { AppProvider } from "./context/store";
import MenuApp from "./components/menuApp/MenuApp";
import ChartsVotes from "./components/chartsVotes/ChartsVotes";
import { BrowserRouter,  Route, Routes } from 'react-router-dom'

function App() {

  return (
    <AppProvider>
      <h1 className="main-title">Todo se trata sobre el contexto - Challenge</h1>
      <section className="container-app">
        <div className="container-candidates">
          <CandidateOne />
          <CandidateTwo />
          <CandidateThree />
          <CandidateFour />
        </div>
        <div className="second-container">
          <div className="container-menu">   
          <TotalVotes />
            
          </div>
          <div className="third-container">
            <div className="container-total">
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<MenuApp />}>  
                <Route path="unit" element={<ChartsVotes />} />
                <Route path="porcent" element={<SingleVote />} />              
              </Route>
            </Routes>            
            </BrowserRouter>
            
            </div>
            <div className="container-single">   
            </div>
          </div>
        </div>    
      </section>
      <p className="author">Made by Rodrigo Calle</p>
    </AppProvider>
    
  );
}

export default App;
