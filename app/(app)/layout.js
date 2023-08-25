"use client";

import useRtl from "@/hooks/useRtl";
import useDarkMode from "@/hooks/useDarkMode";
import useSkin from "@/hooks/useSkin";
import Footer from "@/components/partials/app/Footer";
import AppNavbar from "@/components/partials/app/AppNavbar";

export default function AuthLayout({ children }) {
  const [isRtl] = useRtl();
  const [isDark] = useDarkMode();
  const [skin] = useSkin();
  return (
    <>
      <div className='font-open_sans'>
        <AppNavbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
