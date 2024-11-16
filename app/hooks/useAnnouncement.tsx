import { useQuery } from "@tanstack/react-query"
import { InfoService } from "../../openapi";

const useAnnouncement = ()=>{
    return useQuery({
        queryKey:['announcement'],
        queryFn:async()=>{
            const response = await InfoService.apiInfoApiGetAnnouncement();
            console.log(response)
            return response
        },
        staleTime: 1 * 60 * 1000, //1h
    });
}
export default useAnnouncement;  