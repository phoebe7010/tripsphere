import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {items.map(item => (
        <li
          key={item.id}
          className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src={item.imgSrc}
              alt={item.name}
            />
          </div>
          <div>
            <div>{item.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {item.description}
            </div>
          </div>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
