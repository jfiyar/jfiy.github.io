import * as React from "react";

const { useState, useEffect } = React;

export interface Props {
  name?: string;
}

export default ({ name }: Props) => {
  const [count, setCount] = useState(0);
  const [countLoading, setCountLoading] = useState(false);
  useEffect(() => {
    if (!countLoading) {
      setTimeout(() => {
        setCountLoading(true);
        setCount(10);
      }, 300);
    }
  }, [countLoading]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>hello {name}!</h1>
      <h2>{countLoading ? count : "loading"}</h2>
      <h2>
        {countLoading && (
          <button onClick={() => setCount(count + 1)}>+1</button>
        )}
      </h2>
    </div>
  );
};
