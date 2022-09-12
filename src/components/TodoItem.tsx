import { useState } from "react";
import { Input, Col, Row, Button, Checkbox } from "antd";
import { BaseItemProps } from "../redux/common";
import { useAppDispatch } from "../hooks";
import { updateTodoList, deleteTodoList } from "../redux/slice/todoList";

function TodoItem(props: BaseItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const { data } = props;
  const [name, setName] = useState(data.name);
  const dispatch = useAppDispatch();
  return (
    <Row className="todo-item-row">
      <Col className="edit-col" span={14}>
        <Checkbox
          checked={data.done}
          style={{ marginRight: "10px" }}
          onChange={(event) => {
            dispatch(
              updateTodoList({
                name: name,
                id: data.id,
                done: event.target.checked,
              })
            );
          }}
        />
        {isEdit ? (
          <>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              onPressEnter={() =>
                {
                  dispatch(
                    updateTodoList({
                      name: name,
                      id: data.id,
                      done: data.done,
                    })
                  );
                  setIsEdit(false)
                }
              }
            />
            <Button onClick={() => setIsEdit(false)}>取消</Button>
          </>
        ) : (
          data.name
        )}
      </Col>
      <Col className="operate" span={10}>
        {isEdit ? (
          ""
        ) : (
          <Button
            className="operate-btn"
            type="primary"
            onClick={() => setIsEdit(true)}
          >
            编辑
          </Button>
        )}
        <Button
          type="primary"
          danger
          onClick={() => dispatch(deleteTodoList(data.id))}
        >
          删除
        </Button>
      </Col>
    </Row>
  );
}

export default TodoItem;
