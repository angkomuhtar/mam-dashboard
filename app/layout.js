"use client";
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";
import { Provider } from "react-redux";
import store from "../store";
import { Mr_Dafoe, Open_Sans } from "next/font/google";

const mr_dafoe = Mr_Dafoe({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr_dafoe",
  weight: ["400"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open_sans",
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body
          className={`font-inter custom-tippy dashcode-app ${mr_dafoe.variable} ${open_sans.variable}`}>
          <Provider store={store}>{children}</Provider>
        </body>
      </html>
    </>
  );
}
