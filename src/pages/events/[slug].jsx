import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity";
import { urlFor } from "../../../sanity";
import RichText from "../../components/RichText";
import serializers from "../../shared/serializers";
import Head from "next/head";
const Event = ({ event }) => {
  const coordinators = event.coordinator;

  return (
    <>
      <Head>
        <title>Sanskriti - {event.title}</title>
        <meta name='description' content='F.E.T.S.U. presents Sanskriti 2023' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <article className='mt-20 px-6 md:px-24 pb-10 '>
        <section className='space-y-2 text-zinc-200'>
          <div className='relative h-56 md:h-96 flex flex-col md:flex-row justify-between'>
            <div className='absolute top-0 w-full h-full p-10 shadow-lg'>
              <Image
                className='object-cover object-center mx-auto opacity-30'
                src={urlFor(event.backgroundImage).url()}
                alt={event.title}
                fill
              />
            </div>
          </div>
        </section>
        <section>
          <div className=''>
            <h1 className='SanskritiFont py-8 text-center text-4xl md:text-8xl text-zinc-200 underline underline-offset-8'>
              {event.title}
            </h1>
          </div>
        </section>
        <div className='md:flex justify-around'>
          <section className=' text-zinc-300 rounded-md zinc-200 space-pre-line'>
            <h2 className='text-zinc-200 ProgressFont text-center md:text-left'>
              Event Guidelines
            </h2>
            <RichText blocks={event.eventDetails} serializers={serializers} />
            <div className='flex flex-col gap-8 pl-4'>
              {event.prelims_date && (
                <div>
                  <h2 className='text-zinc-200 ProgressFont md:text-left text-center'>
                    Prelims
                  </h2>
                  <div className='py-4'>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Date :{" "}
                      <span className='CaptainFont'>{event.prelims_date} </span>
                    </h3>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Time :{" "}
                      <span className='CaptainFont'>{event.prelims_time} </span>
                    </h3>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Venue :{" "}
                      <span className='CaptainFont '>
                        {event.prelims_venue}{" "}
                      </span>
                    </h3>
                  </div>
                </div>
              )}
              {event.finals_date && (
                <div className=''>
                  <h2 className='text-zinc-200 ProgressFont md:text-left text-center '>
                    Finals
                  </h2>
                  <div className='py-4'>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Date :{" "}
                      <span className='CaptainFont'>{event.finals_date} </span>
                    </h3>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Time :{" "}
                      <span className='CaptainFont'>{event.finals_time} </span>
                    </h3>
                    <h3 className='ProgressFont md:text-xl tracking-widest'>
                      Venue :{" "}
                      <span className='CaptainFont'>{event.finals_venue} </span>
                    </h3>
                  </div>
                </div>
              )}
              {event.date && (
                <div>
                  <h2 className='text-zinc-200 ProgressFont text-center md:text-left'>
                    Details
                  </h2>
                  <div className='py-4 text-xl'>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Date : <span className='CaptainFont'>{event.date} </span>
                    </h3>
                    <h3 className='ProgressFont md:text-xl tracking-widest '>
                      Time : <span className='CaptainFont'>{event.time} </span>
                    </h3>
                    <h3 className='ProgressFont md:text-xl tracking-widest'>
                      Venue :{" "}
                      <span className='CaptainFont'>{event.venue} </span>
                    </h3>
                  </div>
                </div>
              )}
            </div>

            <div className='text-rose-600 pl-4 py-2 text-lg'>
              <p className='font-bold ProgressFont'>
                participants must reach{" "}
                <span className='CaptainFont md:text-xl tracking-widest py-1'>
                  30
                </span>{" "}
                minutes prior to the event
              </p>
              <p className='text-zinc-300 text-sm capitalize font-medium py-1'>
                *on spot registrations to be done on the day of event
              </p>
              <br />
              <p className='text-zinc-300 text-sm capitalize font-medium'>
                * on spot registrations to be done by first come first serve
                basis
              </p>
            </div>
          </section>
          <section>
            <div className=' tracking-wider flex flex-col gap-4'>
              <div>
                <h2 className='text-zinc-200 ProgressFont  text-center md:text-left pb-4'>
                  Coordinators
                </h2>
                {coordinators.map((coordinator) => (
                  <p
                    key={coordinator.name}
                    className='text-zinc-200 CaptainFont text-2xl text-center md:text-left'>
                    {coordinator.name} - +91 {coordinator.contact}{" "}
                  </p>
                ))}
              </div>
              {event.deadline && (
                <div cl>
                  <h2 className='ProgressFont text-zinc-200 text-center md:text-left pb-4 '>
                    Deadline
                  </h2>
                  <p className=' CaptainFont text-2xl text-center md:text-left text-rose-600 '>
                    {event.deadline}
                  </p>
                </div>
              )}
              <div>
                <Link
                  key={event.slug.current}
                  href={event.registrationLink}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button
                    className={`w-full h-10 rounded-sm  text-xl md:text-2xl text-zinc-200 uppercase CaptainFont leading-none
                                tracking-wider ${
                                  event.registrationStatus === "closed"
                                    ? "bg-rose-600  hover:bg-rose-800 "
                                    : "bg-emerald-600  hover:bg-emerald-800"
                                } `}>
                    {event.registrationStatus === "closed"
                      ? "Registrations  Closed"
                      : "Register Here"}
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className='py-8'>
          <hr />
        </div>
      </article>

      <Footer />
    </>
  );
};

export default Event;

export async function getServerSideProps(context) {
  const { query } = context;
  const eventQuery = `*[_type=="event" && slug.current=='${query.slug}'][0]{...,coordinator[]->}`;
  let event = await client.fetch(eventQuery);
  return {
    props: {
      event,
    },
  };
}
