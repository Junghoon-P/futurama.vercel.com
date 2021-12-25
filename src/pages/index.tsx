import Head from "next/head";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/info",
    fetcher
  );
  if (error) return "An error has occured.";
  if (!data) return "Loading...";

  return (
    <div>
      <Head>
        <title>Futurama : The Animations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Futurama</h1>
        <p>
          Creator :
          {data[0].creators.map((creator) => {
            return <p key={`creator-${creator.name}`}>{creator.name}</p>;
          })}
        </p>
      </main>
    </div>
  );
}
