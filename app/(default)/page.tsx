export const metadata = {
  title: "Главная",
  description: "Информационная платформа",
};

import PageIllustration from "@/components/page-illustration";
import Main from "@/components/main";
import Footer from "@/components/ui/footer";
import StudioContent from "@/components/workflows";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Main />
      <Footer />
      {/* <Workflows />
      <Features />
      <Testimonials />
      <Cta /> */}
    </>
  );
}

