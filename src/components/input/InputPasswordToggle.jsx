/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import Input from "./Input";
import { IconEyeClose, IconEyeOpen } from "../../icons";

const InputPasswordToggle = ({ control }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        control={control}
        placeholder="Enter your password"
      >
        {showPassword ? (
          <IconEyeOpen
            className="icon-input"
            onClick={() => setShowPassword(false)}
          ></IconEyeOpen>
        ) : (
          <IconEyeClose
            className="icon-input"
            onClick={() => setShowPassword(true)}
          ></IconEyeClose>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
