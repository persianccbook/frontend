import { useQuery } from "@tanstack/react-query"
import { BooksService } from "../../openapi"

const useTopBooks = ()=>{
    return useQuery({
        queryKey:['top_books'],
        queryFn:async()=>{
            const response = BooksService.apiBookApiTopBooks()
            console.log(response)
            return response
        },
        staleTime: 1 * 60 * 1000, //1h
    })
}
export default useTopBooks