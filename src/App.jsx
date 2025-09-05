import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Teslanav from './components/Teslanav.jsx';
import Bannertesla from './components/Bannertesla.jsx';
import Bannerscroller from './components/Bannerscroller.jsx'; 
import Ourvehicles from './components/Ourvehicles.jsx';
import Experiencesection from './components/Experiencesection.jsx';
import Comparesection from './components/Comparesection.jsx';
import Energysection from './components/Energysection.jsx';
import Energyproductsec from './components/Energyproductsec.jsx';
import Teslafooter from './components/Teslafooter.jsx';

// Section Pages
import Vehicles from './Pages/Vehicles.jsx';
import Energy from './Pages/Energy.jsx';
import Charging from './Pages/Charging.jsx';
import Discover from './Pages/Discover.jsx';
import Shop from './Pages/Shop.jsx';
import RegionLanguagePage from './Pages/RegionLanguagePage.jsx';
import TeslaSupportPage from './Pages/TeslaSupportPage.jsx';
import Account from './Pages/Account.jsx';

function App() {
  return (
    <>
      <Teslanav />

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ paddingTop: '0px' }}>
              <Bannertesla />
              <Bannerscroller />
              <Ourvehicles />
              <Experiencesection />
              <Comparesection />
              <Energysection />
              <Energyproductsec />
              <Teslafooter />
            </div>
          }
        />

        {/* Section Routes */}
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/charging" element={<Charging />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/region-language" element={<RegionLanguagePage />} />
        <Route path="/support" element={<TeslaSupportPage />} />
        <Route path="/account" element={<Account />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={<div className="text-center mt-5">404 - Page Not Found</div>}
        />
      </Routes>
    </>
  );
}

export default App;
