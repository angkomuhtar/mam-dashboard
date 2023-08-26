"use client";

import useRtl from "@/hooks/useRtl";
import useDarkMode from "@/hooks/useDarkMode";
import useSkin from "@/hooks/useSkin";
import Footer from "@/components/partials/home/Footer";
import AppNavbar from "@/components/partials/home/AppNavbar";

export default function HomeLayout({ children }) {
  const [isRtl] = useRtl();
  const [isDark] = useDarkMode();
  const [skin] = useSkin();
  return (
    <>
      <div className=''>
        <AppNavbar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
