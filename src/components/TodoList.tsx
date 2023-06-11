import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import TodoItem from './TodoItem';

type TodoListType = {
  id: string;
  text: string;
  timestamp: any;
};

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoListType[]>([
    { id: '', text: '', timestamp: null },
  ]);

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
    const unSub = onSnapshot(q, async (snapshot) => {
      console.log(snapshot.docs[0].data())
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        }))
      );
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <>
      {todos[0]?.id && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}><TodoItem todo={todo} /></li>
          ))}
        </ul>
      )}
    </>
  )
}
