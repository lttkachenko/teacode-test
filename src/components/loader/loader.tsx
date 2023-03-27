import React from 'react';

import { Spinner } from 'reactstrap';

import './loader.scss';

export const Loader = ({ size = 'sm', count = 1 }) => (
  <div className="loader">
    {[...Array(count)].map((item, i) => <Spinner key={i} color="secondary" type="grow" size={size} />)}
  </div>
);
