import ContactClient from "@/components/contactPage/ContactClient";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import { getDictionary } from "@/dictionaries";
import CallToAction from "@/ui/CallToAction";

const ContactUs = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <>
      <ContactClient dict={dict} locale={locale} />
      <TestimonialsSection dict={dict} />
    </>
  );
};

export default ContactUs;
