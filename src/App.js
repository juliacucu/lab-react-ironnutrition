// src/App.js
import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  //Iteration 1:
  const [foodList, setFoodList] = useState(foods);

  // Iteration 4
  const addNewFood = (newFood) => {
    // Create a new array
    const updatedFoods = [...foodList, newFood];
    setFoodList(updatedFoods);
  };

  //Iteration 5:
  const filterFood = (wordToSearch) => {
    console.log(wordToSearch, 'Paraula escrita')
    let filteredFoods = foodList.filter ((food) => {
      return food.name.toLowerCase() === wordToSearch.toLowerCase();
    })
    setFoodList(filteredFoods)
    console.log(foodList)
  }

  //Iteration 6:
  const clickToDelete = (food) => {
    const filteredFoods = foodList.filter((item) => {
      return item !== food
    })
    setFoodList([...filteredFoods])
  }

  

  return (
    <div className="App">
     <AddFoodForm newFood={addNewFood}/>

      <Button> Hide Form / Add New Food </Button>

      <Search filterFood={filterFood}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => {
          return <FoodBox food={food} clickToDelete={clickToDelete}/>;
        })}{' '}
      </Row>
    </div>
  );
}
export default App;
