import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Osborn Transport Services. Phone: 01525 383 548. Email, post or visit us at Gossard Park, Grovebury Road, Leighton Buzzard LU7 4SQ.",
};

export default function ContactPage() {
  return <ContactClient />;
}
