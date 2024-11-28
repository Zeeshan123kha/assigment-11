import React from 'react';

const ChildComponents = (props:any) => {
  return (
    <div className="mb-8 p-4 border rounded shadow-lg flex flex-row justify-center gap-x-8 ">
        <div className="text-xl text-center">
            <div className="font-bold">Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>Email: {props.email}</div>
            <div>fvColors: {props.fvColor}</div>

        </div>
     
        
      
    </div>
  );
}

export default ChildComponents;
