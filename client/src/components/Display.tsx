import { DisplayTable } from './DisplayTable';
import { DisplayProps, DataInterface } from '../interfaces/DisplayInterfaces';
import { DisplayList } from './DisplayList';
import { useState } from 'react';
import { NewTaskForm } from './NewTaskForm';
import { EditModal } from './EditModal';

export const Display: React.FC<DisplayProps> = ({
  data,
  displayType,
  setCreate,
  setTaskToDelete,
  setEditedTask,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<DataInterface>(Object);

  const handleIsDone = (toDoId: string) => {
    const toDo = data.find((toDo) => toDo._id === toDoId);
    toDo === undefined ? console.log('Task Not Found') : console.log(toDo);
  };

  const handleIsPriority = (toDoId: string) => {
    const toDo = data.find((toDo) => toDo._id === toDoId);
    toDo === undefined ? console.log('Task Not Found') : console.log(toDo);
  };

  const handleEdit = (toDoId: string) => {
    setIsModalOpen(true);
    const toDo = data.find((toDo) => toDo._id === toDoId);
    toDo === undefined ? console.log('Task Not Found') : setTaskToEdit(toDo);
  };

  const handleDelete = (toDoId: string) => {
    setTaskToDelete(toDoId);
  };

  return (
    <main className="flex h-4/5 w-full min-w-fit max-w-4xl flex-col justify-between rounded-2xl bg-gray-600">
      {data === null ? (
        <h2>No ToDos</h2>
      ) : displayType === 'List View' ? (
        <DisplayTable
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
          handleIsPriority={handleIsPriority}
        />
      ) : (
        <DisplayList
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
          handleIsPriority={handleIsPriority}
        />
      )}
      {isModalOpen && (
        <EditModal
          setIsModalOpen={setIsModalOpen}
          taskToEdit={taskToEdit}
          setEditedTask={setEditedTask}
        />
      )}
      <NewTaskForm setCreate={setCreate} />
    </main>
  );
};
