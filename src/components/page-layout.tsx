import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { PageLoader } from "./page-loader";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
    </div>
  );
};
