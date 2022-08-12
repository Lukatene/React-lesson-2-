
import Todo from "./Todo";
import TodoList from "./TodoList";


function Text() {
  return (
    <TodoList>
     <Todo title = 'React' isDone={true} />
     <Todo title2 = 'Lesson' isDone={true} />
     <Todo title3 = 'Number' isDone={true} />
     <Todo title4 = 'Two' isDone={true} />
    </TodoList>
    
  );
}


export default Text;
