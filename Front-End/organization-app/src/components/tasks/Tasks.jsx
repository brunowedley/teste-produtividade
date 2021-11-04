import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';
import CreateTask from './create_task';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Tasks extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tasks:[]
    };
    this.loadTasks = this.loadTasks.bind(this);
    // this.handleSetVisible = this.handleSetVisible.bind(this);
  };

  async deleteAllTask() {
    if(window.confirm(`Are you sure you want to delete all tasks? This will be forever`)) {
      await fetch(`http://localhost:3001/DELETEALL`, {method: 'DELETE'});
      // console.log(`to aqui hein, no id: ${task._id}, task: ${task.task}`);
      this.loadTasks();
    }
  }

  async loadTasks() {
    try{
      let response = await fetch(`http://localhost:3001/getAllTasks`);
      const tasks = await response.json();
      console.log(tasks);
      this.setState({ tasks: tasks });
    } catch (e) {
      console.log('erro');
    }
  }

  // async handleSetVisible() {

  // }

  componentDidMount() {
    this.loadTasks();
  }

  render() {
    const { tasks } = this.state
    return(
      <>
      <CreateTask loadTasks={this.loadTasks}/>
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
             <p className="title">Pending</p>
             <List loadTasks={this.loadTasks} tasks={Object.values(tasks).filter((task) => task.taskStatus === "Pendente" )}/>
           </Col>
           <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
             <p className="title">On Going</p>
             <List loadTasks={this.loadTasks} tasks={Object.values(tasks).filter((task) => task.taskStatus === "Em andamento" )}/>
           </Col>
           <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
             <p className="title">Done</p>
             <List loadTasks={this.loadTasks} tasks={Object.values(tasks).filter((task) => task.taskStatus === "Pronto" )}/>
             <Button onClick={() => this.deleteAllTask()} variant="red" className="float-right remove_tasks_btn">Remove all tasks / Panic Button</Button>
           </Col>
      </Row>
      </>
    )
  }
}
export default Tasks;