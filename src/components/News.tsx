import Link from "next/link";
import { FC } from "react";
import moment from "moment";
import { formatUrl } from "@/lib/helper";

interface NewsProps {
  item: Item;
  index: number;
}

const News: FC<NewsProps> = ({ item, index }) => {
  const formattedUrl = formatUrl(item.url);

  return (
    <div className="w-full  p-1 flex flex-col">
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
            {item.url && (
              <Link
                href={{
                  pathname: "from",
                  query: { site: formattedUrl },
                }}
                className="text-gray-500 text-sm font-mono hover:underline"
              >
                ({formattedUrl})
              </Link>
            )}
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
