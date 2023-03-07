import React, { FC, ReactNode } from 'react';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="bg-red-600">{children}</div>;
};

export default MainLayout;
