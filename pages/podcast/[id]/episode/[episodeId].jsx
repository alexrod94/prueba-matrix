import { useRouter } from "next/router";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import { useState, useEffect } from "react";
import Parser from "rss-parser";

export default function Episode() {
  const router = useRouter();
  const { id, episodeId } = router.query;
  const [podcast, setPodcast] = useState({});
  const [feed, setFeed] = useState([]);
  let parser = new Parser();

  useEffect(() => {
    getPodcast();
  }, []);

  const getPodcast = async () => {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
    const finalRes = await res.json();
    setPodcast(finalRes.results[0]);
    getEpisodes(finalRes.results[0].feedUrl);
  };

  const getEpisodes = async (url) => {
    let feed = await parser.parseURL(url);
    console.log(feed.items[0]);
    setFeed(feed.items);
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
        <div className="flex flex-col w-3/5 p-3 rounded shadow shadow-gray-500"></div>
      </div>
    </>
  );
}
