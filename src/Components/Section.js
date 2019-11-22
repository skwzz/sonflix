import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.span``;
const Grid = styled.div``;

const Section = ({ title, children }) => (
  <Container>
    <Title>Title</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
