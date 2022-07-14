import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm (props) {
    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);
  
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
      
    </form>
  );
}

export default AddFoodForm;