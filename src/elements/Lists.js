import React from "react";

import propTypes from "prop-types";

export default function Lists(props) {
  const className = ["list-reset"];
  className.push(props.className);
  if (props.isSmall) className.push("text-xs");
  return (
    <ul class={className.join(" ")}>
      {props.data.map((List, index) => {
        return (
          <li key={index} className={List.isChecked ? "is-checked" : ""}>
            {List.content}
          </li>
        );
      })}
    </ul>
  );
}

Lists.propTypes = {
  data: propTypes.array,
  isSmall: propTypes.bool,
  className: propTypes.string,
};
