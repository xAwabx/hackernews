"use client";
import { FC } from "react";
import Link from "next/link";

interface MoreProps {
  currentPage: string;
}

const More: FC<MoreProps> = ({ currentPage }) => {
  return (
    <Link
      href={{ pathname: "/", query: { page: Number(currentPage) + 1 } }}
      className="text-black text-sm ml-6 font-mono"
    >
      More
    </Link>
  );
};

export default More;
