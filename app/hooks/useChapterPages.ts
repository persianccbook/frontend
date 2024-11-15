import { useQuery } from "@tanstack/react-query"
import { BooksService } from "../../openapi";

const useChapterPages = (bookId:string,chapterNumber:string)=>{
    return useQuery({
        queryKey:["chapter_pages",bookId,chapterNumber],
        queryFn:async()=>{
            const response = await BooksService.apiBookApiGetChapterPages(parseInt(bookId),parseInt(chapterNumber));
            console.log(response)
            return response
        },
        staleTime: 1 * 60 * 1000, //1h
    });
}
export default useChapterPages;  