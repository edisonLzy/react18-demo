import React, { useRef, useState, useTransition } from "react";

export default () => {
  const [count, updateCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const domRef = useRef({});

  const onClick = () => {
    updateCount(count => count + 1);
    startTransition(() => {
      updateCount(count => count + 2);
    })
    updateCount(count => {
      console.log('count', count);
      return count + 3;
    });
    startTransition(() => {
      updateCount(count => count + 4);
    })
  };


  return (
    <h3 ref={domRef} onClick={onClick}>
      {count}
    </h3>
  )
}