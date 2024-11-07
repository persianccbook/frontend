import { useQuery } from "@tanstack/react-query"
import { AuthorService } from "../../openapi";

const useAuthor = (authorId:string)=>{
    return useQuery({
        queryKey:["author",authorId],
        queryFn:async()=>{
            const response = await AuthorService.apiAuthorApiGetAuthor(parseInt(authorId));
            console.log(response)
            return response
        },
        staleTime: 1 * 60 * 1000, //1h
    });
}
export default useAuthor;  