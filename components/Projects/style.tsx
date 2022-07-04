import styled from "styled-components";

interface Props {
  isMobile?: boolean;

}

const Section = styled.section`
  width: 100%;

  .box_description {
    /* width: 600px; */

    .description {
      /* width: 700px; */
      z-index: 222;
    }
  }
`;

const CardLayout = styled.div<Props>`
  width: 100%;

  .box_description {
    /* width: 600px; */

    .description {
      /* width: 700px; */
      z-index: 222;
    }
  }

  &:hover {
    .portfolio-image {
      transform: scale(1.4);
      transform: ${({isMobile}) =>  isMobile ? "scale(1.01)" : "scale(1.4)"};
      border: 0.5px solid #fba1da4a;
      box-shadow: 20px 20px 0px 0px #fba1da4a;
    }
  }


`;

export { Section as default, CardLayout };
