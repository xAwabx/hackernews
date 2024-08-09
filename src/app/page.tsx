"use client";
import { useEffect, useState } from "react";
import News from "@/components/News";
import Image from "next/image";
import axios from "axios";
import { getItem, fetchIds } from "@/lib/fetch";

export default function Home() {
  const [data, setData] = useState<Item[] | null>(null);

  const fetchData = async () => {
    const ids: number[] = await fetchIds();
    console.log(ids);

    const p = ids.slice(0, 30)?.map(async (id) => {
      return getItem(id);
    });

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
    fetchData();
  }, []);

  return (
    // news
    <div>
      {data?.map((item, i) => {
        return <News item={item} key={item.id} index={i} />;
      })}
    </div>
  );
}
