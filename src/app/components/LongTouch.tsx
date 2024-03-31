"use client";

import * as React from "react";

import { useLongPress } from "@uidotdev/usehooks";
import { useState } from "react";

export default function LongTouch() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [longTouched, setLongTouched] = useState(false);
  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      onStart: (event) => setLongTouched(true),
      onFinish: (event) => setLongTouched(false),
      onCancel: (event) => setLongTouched(false),
      threshold: 1000,
    }
  );

  return (
    <section>
      {/* <button {...attrs}>Press Me</button> */}

      <a
        {...attrs}
        className={`btn bgbottom`}
      >
        <span className="relative z-10">7-1-4 背景が流れる（下から上）</span>
      </a>

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
