import React, { useEffect, useState } from "react";

import { createNote } from "~/models/note.server";
import { useUser } from "~/utils";

export default function NewNotePage() {
  const user = useUser();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (content) {
      createNote({ title: "toot", body: content, userId: user.id });
    }
  }, [content, user.id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Body: </span>
          <textarea
            name="body"
            rows={8}
            defaultValue="body"
            onChange={(e) => setContent(e.target.value)}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          />
        </label>
      </div>
    </div>
  );
}
