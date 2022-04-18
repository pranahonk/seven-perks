import React, {useEffect, useState} from "react";
import {MdArrowDropDown} from "react-icons/md"
import "./Select.scss"
import PropTypes from "prop-types";

const Select = ({options, onChange}) => {
  const [visibility, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const setSelected = (value) =>{
      setSelectedOption(value.value)
      onChange(value.key)
  }

  useEffect(()=>{
      setSelectedOption(options?.[0]?.value);
      onChange(options?.[0]?.key);
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
                                      setSelected(option)
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
    options:  PropTypes.array,
    onChange: PropTypes.any
};

export default Select;
