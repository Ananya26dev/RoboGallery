import React, { useState, useRef, useEffect } from "react";

const RobotImageList = () => {
  const [inputValue, setInputValue] = useState("");
  const [robotImages, setRobotImages] = useState([]);
  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddRobot = () => {
    if (inputValue.trim() !== "") {
      const robotUrl = `https://robohash.org/${inputValue}.png?set=set3`;
      setRobotImages([...robotImages, robotUrl]);
      setInputValue("");
      inputRef.current.focus();
    }
  };
  const handleRemoveRemote = (indexToRemove) => {
    setRobotImages(robotImages.filter((_, index) => index !== indexToRemove));
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Enter a String"
      />
      <button onClick={handleAddRobot}>Add Robot</button>
      <div className="robot-list">
        {robotImages.map((robot, index) => (
          <img
            src={robot}
            key={index}
            alt={`Robot ${index + 1}`}
            onClick={() => handleRemoveRemote(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RobotImageList;
