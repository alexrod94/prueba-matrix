function FeedItem({ title, date, duration }) {
  return (
    <div className="grid grid-cols-6 gap-3">
      <p className="col-span-4">{title}</p>
      <p>{date}</p>
      <p>{duration}</p>
      <hr className="col-span-6 my-4" />
    </div>
  );
}

export default FeedItem;
