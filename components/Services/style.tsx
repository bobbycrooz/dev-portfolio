import styled from "styled-components";

const Section = styled.section`
  height: auto;

  .service_card {
    height: 300px;
    /* border: 1px solid blue; */
    box-shadow: 0 0 2px 0 #0000004a;
    transition: all 0.3s linear;

    &_name,
    &_details,
    .box_icon {
      z-index: 3;
      color: #111016;
      transition: all 0.3s linear;
    }

    &_details {
      color: #716f8a;
    }

    button {
      color: #f0f0f0;
      z-index: 3;

      background-color: #716f8a;
    }
    .arc {
      top: -0px;
      right: 0;
      width: 50px;
      height: 50px;
      border-top-right-radius: 0.375rem;
      border-bottom-left-radius: 100%;
      z-index: 2;
      transition: all 0.3s linear;
      background-color: #716f8a;
      p {
        color: #f0f0f0;
      }
    }

    &:hover {
      transform: translateY(-5px);
      .arc {
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 0;
        transition: all 0.2s linear;
        p {
          color: #f0f0f0;
        }
      }

      .service_card_name,
      .box_icon,
      .service_card_details {
        color: white;
        /* font-size: 40px; */
        transition: all 0.3s linear;
      }

      button {
        color: #111016;
        background-color: #f0f0f0;
      }
    }
  }
`;

export { Section as default };
