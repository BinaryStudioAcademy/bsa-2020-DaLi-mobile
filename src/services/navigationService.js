import React from 'react';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};
