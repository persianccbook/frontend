import { useQuery } from "@tanstack/react-query";
import { AuthorService } from "../../openapi";

interface AuthorBooksQuery {
    authorId:number,
    pageNumber:number,
    pageSize:number
}

const useAuthorBooks = (query:AuthorBooksQuery) => {
    return useQuery({
        queryKey:["books",query],
        queryFn:async()=>{
            const response = await AuthorService.apiAuthorApiGetAuthorBooks(query.authorId,query.pageSize,query.pageNumber);
            console.log('API response:', response);
            return response;
        },
        staleTime: 1 * 60 * 1000, //1h
    })
}
export default useAuthorBooks;