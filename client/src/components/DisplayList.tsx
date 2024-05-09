import { TableDisplayProps } from '../interfaces/DisplayInterfaces';

export const DisplayList: React.FC<TableDisplayProps> = ({
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <ul className="flex flex-col gap-2 p-4">
      {data.map((todo) => (
        <li
          key={todo._id}
          className="flex justify-between gap-1 rounded-lg border-2 border-gray-500 p-2 hover:bg-gray-500"
        >
          <div className="flex gap-2">
            <input type="checkbox" className=" cursor-pointer" />
            <input type="checkbox" className=" cursor-pointer" />
            <div>{todo.task}</div>
          </div>
          <div className="flex gap-2">
            <div>{todo.when}</div>
            <button onClick={() => handleEdit(todo._id)}>Edit</button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
