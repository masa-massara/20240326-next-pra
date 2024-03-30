"use client";

import * as React from "react";

import { useLongPress } from "@uidotdev/usehooks";

export default function LongTouch() {
  const [isOpen, setIsOpen] = React.useState(false);
  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      onStart: (event) => console.log("Press started"),
      onFinish: (event) => console.log("Press Finished"),
      onCancel: (event) => console.log("Press cancelled"),
      threshold: 1000,
    }
  );

  return (
    <section>
      <h1 className="text-gray-300">useLongPress</h1>
      <button {...attrs} className="primary">
        Press Me
      </button>

      {isOpen && (
        // <dialog>
        <div>
          <button onClick={() => setIsOpen(false)}>❌</button>
          <h2>Modal</h2>
        </div>

        //   <p>This is a modal triggered by a long press.</p>
        // </dialog>
      )}
    </section>
  );
}
