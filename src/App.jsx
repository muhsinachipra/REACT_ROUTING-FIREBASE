import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Firebase } from './firebase/config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


function App() {

  return (
    <div className="App">
      <button onClick={async () => {

        const snapshot = await getDocs(collection(getFirestore(Firebase), 'products'));
        snapshot.forEach((obj) => {
          console.log(obj.data());
        })

        // const db = getFirestore(Firebase);
        // const prodtCol = collection(db, 'products');
        // const prodtSnapshot = await getDocs(prodtCol);
        // const prodtList = prodtSnapshot.forEach((obj) => {
        //   console.log(obj.data());
        // })
        // return prodtList

      }}>click me</button>
    </div>
  )
}

export default App
