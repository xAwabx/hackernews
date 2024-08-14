import News from "@/components/News";
import { fetchIds, getItem } from "@/lib/fetch";
import { formatUrl } from "@/lib/helper";
import { FC, useEffect, useState } from "react";

interface pageProps {
  searchParams: { site: string; ids: number[] };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const site: string = searchParams.site;
  console.log(site);
  const ids: number[] = searchParams.ids;
  console.log(ids);

  const fetchData = async () => {
    const ids: number[] = await fetchIds();
    const p = ids?.map(async (id) => {
      return getItem(id);
    });

    const data = await Promise.all(p);
    const filteredData: Item[] = data.filter((item) => {
      const url = formatUrl(item.url) ?? "";
      if (url === site) {
        return item;
      }
    });
    return filteredData;
  };

  const data = await fetchData();

  return (
    <div>
      {data?.map((item, i) => {
        return <News item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default page;
