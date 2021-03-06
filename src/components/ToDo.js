import React, { Component } from 'react';
import { idGen } from '../utils';
import Task from './Task/Task';
import NewTask from './NewTask';

class ToDo extends Component {
    constructor(props){
        super(props);
        console.log('ToDo constructor');
    }
    state = {
        tasks: [],
        taskIds : new Set()
    }

    componentDidMount(){
        console.log('ToDo mounted');
      }


    addTask = (inputText) => {
        const tasks = [...this.state.tasks];
        tasks.push({
            id: idGen(),
            text: inputText
        });
        this.setState({ tasks });
    }

    removeButtonHandler = (taskId)=> ()=> {
       const newTasks = this.state.tasks.filter(({id}) => taskId !== id);
       const newTaskIds = new Set(this.state.taskIds);
       newTaskIds.delete(taskId);

        this.setState({
            tasks: newTasks,
            taskIds: newTaskIds
        });
    }

    handleCheck = (taskId)=> () => {
        let taskIds = new Set(this.state.taskIds);

        if(taskIds.has(taskId)){
            taskIds.delete(taskId);
        }
        else {
            taskIds.add(taskId);
        }
        this.setState({ taskIds });
    }


    removeBulkHandler = ()=>{
        let {tasks, taskIds} = this.state;

        taskIds.forEach(id =>{
            tasks = tasks.filter(task => task.id !== id);
        });

        this.setState({
            tasks,
            taskIds: new Set()
        });

    }

    render() {
        console.log('ToDo render');
    
        /*         const tasks = this.state.tasks
                    .map(task => <Task key={task.id} text={task.text} />); */
        const tasks = this.state.tasks
            .map(({id, text}) => {
                return (
                    <Task 
                    key={id}
                    text={text}
                    onDelete = {this.removeButtonHandler(id)}
                    onCheck = {this.handleCheck(id)}
                     />

/*                     <div key={task.id}>
                        <span>{task.text} </span>
                        <button onClick={this.removeButtonHandler(task.id)}>X</button>
                    </div> */
                )
            }

            );

        return (
            <>
                <div>
                <NewTask 
                onTaskAdd = {this.addTask}
                />
                </div>
                <div>
                    {tasks}
                    <button 
                    onClick = {this.removeBulkHandler}
                    disabled = {!this.state.taskIds.size}
                    >
                    Remove
                    </button>
                </div>
            </>

        );
    }
}

export default ToDo;