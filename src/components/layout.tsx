import * as React from 'react';
import Navigation from './navigation';
import MobileNavigation from './mobilenavigation';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <MobileNavigation />
    </div>
  );
};
export default Layout;
