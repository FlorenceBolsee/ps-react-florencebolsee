import React from "react";
import TextInput from "ps-react/TextInput";

/** Optional Input */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      name="firstname"
      label="First Name"
      onChange={() => {}}
    />
  );
}
