import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [candel, setCandel] = useState(0);

  const {id, image, description, price} = data[candel];

  const [showText, setShowText] = useState(false);

  const nextCandel = () => {
    setCandel ((candel => {
      candel ++;
      if (candel > data.length - 1) {
        candel = 0;
      }
      return candel;
    }))
  }

  const previousCandel = () => {
    setCandel ((candel => {
      candel --;
      if (candel < 0) {
        return data.length - 1;
      }
      return candel;
    }))
  }

  return (
    <div>
     <div className='container'>
     <h1>Выбери свою аромасвечу из соевого воска:</h1>
     </div>

     <div className='container'>
      <img src={image} width='300px' alt='candel'/>
     </div>

     <div className='container'>
      <p>{id} - {showText ? description : description.substring(0, 48) + '...'}
      <button className='btn' onClick={() => setShowText(!showText)}>{showText ? 'Показать меньше' : 'Показать больше'}</button>
      </p>
     </div>

     <div className='container'>
      <h2>{price}</h2>
     </div>

     <div className='btn-container'>
      <button className='btn-button' onClick={previousCandel}>Previous</button>
      <button className='btn-button' onClick={nextCandel}>Next</button>
     </div>
    </div>
  );
}

export default App;
