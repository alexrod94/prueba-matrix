import Link from "next/link";

function PodcastCard({ id, img, title, author }) {
  return (
    <Link href={`/podcast/${id}`}>
      <div className="flex flex-col justify-between items-center p-3 rounded shadow-sm shadow-gray-700 h-[45vh]">
        <img src={img} className="w-3/5 mx-auto rounded-full" />
        <h2 className="text-center font-semibold text-md">
          {title.toUpperCase()}
        </h2>
        <p className="text-gray-500 text-sm font-semibold text-center">
          Author: {author}
        </p>
      </div>
    </Link>
  );
}

export default PodcastCard;
