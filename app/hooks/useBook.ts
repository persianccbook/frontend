import { useQuery } from "@tanstack/react-query"
import { BooksService } from "../../openapi";

const useBook = (bookId:string)=>{
    return useQuery({
        queryKey:["book",bookId],
        queryFn:async()=>{
            const response = await BooksService.apiBookApiGetBook(parseInt(bookId));
            console.log(response)
            return response
        },
        staleTime: 1 * 60 * 1000, //1h
    });
}
export default useBook;  