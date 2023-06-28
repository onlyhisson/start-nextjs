import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const jamsil = localFont({
  variable: "--font-jamsil",
  src: [
    {
      path: "./the-jamsil/The-Jamsil-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./the-jamsil/The-Jamsil-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./the-jamsil/The-Jamsil-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./the-jamsil/The-Jamsil-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./the-jamsil/The-Jamsil-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./the-jamsil/The-Jamsil-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
