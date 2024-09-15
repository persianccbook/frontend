import { useCallback, useEffect, useState } from "react";

const useInterval = (callback:()=>void,intervalTime:number,deps:any[]) =>{
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout|null>(null);
    const memoizedCallback = useCallback(callback, deps);

  useEffect(() => {
    if (intervalTime!== null) {
      const id = setInterval(callback, intervalTime);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [memoizedCallback, intervalTime]);

  return intervalId;
}

export default useInterval;