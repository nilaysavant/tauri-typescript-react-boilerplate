import React, { useState } from 'react'
import Tauri from 'tauri/api'

import './app.css'

export function App(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rustMsg, setRustMsg] = useState('')

  return (
    <>
      <h1>Hello World from Tauri Typescript React!</h1>
      <button
        onClick={() => {
          Tauri.tauri
            .promisified({
              cmd: 'performRequest',
              endpoint: 'dummy endpoint arg',
              body: ['This', 'is', 'a', 'message', 'from', 'the', 'web'],
            })
            .then((res: any) => {
              console.log("🚀 ~ file: app.tsx ~ line 22 ~ .then ~ res", res)
              setRustMsg(res)
            })
          console.log(Tauri)
        }}
      >
        Get a Message from Rust
      </button>
      {!!rustMsg && <h2>{rustMsg}</h2>}
    </>
  )
}
