import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsAPI";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export default function ProductTable() {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error</div>;

  return (
    <div>
      {data?.map(
        (product: {
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => {
          return <div key={product.title}>{product.title}</div>;
        }
      )}
    </div>
  );
}
