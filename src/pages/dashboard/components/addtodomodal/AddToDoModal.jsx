import styles from "./AddToDoModal.module.css";
import { useEffect, useState } from "react";
import DotIndicator from "../../../../components/dotindicator/DotIndicator.jsx";
import ReactDatePicker from "react-datepicker";
import OutlinedButton from "../../../../components/buttons/OutlinedButton/OulinedButton.jsx";
import SolidButton from "../../../../components/buttons/SolidButton/SolidButton.jsx";
import Task from "../../../../store/models/Task.jsx";
import { createTask, fetchTaskByStatus, fetchTasks } from "../../../../store/slices/taskSlice.js";
import { useDispatch } from "react-redux";
import SelectionButton from "../../../../components/buttons/SelectionButton/SelectionButton.jsx";

const AddToDoModal = ({ onClose }) => {
  const [allCollapsed, setAllCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  let taskPriority = ""  
  const dispatch = useDispatch();

  const closeModal = () => setModalOpen(false);

  const handleClose = () => {
    onClose();
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleTodoTitleChange = (value) => {
    setTodoTitle(value);
  };

  const handleAddTask = () => {
    // Add the new task to the tasks list
    setNewTask("");
    setTasks([...tasks, newTask]);
    setCheckList([...checkList, false]);
    // Clear the input field after adding a task
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];;
    const updatedCheckList = [...checkList.slice(0, index), ...checkList.slice(index + 1)];
    setTasks(updatedTasks);
    setCheckList(updatedCheckList);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckList = checkList;
    updatedCheckList[index]= !updatedCheckList[index]
    setCheckList(updatedCheckList)
  };
  const mergedTaskCheckList = tasks.reduce((result, subtaskName, index) => {
    const id = `id${index + 1}`;
    result[id] = { subtaskName, isDone: checkList[index] };
    return result;
  }, {});


  const handleAddTodo = async (e) => {
    const createdAt = new Date();
    const checkListInJSON = mergedTaskCheckList;
    const finalTodo = new Task({
      createdAt:createdAt,
      taskCheckList:checkListInJSON,
      taskPriority : taskPriority,
      taskTitle : todoTitle,
      taskStatus : "To-do",
      taskValidity : dateValue,
    });
    dispatch(
      createTask(finalTodo)
    );
    // onClose();
  };

  const handleGetAllTasks = async (e) => {
    dispatch(
      fetchTasks()
    );
    // onClose();
  };

  const addNewInputTaskField = () => {};

  useEffect(() => {}, [isModalOpen]);
  const [dateValue, onDateChange] = useState(new Date());
  
  return (
    <>
      <div className={styles.todoModalContent}>
        <div className={styles.todoSection}>
          <div className={styles.taskHeader}>
            <span>Title </span>
            <span style={{ color: "red" }}>*</span>
          </div>
          <input
            className={styles.taskInput}
            placeholder="Enter Task Title" 
            value={todoTitle}
            onChange={(e) => handleTodoTitleChange(e.target.value)}
          ></input>
        </div>

        <div className={styles.todoSection}>
          <div className={styles.priorityContainer}>
            <div className={styles.taskHeader}>
              Select Priority
              <span style={{ color: "red" }}>*</span>
            </div>
            <SelectionButton borderColor={"#E2E2E2"} fontColor={"#767575"} color={"transperant"} selectionColor={"E2E2E2"} flag={taskPriority=="High"?true:false }  >
              <DotIndicator dotColor={"#FF2473"} height={"10px"} />
              <span>HIGH PRIORITY</span></SelectionButton>
            <div className={styles.taskPriorityContent} onClick={()=>{taskPriority="High";console.log("This is priority " +taskPriority)}} id="high"  style={{ backgroundColor: taskPriority == 'High' ? '#EEECEC' : 'transperant' }}>
              <DotIndicator dotColor={"#FF2473"} height={"10px"} />
              <span>HIGH PRIORITY</span>
            </div>
            <div className={styles.taskPriorityContent} onClick={()=>{taskPriority="Moderate";console.log("This is priority " +taskPriority)}} id="moderate" style={{ backgroundColor: taskPriority == 'Moderate' ? '#EEECEC' : 'transperant' }}>
              <DotIndicator dotColor={"#18B0FF"} height={"10px"} />
              <span>MODERATE PRIORITY</span>
            </div>
            <div className={styles.taskPriorityContent} onClick={()=>{taskPriority="Low";console.log("This is priority " +taskPriority)}} id="low" style={{ backgroundColor: taskPriority == 'Low' ? '#EEECEC' : 'transperant' }}>
              <DotIndicator dotColor={"#63C05B"} height={"10px"} />
              <span>LOW PRIORITY</span>
            </div>
          </div>
        </div>

        <div className={styles.todoSection}>
          <div>
            <span>Checklist({checkList.filter(Boolean).length}/{checkList.length}) </span>
            <span style={{ color: "red" }}>*</span>
          </div>
          <div className={styles.addedTaskList}>
              {tasks.map((task, index) => (
               <div className={styles.addedTaskItem}> 
               <input
            type="checkbox" 
            defaultChecked={checkList[index]}
            onChange={() =>
              handleCheckboxChange(index)
            }
          />
                <div key={index}>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => handleTaskChange(index, e.target.value)}
                  />
                </div>
                <button onClick={() => index >= 0 && handleDeleteTask(index)}
                  >Delete</button></div> 
              ))}
          </div>
          <div className={styles.addTask}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "grey",
                border: "transparent",
                padding: "0px",
              }}
              onClick={handleAddTask}
            >
              + Add New
            </button>
          </div>
        </div>
        <div className={styles.todoSection}>
        <div className={styles.buttonContainer}>        
        <ReactDatePicker selected={dateValue} onChange={onDateChange}  value={dateValue} className={styles.datepicker}/>
          {/* <DatePicker onChange={onDateChange} value={value} /> */}          
            <OutlinedButton borderColor={"#CF3636"} color={"transparent"} fontColor={"#CF3636"} onClick={handleClose}>Cancel</OutlinedButton>
            <SolidButton bgcolor={"#17A2B8"} fontColor={"#FFFFFF"} onClick={handleAddTodo}>Save</SolidButton>                        
            <SolidButton bgcolor={"#FF2473"} fontColor={"#FFFFFF"} onClick={handleGetAllTasks}>Test</SolidButton>            
        </div>
        </div>
      </div>
    </>
  );
};

export default AddToDoModal;
