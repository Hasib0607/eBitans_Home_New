import CompanyLogo from "@/components/home/CompanyLogo";
import Dream from "@/components/home/Dream";
import Hero from "@/components/home/Hero";
import Pse from "@/components/home/Pse";
import Services from "@/components/home/Services";
// import Testimonials from "@/components/home/Testimonials";
import Theme from "@/components/home/Theme";
import Work from "@/components/home/Work";
import Register from "@/components/home/Register";

import RegisterMiddle from "@/components/home/RegisterMiddle";

export const metadata = {
  title: {
    absolute: "eBitans | Most Popular E-Commerce Website Builder in Bangladesh",
  },
};

const Home = async ({ params: { locale } }) => {
  return (
    <main className="">
      <Hero locale={locale} />
      <CompanyLogo />
      <Dream />
      <Services />
      <RegisterMiddle />
      <Theme />
      {/* <Testimonials /> */}
      <Pse />
      <Work />
      <Register />
    </main>
  );
};

export default Home;
