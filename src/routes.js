import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main/main'
import Bias from './pages/bias/bias'
import AllReviews from './pages/allreviews/allreviews';
import ReviewDetail from './pages/estudos/estudos';
import StudyAnalysis from './pages/studyanalysis/studyanalysis';
import Table from './pages/table/table';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/study" Component={Bias} />
        <Route exact path='' Component={Main} />
        <Route exact path='/analysis/:reviewId/:studyId' Component={StudyAnalysis} />
        <Route exact path='/myreviews' Component={AllReviews} />
        <Route exact path='/review/:reviewId' Component={ReviewDetail} />
        <Route exact path='/table/:reviewId' Component={Table} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;