import Parser from "rss-parser";
import { useState } from "react";
export default function Feed() {
  const [feed, setFeed] = useState(null);
  let parser = new Parser();

  (async () => {
    let feed = await parser.parseURL("https://www.reddit.com/.rss");
    setFeed(feed.items);
    console.log(setFeed);
  })();

  return (
    <>
      <h2>Hola desde feed</h2>
      {feed.map((item) => (
        <>
          <h2>{item.title}</h2>
          <p>{item.link}</p>
        </>
      ))}
    </>
  );
}
