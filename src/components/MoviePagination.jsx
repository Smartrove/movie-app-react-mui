import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/system";

const PaginationContainer = () => {
  const StyledPagination = styled(Pagination)({
    "& .MuiPagination-ul li:last-child": {
      marginLeft: "16px",
    },
    "& .MuiPagination-ul li:last-child button::before": {
      content: "'Next'",
      marginRight: "8px",
    },
    "& .MuiPagination-ul li:first-child": {
      marginRight: "16px",
    },
    "& .MuiPagination-ul li:first-child button::after": {
      content: "'Previous'",
      marginLeft: "8px",
    },
  });

  return <StyledPagination count={10} />;
};

const MoviePagination = ({
  setPagination,
  NumberOfPages = 900,
  handleChange,
}) => {
  // const handlePaginationChange = (event, value) => {
  // setPagination();
  //   window.scrollTo(0, 0);
  //   console.log(value)
  // };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Pagination
        count={NumberOfPages}
        onChange={handleChange}
        shape="rounded"
        color="success"
      />
    </div>
  );
};

export default MoviePagination;
