import ChildComponents from './ChildComponents';
import React from 'react';

const ParentComponents = () => {
    const data = [
      {name: 'zeehan', age: 25, email: 'zeeshan@example.com', fvColor: 'red'},
      {name: 'abdullah', age: 30, email: 'abdullah@example.com', fvColor: 'blue'},
      {name: 'Mike', age: 28, email:'mike@example.com', fvColor: 'green'},
    ]

  return (
    <div> 
      {data.map((person, index)=> (
        <ChildComponents key={index} name={person.name} age={person.age} email={person.email} fvColor={person.fvColor} />

      )
    )}

    </div>
  );
}

export default ParentComponents;
