import React, { ChangeEvent } from "react";
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPagination } from "@material-ui/lab";

import type { ArticleListContext } from "../gatsby-node";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: `wrap`,
    justifyContent: "center",
    alignItems: "center",
  },
}));

type PaginationProps = {
  pageContext: ArticleListContext;
};

const Pagination: React.FC<PaginationProps> = ({ pageContext }) => {
  const classes = useStyles();
  const { numPages, currentPage } = pageContext;

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    if (pageContext.category != undefined) {
      value == 1
        ? navigate(`/category/${pageContext.category}`)
        : navigate(`/category/${pageContext.category}/${value}`);
    } else {
      value == 1 ? navigate("/") : navigate(`/articles/${value}`);
    }
  };

  return (
    <div className={classes.root}>
      <MuiPagination
        size="medium"
        defaultPage={currentPage}
        count={numPages}
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
