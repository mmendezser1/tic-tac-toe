const BoardItem = ({
  index,
  element,
  functionOnClick,
}: {
  index: number;
  element: string;
  functionOnClick: (index: number) => void;
}) => {
  return (
    <div
      className="boardItem"
      key={index}
      onClick={() => functionOnClick(index)}
    >
      {element}
    </div>
  );
};

export default BoardItem;
