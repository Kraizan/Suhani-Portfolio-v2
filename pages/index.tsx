import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Suhani</title>
        <meta name="description" content="Portfolio website of Suhani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Header />
        <div className="gallery-bg w-3/4 flex flex-col justify-between">
          <Gallery />
          <Footer />
        </div>
      </main>
    </>
  );
}
