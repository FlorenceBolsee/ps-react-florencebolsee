import React from "react";
import TextInputBEM from "ps-react/TextInputBEM";

/** Error on Input */
export default function ExampleOptional() {
  return (
    <TextInputBEM
      htmlId="example-error"
      name="lastname"
      label="Last Name"
      onChange={() => {}}
      required
      error="Last name is required"
    />
  );
}
