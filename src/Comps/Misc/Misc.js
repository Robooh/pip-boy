import React, { useState } from "react";
import './Misc.css';
import './MiscMobile.css';


const MiscScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [checkedItems, setCheckedItems] = useState({}); // new state to keep track of checked items
  const items = [
    { name: 'The Courier and the wind', content: 'A package courier found shot in the head near Goodsprings has reportedly regained consciousness and made a full recovery.' },
    { name: 'Aircrafts ?', content: '	Several unidentified aircraft were spotted flying over the REPCONN test site by a local crackpot. He spoke to a toy bear near one of our microphones.' },
  { name: 'A"Reminder', content: '	This is Radio New Vegas, and I"m your host, Mr. New Vegas. And in case you"re wondering if you"ve come to the right place, you have.' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCheckedItems({ [item.name]: true });
  };

  return (
    <div className="misc-container">
      <div className="misc-list-container">
        <p>This is the misc screen.</p>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              <span
                className={checkedItems[item.name] ? 'misc-checkbox checked' : 'misc-checkbox'}
              />
              <span className={selectedItem === item ? 'misc-selected' : ''}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {selectedItem && (
        <div className="misc-content-container">
          <p>Content of {selectedItem.name}:</p>
          <p>{selectedItem.content}</p>
        </div>
      )}
    </div>
  );
  };

export default MiscScreen
