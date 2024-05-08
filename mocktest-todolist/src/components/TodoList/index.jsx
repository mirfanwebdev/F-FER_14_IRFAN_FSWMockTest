import { useEffect, useState } from "react";
import TodoCard from "../TodoCard";
import { fetchTodoList } from "../../redux/featrues/fetchList/fetchSlice";
import { deleteTodo } from "../../redux/featrues/delete/deleteSlice";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import { Button, Card, Stack } from "react-bootstrap";
export default function TodoList() {
  const list = useSelector((state) => state.fetch.data);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="mx-2 mx-md-5">
      {list.map((item) => (
        <TodoCard key={item.id}>
          <Stack direction="horizontal" gap={3}>
            <input
              type="checkbox"
              onChange={handleChecked}
              checked={item.completed}
            />
            <Card.Text className="m-0 text-capitalize">{item.title}</Card.Text>
            <Button
              className="ms-auto"
              type="button"
              variant="danger"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
          </Stack>
        </TodoCard>
      ))}
    </div>
  );
}
