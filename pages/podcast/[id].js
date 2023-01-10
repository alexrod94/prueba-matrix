import { useRouter } from "next/router";
import Header from "../../components/Header";

export default function Podcast() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <p>Podcast nº {id}</p>
    </>
  );
}
