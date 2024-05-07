import { HeaderProps } from '../interfaces/DisplayInterfaces';

export const Header: React.FC<HeaderProps> = ({
  setDeleteAll,
  setDisplayType,
  displayType,
}) => {
  const handleDisplayType = () => {
    setDisplayType((prev) =>
      prev === 'List View' ? 'Table View' : 'List View'
    );
  };

  const handleClearList = () => {
    setDeleteAll(true);
  };

  return (
    <header className="flex w-full max-w-4xl justify-between">
      <h1 className="text-4xl">To Do List</h1>
      <div className="flex gap-4">
        <button className="headerButton" onClick={() => handleDisplayType()}>
          {displayType}
        </button>
        <button className="headerButton" onClick={() => handleClearList()}>
          Clear List
        </button>
      </div>
    </header>
  );
};
