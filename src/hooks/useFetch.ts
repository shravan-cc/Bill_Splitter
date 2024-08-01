import { useState } from "react";

function useFetch<T>(url: string) {
  const [responseData, setData] = useState<T>({
    status: "pending",
    data: null,
  });
}
