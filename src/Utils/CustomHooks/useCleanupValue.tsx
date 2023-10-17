import React, { useState, useEffect } from "react";

// this hook is used for animations and transitions
// it will return original value and then after setAmount of time
// it will return empty string or second parameter

type UseCleanupValue = {
  isIntersecting: boolean;
   value: string;
   cleanupValue?: string;
   timeout?: number;
};

const useCleanupValue = ({
  isIntersecting,
   value,
   cleanupValue,
   timeout = 3000,
}: UseCleanupValue) => {
   const [useCleanUpValue, setUseCleanUpValue] = useState(value);

   useEffect(() => {
      if (isIntersecting) {
         setTimeout(() => {
            setUseCleanUpValue(cleanupValue ? cleanupValue : "");
         }, timeout);
      }
   }, [isIntersecting]);
   return useCleanUpValue;
};

export default useCleanupValue;
