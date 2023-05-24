import { ReactNode } from "react";
import { isMobile, isBrowser } from "react-device-detect";

type PageLayoutprops = {
  children: ReactNode;
};

export const textSize = isMobile
  ? "xs:text-[18px] 2xs:text-[16px] text-[14px]"
  : isBrowser
  ? "text-[20px] 2xl:text-[24px]"
  : "text-[16px]";

const PageLayout = ({ children }: PageLayoutprops) => {
  return (
    <div className={`relative ${textSize}`}>
      <header className="sticky top-0 w-full h-[60px] bg-white shadow-md flex items-center justify-center z-[50]">
        This is header
      </header>
      <main className="text-[1em]">{children}</main>
    </div>
  );
};

export default PageLayout;
