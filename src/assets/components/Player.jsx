import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = event => {
    setPlayerName(event.target.value);
  };
  const handleEdit = () => {
    setIsEditing(editing => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing && <input onChange={handleChange} type="text" value={playerName} />}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
