import { TableDisplayProps } from '../interfaces/DisplayInterfaces';

export const DisplayTable: React.FC<TableDisplayProps> = ({
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>When</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((todo, i) => (
          <tr key={i}>
            <td>
              <input type="checkbox" className=" cursor-pointer" />
              <input type="checkbox" className=" cursor-pointer" />
              {todo.task}
            </td>
            <td>{todo.when}</td>
            <td>
              <button onClick={() => handleEdit(todo._id)}>Edit</button>
            </td>
            <td>
              <button onClick={() => handleDelete(todo._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
