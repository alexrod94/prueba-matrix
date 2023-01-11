import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };
    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router.events]);
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <h2 className="text-blue-500 text-xl font-semibold p-3">Podcaster</h2>
        </Link>
        {loading && <p>Loading...</p>}
      </div>
      <hr className="mb-8" />
    </>
  );
}

export default Header;
