import React from 'react'; // Explicitly import React (may be optional based on your setup)
import './globals.scss';

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// Define a type for the component props
type RootLayoutProps = {
  children: React.ReactNode; // This type is appropriate for children
};

// Use the defined type for the component's props
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
