import { useRouter } from "next/router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import Parser from "rss-parser";

export default function Podcast() {
  const router = useRouter();
  const { id } = router.query;
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
    console.log(finalRes.results[0]);
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
      <div id="main" className="grid grid-cols-2 gap-x-24">
        <Sidebar
          img={podcast.artworkUrl160}
          title={podcast.trackName}
          author={podcast.artistName}
          // description={podcast.}
        />
        <div className="flex flex-col">
          {feed.map((item) => (
            <>
              <h2>{item.title}</h2>
              <p>{item.link}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
