import React from "react";
import TextInputStyledComponents from "ps-react/TextInputStyledComponents";

/** Optional Input */
export default function ExampleTextInputStyledComponents() {
  return (
    <TextInputStyledComponents
      htmlId="example-error"
      name="lastname"
      label="Last Name"
      onChange={() => {}}
      required
      error="Last name is required"
    />
  );
}
