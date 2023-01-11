function Sidebar({ img, title, author, genres }) {
  return (
    <div className="shadow shadow-gray-500 flex flex-col p-3 w-1/3 rounded h-[70vh]">
      <img src={img} className="w-3/5 mx-auto rounded" />
      <hr className="my-4" />
      <p className="font-semibold">{title}</p>
      <p className="italic">by {author}</p>
      <hr className="my-4" />
      {genres && (
        <p className="text-sm font-semibold">
          Géneros:{" "}
          {genres.map((genre) => (
            <span className="italic font-light">{genre}, </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default Sidebar;
