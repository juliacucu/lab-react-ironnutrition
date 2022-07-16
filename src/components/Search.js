import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const [name, setName] = useState()

    const handleNameInput = (e) => {
        setName(e.target.value);
        props.filterFood(name)
    }


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={name} type="text" onChange={handleNameInput} />
    </>
  );
}

export default Search;