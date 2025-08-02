const BurgerStack = (props) => {
  return (
    <>
        <ul>
            {props.stack.map((food, idx) => 
                <li key={idx} style={{ backgroundColor: food.color }}>
                {food.name}

                <button onClick={() => props.removeToBurger(food)}>X</button>
              </li>
            )}
        </ul>
    </>
  );
};

export default BurgerStack;