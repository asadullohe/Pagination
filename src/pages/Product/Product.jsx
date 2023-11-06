import React, { useState } from "react";
import { Pagination, ProductList, Spinner } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getProductList } from "../../services/api";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: products,
    isLoading,
    isFetched,
    error,
    isError,
    isPreviousData,
  } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getProductList(currentPage),
    keepPreviousData: true,
  });

  if (isLoading) return "loading";
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-mono text-center text-2xl my-5 underline font-bold">
        Pagination
      </h1>
      <div className="h-[80%]">
        <ProductList products={products} />
      </div>
      <div className="fixed z-5 bottom-0 p-[12px_20px] flex items-center justify-between">
        <Pagination
          totalItems={products.totalData}
          currentPage={currentPage}
          isPreviousData={isPreviousData}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {!isFetched && <Spinner />}
      </div>
    </div>
  );
};

export default Product;
