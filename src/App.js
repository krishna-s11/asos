import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {Routes,Route} from 'react-router-dom';
import MainForm from './Pages/MainForm/MainForm';
import { DataProvider } from './Context/DataContext';
import FinalForm from './Pages/FinalForm/FinalForm';
import Result from './Pages/Result/Result';
import Reject from './Pages/Reject/Reject';
import pdfView from './Pages/pdfView';
import ThankYou from './Container/ThankYou/ThankYou';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<MainForm />} />
          <Route path="/final/:id/:type" element={<FinalForm />} />
          <Route path="/result" element={<Result />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/reject" element={<Reject />} />
          <Route path="/pdfView" element={<pdfView />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
