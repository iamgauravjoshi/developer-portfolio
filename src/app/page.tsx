import Hero from '@/components/hero/Hero';
import Marquee from '@/components/sections/Marquee';
import ClientWork from '@/components/sections/ClientWork';
import ProfessionalWork from '@/components/sections/ProfessionalWork';
import Engineering from '@/components/sections/Engineering';
import Experience from '@/components/sections/Experience';
import Toolkit from '@/components/sections/Toolkit';
import { Philosophy, About, Currently } from '@/components/sections/Editorial';
import { BucketList, ThingsILove } from '@/components/sections/Beyond';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <ClientWork />
      <ProfessionalWork />
      <Engineering />
      <Experience />
      <Toolkit />
      <Philosophy />
      <About />
      <Currently />
      <BucketList showLink />
      <ThingsILove />
      <Contact />
    </main>
  );
}
