import { useInfiniteQuery } from "@tanstack/react-query";
import { BooksService, PaginatedBooksSchema } from "../../openapi";

const useBooks = () => {
    return useInfiniteQuery({
        queryKey:["books"],
        queryFn:async({ pageParam })=>{
            const response = await BooksService.apiBookApiGetAllBooks(12, pageParam);
            console.log('API response:', response);
            return response;
        },
        initialPageParam:0,
        getNextPageParam: ({data:{payload:data}}:PaginatedBooksSchema) => {
            return data.next_page == -1?undefined:data.next_page
        },
        getPreviousPageParam:({data:{payload:data}}:PaginatedBooksSchema) => {
            return data.prev_page == -1?undefined:data.prev_page
        },
        staleTime: 1 * 60 * 1000, //1h
    })
}
export default useBooks;