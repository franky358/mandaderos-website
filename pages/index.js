import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Faq from "../components/faq";
import WhatsappWidget from "../components/whatsappWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mandaderos - Entregas a domicilio</title>
        <meta
          name="description"
          content="Red de mandaderos para que comercios informales puedan vender por internet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Los mandaderos" title="¿De qué trata todo esto?">
        Implementamos un método para que negocios como el tuyo puedan vender por
        internet sin pagar excesivas comisiones. Tenemos disponible una red de
        "mandaderos" que se encargaran de gestionar todo el proceso de compra y
        entrega de los pedidos.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta /> */}
      <SectionTitle pretitle="FAQ" title="Preguntas frecuentes">
        Entendemos que puedes tener dudas de como podrías vender tus productos
        por internet, si no resuelves tus dudas con las siguientes preguntas no
        dudes en contactar a un asesor.
      </SectionTitle>
      <Faq />
      <Footer />
      {/* <PopupWidget /> */}
      <WhatsappWidget />
    </>
  );
};

export default Home;
