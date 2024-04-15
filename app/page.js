import ContactUs from "./_components/ContactUs";
import Education from "./_components/Education";
import { Experience } from "./_components/Experience";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

import Skills from "./_components/Skills";
import Works from "./_components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Works />
      <Experience />
      <Education />
      <ContactUs />

      <Footer />
    </>
  );
}
