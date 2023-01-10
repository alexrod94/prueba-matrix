import Link from "next/link";

function Header() {
  return (
    <>
      <Link href="/">
        <h2 className="text-blue-500 text-xl font-semibold p-3">Podcaster</h2>
      </Link>
      <hr className="mb-8" />
    </>
  );
}

export default Header;
