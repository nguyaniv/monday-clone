import { useState } from 'react';
import Header from './cmps/Header/Header';
import Wrapper from './wrapper/Wrapper';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper toggle={toggle} setToggle={setToggle}>
      <Header />
    </Wrapper>
  );
}

export default App;
