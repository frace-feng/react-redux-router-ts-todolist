import { useAppSelector,useAppDispatch } from "../hooks";

import { doneTodoList } from "../redux/slice/todoList";
import { Checkbox, Button } from "antd";
function TodoFooter() {
  const todoList = useAppSelector((state) => state.todoList.data);
  const doneList = todoList.filter(e=>e.done === true)
  const dispatch = useAppDispatch();
  return (
    <div className="todo-list-footer">
      <Checkbox checked={doneList.length === todoList.length} onChange={(event)=>dispatch(
                doneTodoList(event.target.checked)
              )} style={{marginLeft: '25px'}} />
      <span className="todo-list-length">已完成 {doneList.length}, 全部 {todoList.length}</span>
      <Button onClick={()=>dispatch(
                doneTodoList(false)
              )} className="right-btn"  type="primary"
          danger>清除已完成任务</Button>
    </div>
  );
}

export default TodoFooter;
