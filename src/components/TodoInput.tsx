import { useState } from 'react';
import { addDoc, serverTimestamp, collection} from 'firebase/firestore';
import { db } from '../firebase';

const TodoInput: React.FC = () => {
  const [inputText, setInputText] = useState('');

  // TODO追加
  const onSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText === '') return;
    await addDoc(collection(db, 'todos'), {
      text: inputText,
      timestamp: serverTimestamp(),
    });
    setInputText('');
  };

  return (
    <>
      <form onSubmit={onSubmitAdd} style={{ display: 'inline' }}>
        <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
        <button>追加</button>
      </form>
    </>
  );
};

export default TodoInput;
