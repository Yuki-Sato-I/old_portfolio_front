import React from "react";
// my component


export const WorkDetail = (props) =>  {
  const params = props.match.params;
  const id = parseInt(params.id, 10);
  return (
    <h1>work 詳細{id}</h1>
  )
}

export default WorkDetail;