import React from "react";
import TextInput from "ps-react/TextInput";

/** Error on Input */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-error"
      name="lastname"
      label="Last Name"
      onChange={() => {}}
      required
      error="Last name is required"
    />
  );
}
