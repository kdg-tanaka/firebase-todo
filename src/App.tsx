import './App.css';
import TodoInput from './components/TodoInput';
// import TodoItem from './components/TodoItem';
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from './firebase';
import { TodoList } from './components/TodoList';

// async function addDocument() {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// }

function App() {
  // addDocument(); // 非同期関数の呼び出し

  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
