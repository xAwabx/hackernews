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
      className="text-gray-500 text-sm ml-6"
    >
      More
    </Link>
  );
};

export default More;
