import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar />
      </main>

      <div></div>
    </div>
  );
}
