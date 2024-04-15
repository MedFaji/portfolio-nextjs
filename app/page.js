import ContactUs from "./_components/ContactUs";
import Education from "./_components/Education";
import { Experience } from "./_components/Experience";
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

      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4"></div>
      </footer>
    </>
  );
}
