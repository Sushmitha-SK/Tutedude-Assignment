import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import ReferAndEarn from './components/referandearn/ReferAndEarn';
import FriendsReferred from './components/friendsreferred/FriendsReferred';
import Breadcrumbpath from './components/breadcrumb/Breadcrumbpath';

function App() {

  const referalcode = "EDCH54"

  return (
    <div>
      <Navbar />
      <Breadcrumbpath />
      <Routes>
        <Route exact path="/" element={<ReferAndEarn referalcode={referalcode} />} />
        <Route exact path="/FriendsReferred" element={<FriendsReferred referalcode={referalcode} />} />
      </Routes>
    </div>
  );
}

export default App;
