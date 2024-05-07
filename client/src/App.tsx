import './App.css';
import { Display } from './components/Display';
import { Header } from './components/Header';
import { useState } from 'react';
import { DisplayType, DataInterface } from './interfaces/DisplayInterfaces';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [displayType, setDisplayType] = useState<DisplayType>('Table View');
  const [data, setData] = useState<DataInterface[] | []>([]);
  const [updateTime, setUpdateTime] = useState(Date.now());
  const [create, setCreate] = useState(Object);
  const [editedTask, setEditedTask] = useState<DataInterface>(Object);
  const [taskToDelete, setTaskToDelete] = useState('');
  const [deleteAll, setDeleteAll] = useState(false);

  useEffect(() => {
    axios
      .get<{ toDos: DataInterface[] | [] }>(
        'https://todolist-api-aw85.onrender.com/api/toDo'
      )
      .then((res) => {
        setData(res.data.toDos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateTime]);

  useEffect(() => {
    if (Object.keys(create).length === 0) {
      return;
    }
    axios
      .post('https://todolist-api-aw85.onrender.com/api/toDo', create)
      .then(() => setUpdateTime(Date.now()));
  }, [create]);

  useEffect(() => {
    if (Object.keys(editedTask).length === 0) {
      return;
    }
    axios
      .put(
        `https://todolist-api-aw85.onrender.com/api/toDo/${editedTask._id}`,
        editedTask
      )
      .then(() => setUpdateTime(Date.now()));
  }, [editedTask]);

  useEffect(() => {
    if (taskToDelete === '') {
      return;
    }
    axios
      .delete(`https://todolist-api-aw85.onrender.com/api/toDo/${taskToDelete}`)
      .then(() => setUpdateTime(Date.now()));
  }, [taskToDelete]);

  useEffect(() => {
    if (deleteAll === false) {
      return;
    }
    if (data.length > 0) {
      axios
        .delete('https://todolist-api-aw85.onrender.com/api/toDo/')
        .then(() => {
          setUpdateTime(Date.now());
          setDeleteAll(false);
        });
    }
  }, [deleteAll]);

  return (
    <>
      <Header
        setDisplayType={setDisplayType}
        displayType={displayType}
        setDeleteAll={setDeleteAll}
      />
      <Display
        displayType={displayType}
        data={data}
        setCreate={setCreate}
        setTaskToDelete={setTaskToDelete}
        setEditedTask={setEditedTask}
      />
    </>
  );
}

export default App;
