import React from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

/** Error on Input */
export default function ExampleTextInputCSSModules() {
  return (
    <TextInputCSSModules
      htmlId="example-error"
      name="lastname"
      label="Last Name"
      onChange={() => {}}
      required
      error="Last name is required"
    />
  );
}
