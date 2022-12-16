import { Route, Routes } from 'react-router-dom';

import { Details, Home } from '../screens';
import { details, home } from './path';

export const PublicRouters = () => {
  return (
    <Routes>
      <Route path={home} element={<Home />} />
      <Route path={details} element={<Details />} />
      <Route path="*" element={<div>Not Page</div>} />
    </Routes>
  );
};
