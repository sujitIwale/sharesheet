import React from "react";

const ListOptionBar = () => {
  return (
    <thead className="list-option-bar">
      <tr>
        <th style={{ borderBottomLeftRadius: '12px', borderTopLeftRadius: '12px' }}>Sr No</th>
        <th style={{ textAlign: 'initial' }}>Title</th>
        <th>Owner</th>
        <th>Last Updated</th>
        <th style={{ borderBottomRightRadius: '12px', borderTopRightRadius: '12px' }}></th>
      </tr>
    </thead>
  );
};

export default ListOptionBar;
