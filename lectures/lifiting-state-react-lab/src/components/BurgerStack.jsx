const BurgerStack = (props) => {
  return (
    <>
        <ul>
            {props.stack.length > 0  ? 
            
            props.stack.map((food, idx) => 
                <li key={idx} style={{ backgroundColor: food.color }}>
                {food.name}

                <button onClick={() => props.removeToBurger(food)}>X</button>
              </li>
            )
          
            : <strong>No Ingredients </strong> 
          }
            
        </ul>
    </>
  );
};

export default BurgerStack;