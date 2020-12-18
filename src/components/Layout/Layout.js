import React from 'react';
import styled from 'styled-components';

import Header from 'components/Layout/Header/Header';

const Container = styled.div`
  min-height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout(props) {
  return (
    <Container>
      <Header />
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
}

export default React.memo(Layout);
