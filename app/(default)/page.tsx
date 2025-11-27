

export const metadata = {
  title: "Ly-Public",
  description: "Информационная платформа",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import StudioContent from "@/components/workflows";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      {/* <Workflows />
      <Features />
      <Testimonials />
      <Cta /> */}
    </>
  );
}

// export default function Home() {
//   const [currentSection, setCurrentSection] = useState('home');

//   const renderContent = () => {
//     switch(currentSection) {
//       case 'home':
//         return <Hero />;
//       case 'studio':
//         return <StudioContent />;
//       // case 'new':
//       //   return <NewContent />;
//       // case 'news':
//       //   return <NewsContent />;
//       // case 'posts':
//       //   return <PostsContent />;
//       default:
//         return <Hero />;
//     }
//   };

//   return (
//     <>
//       <PageIllustration />
//       {renderContent()}
//     </>
//   );
// }