import { useQuery } from "@tanstack/react-query"
import { BooksService } from "../../openapi";

const useBookChapters = (bookId:string)=>{
    return useQuery({
        queryKey:["chapters",bookId],
        queryFn:async()=>{
            const response = await BooksService.apiBookApiGetBookChapters(parseInt(bookId));
            console.log(response)
            return response
        },
        staleTime: 1 * 60 * 1000, //1h
    });
}
export default useBookChapters;  