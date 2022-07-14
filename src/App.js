// src/App.js
import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  //Iteration 1:
  const [foodList, setFoodList] = useState(foods);
  
  return (
    <div className="App">
      <AddFoodForm />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => {
          return <FoodBox food={food} />;
        })}{' '}
      </Row>
    </div>
  );
}
export default App;
