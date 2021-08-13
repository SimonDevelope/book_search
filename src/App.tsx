import React, { useEffect, useState } from 'react';
import './Styles/reset.scss';
import { KakaoApi } from './API/Api';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    KakaoApi().then((response) => {
      console.log(response);
      console.log(list);
      console.log(setList);
    });
  }, []);

  return <div></div>;
}

export default App;
