import React, { ReactNode } from 'react';
import './globals.scss';
import NavigationHeader from '@/components/NavigationHeader/NavigationHeader';
import NavigationHeaderBackground from '@/components/NavigationHeaderBackground/NavigationBackground';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

// Define a type for the component's props
interface RootLayoutProps {
  children: ReactNode; // Specifies that children can be anything React is capable of rendering
}

// Directly annotate the function parameter with the RootLayoutProps type
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <NavigationHeader />
        <NavigationHeaderBackground />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
