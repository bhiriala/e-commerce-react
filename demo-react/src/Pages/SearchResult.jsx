import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductInList from "../Components/ProductInList/ProductInList";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // ✅ Debounce search query (300ms delay)
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  console.log(debouncedQuery);

//   const filteredProducts = useMemo(() => {
//     if (!debouncedQuery || loading) return [];
//     return products.flatMap((list) =>
//       list.items.filter((product) =>
//         product.name.toLowerCase().includes(debouncedQuery)
//       )
//     );
//   }, [debouncedQuery, products, loading]);

  return (
    <div className="container">
      <h2>Search Results for "{query}"</h2>
      
    </div>
  );
}
