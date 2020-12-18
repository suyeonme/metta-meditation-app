import React from 'react';
import styled from 'styled-components';

import { BigTitle } from 'style/style';
import Figure from 'assets/figure-3.svg';

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FigureIcon = styled.img`
  width: 30rem;
  height: auto;
  transform: translateY(7rem);

  @media (max-width: 1200px) {
    width: 40rem;
  }

  @media (max-width: 900px) {
    width: 20rem;
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    width: 16rem;
  }

  @media (max-width: 320px) {
    width: 14rem;
  }
`;

const Span = styled.span`
  display: block;
  width: 80%;
  margin-top: 5rem;

  @media (max-width: 900px) {
    width: 100%;
    font-size: 2.3rem;
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    padding: 0 10px;
  }

  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

function Congraturation() {
  return (
    <Container>
      <FigureIcon src={Figure} />
      <BigTitle>
        Congraturation!
        <Span>I wish you have a good day.</Span>
      </BigTitle>
    </Container>
  );
}

export default Congraturation;

// const Container = styled.div`
//   overflow: hidden;
//   width: 100vw;
//   height: 92vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 900px) {
//     flex-direction: column;
//   }
// `;

// const FigureIcon = styled.img`
//   width: 30rem;
//   height: auto;
//   transform: translateY(7rem);

//   @media (max-width: 1200px) {
//     width: 40rem;
//   }

//   @media (max-width: 900px) {
//     width: 20rem;
//     transform: translateY(0);
//   }

//   @media (max-width: 576px) {
//     width: 16rem;
//   }

//   @media (max-width: 320px) {
//     width: 14rem;
//   }
// `;

// const CongratTitle = styled.h1`
//   font-weight: 400;
//   font-size: 3.5rem;

//   @media (max-width: 900px) {
//     font-size: 2.8rem;
//   }

//   @media (max-width: 900px) {
//     text-align: center;
//   }

//   @media (max-width: 576px) {
//     font-size: 2.5rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 2.2rem;
//   }
// `;

// const Span = styled.span`
//   display: block;
//   width: 80%;
//   margin-top: 5rem;

//   @media (max-width: 900px) {
//     width: 100%;
//     font-size: 2.3rem;
//     text-align: center;
//     margin-top: 2rem;
//   }

//   @media (max-width: 576px) {
//     font-size: 2rem;
//     padding: 0 10px;
//   }

//   @media (max-width: 320px) {
//     font-size: 1.6rem;
//   }
// `;

// function Congraturation() {
//   return (
//     <Container>
//       <FigureIcon src={Figure} />
//       <CongratTitle>
//         Congraturation!
//         <Span>I wish you have a good day.</Span>
//       </CongratTitle>
//     </Container>
//   );
// }

// export default Congraturation;
