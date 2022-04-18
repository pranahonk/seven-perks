import React, {useEffect, useState} from "react";
import {MdArrowDropDown} from "react-icons/md"
import "./Select.scss"
import PropTypes from "prop-types";

const Select = ({options}) => {
  const [visibility, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const setSelected = (value) =>{
      // setSelectedOption(option)
      setSelectedOption(value)
  }

  useEffect(()=>{
      setSelectedOption(options?.[0]?.value)
  }, [])



  return (
      <div
          className="select"
          onClick={e => {
              setVisibility(!visibility);
          }}
      >
          <div className="selected-option">
					<span
                        title={selectedOption}
                    >
						{selectedOption}
					</span>
              <MdArrowDropDown />
          </div>
          {visibility && (
              <div className="options">
                  <ul>
                      {options
                          .map((option, index) => (
                              <li
                                  key={index}
                                  className={
                                      selectedOption === option
                                          ? "active-option"
                                          : null
                                  }
                                  onClick={() =>
                                      setSelected(option.value)
                                  }
                              >
                                  {option.value}
                              </li>
                          ))}
                  </ul>
              </div>
          )}
      </div>
  );
};

Select.propTypes = {
    options:  PropTypes.array
};

export default Select;
