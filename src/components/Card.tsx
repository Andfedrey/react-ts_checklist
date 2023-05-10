import React, { useState } from 'react'

export enum CardVariant {
  outlined='outlined',
  primary='primary',
}

interface CardProps {
  width: string;
  height: string;
  variant:  CardVariant;
  children: React.ReactNode;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({ width, height, variant, children, onClick}) => {
  const [st, setSt] = useState(0)
  return (
    <div style={{
        width, 
        height, 
        border: variant===CardVariant.outlined ? '2px solid black' : 'none',
        background: variant===CardVariant.primary ? 'lightgray' : 'none'
        }}
        onClick={() => onClick(st)}
    >
      {children}
    </div>
  )
}

export default Card