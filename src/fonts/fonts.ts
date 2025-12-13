import { Aref_Ruqaa_Ink, Reem_Kufi_Ink } from "next/font/google";

export const arefRuqaaInk = Aref_Ruqaa_Ink({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const reemKufiInk = Reem_Kufi_Ink({
  weight: ["400"],
  subsets: ["latin", "arabic"],
  display: "swap",
});