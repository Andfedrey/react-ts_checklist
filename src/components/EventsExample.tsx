import React, { useRef, useState } from 'react'

export const EventsExample:React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log(inputRef.current?.value);
  }
  const clickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  }
  const dragHandle =(e: React.DragEvent<HTMLDivElement>)=> {
    console.log('drag')
  }  
  const dragWidthPreventDefault = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }
  const leaveHandle = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }
  const dropHandle = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP');
  }
  console.log(isDrag);

  return (
    <>
    <input type='text' value={value} onChange={changeHandle} placeholder='Управляемый'/>
    <input ref={inputRef} onChange={changeHandle} placeholder='Неуправляемый'/>
    <button onClick={clickHandle}>click</button>
    <div onDrag={dragHandle} draggable style={{width: 200, height:200, background: 'red'}}></div>
    <div 
      onDrop={dropHandle} 
      onDragLeave={leaveHandle} 
      onDragOver={dragWidthPreventDefault} 
      style={{width: 200, height:200, background: isDrag ? 'blue':'red', marginTop: 15}}>
    </div>
    </>
  )
}
