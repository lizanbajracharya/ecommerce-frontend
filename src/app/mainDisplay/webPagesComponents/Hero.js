import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../../../assets/285693802_715304896468675_625792164962586105_n.png";
import heroBcg2 from "../../../assets/gadgets float over hand.jpg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Buy Your <br />
          needed device
        </h1>
        <p>
          For some years, purchasing electrical appliances has been the most
          popular internet activity. With the rapid growth of electronic
          inventions such as mobile phones, laptops, televisions, tablets, and
          CCTV security cameras, as well as people's frequent access to the
          internet, online marketplaces have become the go-to destination for
          those looking for convenient and high-quality purchasing. You can
          order the goods you desire at a reasonable cost.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
