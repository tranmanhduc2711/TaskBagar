import React from 'react'
import Manager from'./Manager';
export default function ListManager({listManager}) {
    const manager = [
      { name: "John", id: 1 },
      { name: "Duc", id: 2 },
      { name: "Nam", id: 3 },
    ];
  return (
    <>
      <ul>
        {manager.map((manager) => (
          <Manager key={manager.id} manager={manager}></Manager>
        ))}
      </ul>
    </>
  );
}
