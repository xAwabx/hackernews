"use client";
import News from "@/components/News";
import { fetchIds, getItem } from "@/lib/fetch";
import { FC, useEffect, useState } from "react";

interface pageProps {
  searchParams: { ids: number[] };
}

const page: FC<pageProps> = ({ searchParams }) => {
  const [data, setData] = useState<Item[]>();

  const fetchData = async () => {
    const ids: number[] = searchParams.ids;
    console.log(ids);

    const p =
      typeof ids !== "string"
        ? ids.slice(0, 30)?.map(async (id) => {
            return getItem(id);
          })
        : [getItem(ids)];

    Promise.all(p)
      .then((value: Item[]) => {
        console.log(value);
        setData(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(typeof searchParams.ids);
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((item, i) => {
        return <News item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default page;
