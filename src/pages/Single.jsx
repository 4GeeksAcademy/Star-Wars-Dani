import { Link, useParams } from "react-router-dom"; 
import PropTypes from "prop-types";
import { useStore } from "../store"; 

export const Single = (props) => {

  const { state } = useStore();  

  
  const { theId } = useParams();
  
  
  const singleTodo = state.todos.find(todo => todo.id === parseInt(theId));

  return (
    <div className="container text-center">
      <h1 className="display-4">Todo: {singleTodo?.title}</h1>
      <hr className="my-4" />

    
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


Single.propTypes = {
  match: PropTypes.object
};
