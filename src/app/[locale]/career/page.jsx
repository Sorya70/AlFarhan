import CareerClient from "@/components/careerPage/CareerClient";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import { getDictionary } from "@/dictionaries";

const CareerPage = async ({ params }) => {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return (
    <>
      <CareerClient dict={dict} locale={locale} />
      <TestimonialsSection dict={dict} />
    </>
  );
};

export default CareerPage;
  