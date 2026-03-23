import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/ContactSection";

const ContactoPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactoPage;
