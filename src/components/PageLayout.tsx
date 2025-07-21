import { ReactNode } from "react";
import Layout from "./Layout";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <Layout>{children}</Layout>;
}
