import React from 'react'

export default function Input() {
   
  const inputRef = React.useRef<HTMLInputElement>(null)

  return <input ref={inputRef} placeholder='请输入'/>
}
