import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/ContactSection";
import { PageTransition } from "@/components/PageTransition";

const ContactoPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </PageTransition>
  );
};

export default ContactoPage;
