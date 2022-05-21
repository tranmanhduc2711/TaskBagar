import React from 'react'
import Manager from'./Manager';

export default function ListManager({listManager}) {
    
  return (
    <>
      <ul>
        {listManager.map((manager) => (
          <Manager key={manager.id} manager={manager}></Manager>
        ))}
      </ul>
    </>
  );
}
