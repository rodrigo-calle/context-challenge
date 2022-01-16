import logo from './logo.svg';
import './App.css';
import CandidateOne from './components/candidateOne/CandidateOne';
import CandidateTwo from './components/candidateTwo/CandidateTwo';
import CandidateThree from './components/candidateThree/CandidateThree';
import CandidateFour from './components/candidateFour/CandidateFour';

function App() {
  return (
    <section className="container-app">
      <div className="container-candidates">
        <CandidateOne />
        <CandidateTwo />
        <CandidateThree />
        <CandidateFour />
      </div>
    </section>
  );
}

export default App;
