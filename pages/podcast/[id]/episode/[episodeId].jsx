import { useRouter } from "next/router";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import { useState, useEffect, useContext } from "react";
import { Message_data } from "../../../../context/context";

export default function Episode() {
  const router = useRouter();
  const { id, episodeId } = router.query;
  const [podcast, setPodcast] = useState({});
  const { title, description } = useContext(Message_data);

  useEffect(() => {
    getPodcast();
  }, []);

  const getPodcast = async () => {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
    const finalRes = await res.json();
    setPodcast(finalRes.results[0]);
  };

  return (
    <>
      <Header />
      <div id="main" className="flex justify-between ">
        <Sidebar
          img={podcast.artworkUrl600}
          title={podcast.trackName}
          author={podcast.artistName}
          genres={podcast.genres}
        />
        <div className="flex flex-col w-3/5 p-3 rounded shadow shadow-gray-500">
          <h2 className="text-2xl font-semibold mb-3">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </>
  );
}
