import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './layout/HomeView';
import NavigateBar from './components/common/NavigateBar';
import CekKhodamView from './layout/CekKhodamView';
import CupidMeterView from './layout/CupidMeterView';
import CekJodohView from './layout/CekJodoh';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-mobile md:bg-main bg-cover opacity-70 brightness-75" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavigateBar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cek-khodam" element={<CekKhodamView />} />
            <Route path="/cupid-meter" element={<CupidMeterView />} />
            <Route path="/cek-jodoh" element={<CekJodohView />} />
          </Routes>
          <div className="mt-auto w-screen text-center border-stone-300 border-t-2 shadow-sm shadow-stone">
            <span>Disclaimer: For entertainment only</span>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
