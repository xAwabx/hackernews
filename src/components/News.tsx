import Link from "next/link";
import { FC } from "react";
import moment from "moment";

interface NewsProps {
  item: Item;
  index: number;
}

const News: FC<NewsProps> = ({ item, index }) => {
  const formatUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname.replace("www.", "");
      const path = urlObj.pathname.split("/").filter(Boolean);

      if (path.length === 0) {
        return domain;
      }

      return `${domain}/${path[0]}`;
    } catch (error) {
      console.error("Invalid URL:", url);
      return url;
    }
  };

  return (
    <div className="w-full bg-[#F6F6EF] p-1 flex flex-col">
      {/* heading */}
      <div className="flex flex-row gap-1">
        <h1 className="text-gray-500 text-sm font-mono">{index + 1}.</h1>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <a
              href={item.url}
              className="text-gray-900 text-md font-mono tracking-tighter"
            >
              {item.title}
            </a>
            <Link
              href={{
                pathname: "from",
                query: { ids: item.descendants },
              }}
              className="text-gray-500 text-sm font-mono hover:underline"
            >
              ({formatUrl(item.url)})
            </Link>
          </div>
          <div className="flex flex-row text-gray-500 text-xs">
            <h1>
              {item.score} points by {item.by}{" "}
              {moment().diff(moment.unix(item.time), "hours")} hours ago
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
