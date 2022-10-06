import pen from "./images/pen.png";
import bin from "./images/bin.png";

function ListItem({ list, setList, onDelete, handleChangeClick, handleCompleted}) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id} className={item.isCompleted ? "bordered" : ""} onDoubleClick={() => handleCompleted(item.id)}>
            <p>{item.title}</p>
            <span>
              <aside>
                <img src={pen} alt="pen" onClick={() => handleChangeClick(item.id)} />
                <span className="tooltip">Edit</span>
              </aside>
              <aside>
                <img src={bin} alt="bin" onClick={() => onDelete(item.id)} />
                <span className="tooltip">Delete</span>
              </aside>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ListItem;
