import React from 'react';

// TODO: TreePoint
// TODO: TreeBranch
// TODO: TreeNode

const memoryTree = (props) => {

  return (
    <>
      {
        props.map(item => (
          <>
            <TreePoint/>
            <TreeBranch/>
            <TreeNode/>
          </>
        ))
      }
    </>
  )

}

export default memoryTree 