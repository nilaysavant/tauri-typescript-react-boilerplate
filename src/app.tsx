import React, { useState } from 'react'
import Tauri from 'tauri/api'

import './app.css'

export function App(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rustMsg, setRustMsg] = useState(null)

  return (
    <div>
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
              console.log('🚀 ~ file: app.tsx ~ line 22 ~ .then ~ res', res)
              setRustMsg(res || null)
            })
          console.log(Tauri)
        }}
      >
        Get a Message from Rust
      </button>
      {!!rustMsg && (
        <div
          style={{
            display: 'flex',
            margin: '1rem',
            background: '#242424',
            borderRadius: '5px',
            padding: '2rem',
            borderColor: '#8a8a8a',
            borderWidth: '5px',
            borderStyle: 'solid',
            color: 'white',
          }}
        >
          <code lang="json">{JSON.stringify(rustMsg, null, 2)}</code>
        </div>
      )}
    </div>
  )
}
