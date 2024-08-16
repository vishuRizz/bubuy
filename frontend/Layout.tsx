import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="w-full max-w-[1440px] bg-white">
        {children}
      </div>
    </div>
  );
}

export default Layout;