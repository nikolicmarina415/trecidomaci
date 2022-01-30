import React from 'react';

export default function Layout({ title, children }) {
  return (
    <div className='container mt-2'>
      <h1 className='text-center'>{title}</h1>
      <div className='mt-3'>
        {children}
      </div>
    </div>
  );
}
