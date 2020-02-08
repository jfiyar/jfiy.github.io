import * as React from "react";

const { useState, useEffect } = React;

export interface Props {
  name?: string;
}

export default ({ name }: Props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>hello {name}!</h1>
    </div>
  );
};
