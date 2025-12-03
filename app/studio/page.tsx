export const metadata = {
  title: "Студия",
};

import PageIllustration from "@/components/page-illustration";
import PageStudio from "@/components/page-studio";
import Footer from "@/components/ui/footer";

export default function Studio() {
  return (
    <>
      <PageIllustration />
      <PageStudio />
      <Footer />
    </>
  );
}
