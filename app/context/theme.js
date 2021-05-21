import React from 'react';

const context = React.createContext('dark');

export const {Provider, Consumer} = context;
export default context;
