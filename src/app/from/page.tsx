import News from "@/components/News";
import { fetchIds, getItem } from "@/lib/fetch";
import { FC, useEffect, useState } from "react";

interface pageProps {
  searchParams: { ids: number[] };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const fetchData = async () => {
    const ids: number[] = searchParams.ids;
    console.log(ids);

    const p =
      typeof ids !== "string"
        ? ids.slice(0, 30)?.map(async (id) => {
            return getItem(id);
          })
        : [getItem(ids)];

    return await Promise.all(p);
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
