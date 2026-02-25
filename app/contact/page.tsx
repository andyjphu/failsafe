import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Contact — FailSafe by PhT Labs",
  description: "Get in touch with the FailSafe team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24 px-6">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
