import React from 'react';

export default function Panel({ title, children }) {
  return (
    <section className='panel'>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
