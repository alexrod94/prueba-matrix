import { useEffect, useState } from "react";

function FeedItem({ title, date, duration }) {
  const [minutes, setMinutes] = useState("");
  useEffect(() => {
    secondsToMMSS();
  }, []);

  const secondsToMMSS = () => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor(duration / 60 - 60);
    const seconds = duration % 60;
    if (duration >= 3600) {
      const minutes = Math.floor(duration / 60 - 60);

      setMinutes(
        `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    } else {
      const minutes = Math.floor(duration / 60);

      setMinutes(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    }
  };

  return (
    <div className="grid grid-cols-6 gap-3">
      <p className="col-span-4">{title}</p>
      <p>{date}</p>
      <p className="text-center">{minutes}</p>
      <hr className="col-span-6 my-4" />
    </div>
  );
}

export default FeedItem;
