const IngredientList = (props) => {
  return (
    <>
      <ul>
        {props.availableIngredients.map((food, idx) => 
          <li key={idx} style={{ backgroundColor: food.color }}>
              {food.name}

              <button onClick={() => props.addToBurger(food)}>+</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default IngredientList;