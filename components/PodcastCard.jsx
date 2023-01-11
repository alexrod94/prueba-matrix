import Link from "next/link";

function PodcastCard({ id, img, title, author }) {
  return (
    <Link href={`/podcast/${id}`}>
      <div className="flex relative flex-col justify-between items-center px-3 pb-3 pt-24 h-[30vh] rounded shadow-sm shadow-gray-700">
        <img
          src={img}
          className="w-3/5 mx-auto rounded-full absolute top-[-20%]"
        />
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
