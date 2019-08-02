import React from 'react';

import { Container, Label,  } from './styles';

export default function Card() {
  return (  
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Criando método POST da API.</p>
      <img src="https://api.adorable.io/avatars/66/abott@adorable.io.png" alt=""/>
    </Container>
  );
}
