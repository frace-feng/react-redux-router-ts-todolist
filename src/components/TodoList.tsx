import { useAppSelector, useAppDispatch } from "../hooks";
import { addTodoList } from "../redux/slice/todoList";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter"
import { List, Input, Row, Col } from "antd";
import { useState } from "react";

function TodoList() {
  const todoList = useAppSelector((state) => state.todoList.data);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  return (
    <div>
      <Row className="todo-list-header">
        <Col span={10}>
          <Input
            onChange={(e) => setValue(e.target.value)}
            onPressEnter={() => dispatch(addTodoList(value))}
            type="text"
            placeholder="请输入，按回车键确认"
          />
        </Col>
      </Row>
      <List
        bordered
        size="large"
        dataSource={todoList}
        renderItem={(e) => (
          <List.Item>
            <TodoItem key={e.id} data={e} />
          </List.Item>
        )}
      ></List>
      <TodoFooter />
    </div>
  );
}
export default TodoList;
