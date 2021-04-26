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
          // // @ts-expect-error TODO
          // Tauri.promisified({
          //   cmd: 'performRequest',
          //   endpoint: 'dummy endpoint arg',
          //   body: ['This', 'is', 'a', 'message', 'from', 'the', 'web'],
          // })
          //   // @ts-expect-error TODO
          //   .then(Tauri.registerResponse)
          //   .then((res) => {
          //     setRustMsg(res.message)
          //   })
          //   // @ts-expect-error TODO
          //   .catch(Tauri.registerResponse)
          console.log(Tauri)
        }}
      >
        Get a Message from Rust
      </button>
      {!!rustMsg && <h2>{rustMsg}</h2>}
    </>
  )
}
