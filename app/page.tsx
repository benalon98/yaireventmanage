import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "יאיר אישורי הגעה | פאנל ניהולי",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
