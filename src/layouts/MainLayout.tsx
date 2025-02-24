import React from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, header }) => {
  return (
    <div className="container mx-auto p-4">
      <header className="py-2">{header}</header>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MainLayout;
