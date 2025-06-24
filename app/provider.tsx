"use client";

import React from 'react'

const Provider = ({children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <div>{children}</div>
  )
}

export default Provider