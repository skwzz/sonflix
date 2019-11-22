import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ movieResult, tvResult, loading, error }) => null;
SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default SearchPresenter;
