const FounderListItem = (props) => {
  return (
    <li>
      <h3>Hello, I'm {props.founder.name}, the {props.founder.title}!</h3>
      <p>{props.founder.credential}</p>

    </li>
  );
};

export default FounderListItem;