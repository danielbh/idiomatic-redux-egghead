import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all'),
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
