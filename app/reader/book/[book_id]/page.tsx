"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  params: {
    book_id: string;
  };
}

const ReaderBookPage = ({ params: { book_id } }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/reader/book/${book_id}/chapter/1/page/1`);
  });

  return <div>Loading...</div>;
};

export default ReaderBookPage;
