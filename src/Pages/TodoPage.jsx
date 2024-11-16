import { Fragment, useState } from "react"
import { Button, Stack } from "react-bootstrap"
import toast from "react-hot-toast"
import { FaEdit, FaEye, FaPen, FaTrash } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"
import { v4 as getUniqueId } from "uuid"
import Modal from "../Components/Modal"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToList, removeTodo } from "../Redux/todoSlice"

const TodoPage = () => {

    const { todoList } = useSelector(store => store.todo)

    const [setTodoList] = useState([])
    const [todoTask, setTodoTask] = useState("")
    const [editText, setEditText] = useState("")
    const [editable, setEditable] = useState(null)
    const [viewTask, setViewTask] = useState(null)

    const handleChange = (event) => {
        const { value } = event.target
        setTodoTask(value.replace(" ", "_"))
    }

    const dispatch = useDispatch()

    const handleAddToList = () => {
        if (todoTask === "") {
            return toast.error("Task is required!")
        }
        const idx = todoList.findIndex((element) => element.title === todoTask)
        if (idx > -1) {
            return toast.error("Task already exist!")
        }
        const datetime = new Date().toLocaleString("en-IN").toUpperCase()
        const taskObject = {
            id: getUniqueId(),
            title: todoTask,
            completed: false,
            createdAt: datetime,
            updatedAt: datetime
        }
        // setTodoList([taskObject, ...todoList])
        dispatch(addToList(taskObject))
        setTodoTask("")
        return toast.success("Task added!")
    }

    const handleRemove = (taskId) => {
        dispatch(removeTodo({ taskId }))
        return toast.success("Task removed!")
    }

    const handleUpdate = (editId) => {
        const res = todoList.map(item => {
            if (item.id === editId) {
                const datetime = new Date().toLocaleString("en-IN").toUpperCase()
                return {...item, title: editText, updatedAt: datetime}
            }
            return item
        })
        setTodoList(res)
        setEditable(null)
        setEditText("")
        return toast.success("Task updated!")
    }

    const updateStatus = (updateId) => {
        const res = todoList.map(item => {
            if (item.id === updateId) {
                const datetime = new Date().toLocaleString("en-IN").toUpperCase()
                return {...item, updatedAt: datetime, completed: !item.completed}
            }
            return item
        })
        setTodoList(res)
        return toast.success("Task updated!")
    }

    return <div className="d-flex flex-column align-items-center mt-5">
        {viewTask && <Modal task={viewTask} setViewTask={setViewTask} />}
        <Stack className="w-50 mx-auto" gap={2}>
            <input type="text" onChange={handleChange} value={todoTask} placeholder="Eg: Create a task list." className="p-2 border-0 border-secondary" style={{outline: "none"}} />
            <Button onClick={handleAddToList} variant="secondary" className="rounded-0">Add To List</Button>
        </Stack>
        <Stack className="mx-auto w-50 mt-4" gap={3}>
            {
                todoList.map((task) => {
                    return <div key={task.id} className="p-2 bg-light text-dark d-flex align-items-center">
                        <div style={{ width: "95%" }} className="text-truncate" >
                            <div>Title: {
                                editable?.id === task.id ? <Fragment>
                                    <input type="text" onChange={(e) => setEditText(e.target.value)} value={editText}/>
                                    <button onClick={() => handleUpdate(task.id)}>Update</button>
                                </Fragment> : task.title
                            }</div>
                            <div>Completed: {task.completed ? "Yes" : "No"}</div>
                            <div>Updated: {task.updatedAt}</div>
                        </div>
                        <div style={{ width: "5%" }} className="text-center d-flex gap-2 flex-column align-items-center justify-content-center">
                            <FaTrash cursor={"pointer"} className="text-danger" onClick={() => handleRemove(task.id)} />
                            <FaCircleCheck cursor={"pointer"} className="text-success" onClick={() => updateStatus(task.id)} />
                            <FaPen cursor={"pointer"} className="text-primary" onClick={() => {
                                setEditable(task)
                                setEditText(task.title)
                            }} />
                            <FaEye cursor={"pointer"} className="text-info" onClick={() => setViewTask(task)} />
                        </div>
                    </div>
                })
            }
            <Link to="/shop">Go To Shop</Link>
        </Stack>
    </div>
}

export default TodoPage
