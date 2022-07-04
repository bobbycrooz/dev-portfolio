import styled from "styled-components";

const Section = styled.section`
  min-height: 70vh;

  .card_slider_rail {
    /* height: auto; */

    .card_item {
      width: 400px;
      height: 250px;

      .thumbnail {
        top: 10px;
        left: -40px;
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export { Section as default };
