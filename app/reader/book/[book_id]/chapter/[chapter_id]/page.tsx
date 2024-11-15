"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  params: {
    book_id: string;
    chapter_id: string;
  };
}

const page = ({ params: { book_id, chapter_id } }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/reader/book/${book_id}/chapter/${chapter_id}/page/1`);
  }, []);

  return <div>Loading...</div>;
};

export default page;
