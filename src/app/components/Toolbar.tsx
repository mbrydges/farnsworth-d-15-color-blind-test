'use client'
import { Colors, Rows } from '@/lib/types'
import { useState } from 'react'

type Props = {
  state: {
    colors: Colors
    rows: Rows
    rowOrder: string[]
  }
}

export default function Toolbar({ state }: Props) {
  const [errors, setErrors] = useState(15)

  function results() {
    const array = (state.rows as Rows)['row-2'].colorIds
    let errorCount = 15

    for (let i = 0, j = 2; i < array.length; i++, j++) {
      if (array[i] === `${j}`) {
        errorCount -= 1
      }
    }

    setErrors(errorCount)
  }

  return (
    <div className="toolbar">
      <div className="error-text">Errors: {errors}</div>

      <div className="button-group">
        <button onClick={() => results()}>RESULTS</button>
        <button onClick={() => window.location.reload()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            style={{
              display: 'grid',
              justifyContent: 'center',
              color: '#b4b3b3',
              width: '16px',
              margin: 'auto',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
