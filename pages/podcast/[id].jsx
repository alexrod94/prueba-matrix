import { useRouter } from "next/router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useState, useEffect, useContext } from "react";
import Parser from "rss-parser";
import FeedItem from "../../components/FeedItem";
import Link from "next/link";
import { Message_data } from "../../context/context";

export default function Podcast() {
  const router = useRouter();
  const { id } = router.query;
  const [podcast, setPodcast] = useState({});
  const [feed, setFeed] = useState([]);
  const parser = new Parser();
  const { setTitle, setDescription } = useContext(Message_data);

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

  const handleClick = (title, description) => {
    setTitle(title);
    setDescription(description);
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
        <div className="flex flex-col w-3/5">
          <div className="p-3 font-semibold text-xl shadow shadow-gray-500 rounded mb-4">
            <p>Episodes: {feed.length}</p>
          </div>
          <div className="p-3 shadow shadow-gray-500 rounded mb-4">
            <div className="grid grid-cols-6 gap-x-3">
              <p className="col-span-4 font-semibold ">Title</p>
              <p className="font-semibold">Date</p>
              <p className="font-semibold text-center">Duration</p>
              <hr className="col-span-6 my-4" />
            </div>
            {feed.map((item) => (
              <Link
                onClick={() => handleClick(item.title, item.content)}
                href={`/podcast/${id}/episode/${item.guid}`}
              >
                <FeedItem
                  title={item.title}
                  duration={item.itunes.duration}
                  date={new Date(item.isoDate).toLocaleDateString()}
                ></FeedItem>
              </Link>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
