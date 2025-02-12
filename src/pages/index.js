import Head from "next/head";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import Performance from "../components/Performance";
import Events from "../components/Events";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer"
import { client } from "../../sanity";


export default function Home({ about, events, sponsors, images, landingPageInfo, artist }) {
  return (
    <>
      <Head>
        <title>Sanskriti 2024 - Official Website</title>
        <meta name="description" content="F.E.T.S.U. presents Sanskriti 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <section id="home">
          <LandingPage landingPageInfo={landingPageInfo} />
        </section>
        <section id="about">
          <About about={about} />
        </section>
        {/* <section>
          <Countdown />
        </section> */}
        <section id="performance">
          <Performance artist={artist} />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="events">
          <Events events={events} />
        </section>
        <section id="gallery">
          <Gallery images={images} />
        </section>
        <section id="sponsors">
          <Sponsors sponsors={sponsors} />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const eventsQuery = `*[_type=="event"]|order(id asc)`;
  const sponsorQuery = `*[_type=="sponsor"]`;
  const galleryQuery = `*[_type=="gallery"]`;
  const aboutQuery = `*[_type=="about"]`;
  const landingPageQuery = `*[_type=="landingPage"]`;
  const artistQuery = `*[_type=="artist"]|order(index asc)`;
  const events = await client.fetch(eventsQuery);
  const sponsors = await client.fetch(sponsorQuery);
  const images = await client.fetch(galleryQuery);
  const about = await client.fetch(aboutQuery);
  const artist = await client.fetch(artistQuery);
  const landingPageInfo = await client.fetch(landingPageQuery);
  return {
    props: {
      about,
      events,
      sponsors,
      images,
      artist,
      landingPageInfo
    },
  };
}