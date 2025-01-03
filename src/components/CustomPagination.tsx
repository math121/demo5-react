import { useState } from "react";
import "../index.css";

export const CustomPagination = ({
  numPages,
  changeContent,
}: {
  numPages: number;
  changeContent: (pageNum: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const setToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      changeContent(currentPage - 1);
    }
  };

  const setToNextPage = () => {
    if (currentPage !== numPages) {
      setCurrentPage(currentPage + 1);
      changeContent(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="pagination">
        <span onClick={setToPrevPage}>{"<"}</span>

        {Array.from({ length: numPages }).map((_item, index) => (
          <span
            onClick={() => {
              setCurrentPage(index + 1);
              changeContent(index + 1);
            }}
            key={index}
          >
            {index + 1}
          </span>
        ))}
        <span onClick={setToNextPage}>{">"}</span>
      </div>
    </div>
  );
};
