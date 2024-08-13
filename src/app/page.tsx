import More from "@/components/More";
import News from "@/components/News";
import { getItem, fetchIds } from "@/lib/fetch";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = searchParams["page"] ?? "1";
  const page_size = 20;

  const start = (Number(page) - 1) * Number(page_size);
  const end = start + Number(page_size);
  const fetchData = async () => {
    const ids: number[] = await fetchIds();
    const p = ids.slice(start, end)?.map(async (id) => {
      return getItem(id);
    });

    return await Promise.all(p);
  };

  const data = await fetchData();

  return (
    // news
    <div>
      {data?.map((item, i) => {
        return <News item={item} key={item.id} index={i + start} />;
      })}
      <More currentPage={page} />
    </div>
  );
}
