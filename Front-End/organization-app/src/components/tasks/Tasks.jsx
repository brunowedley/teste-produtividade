import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[]
    };
    this.loadTasks = this.loadTasks.bind(this);
  };

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

  componentDidMount() {
    this.loadTasks();
  }

  render() {
    const { tasks } = this.state
    return(
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
             <p className="title">To-do</p>
             <List tasks={Object.values(tasks).filter((task) => task.status !== "Pronto" )}/>
           </Col>
           <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
             <p className="title">Done</p>
             <List tasks={Object.values(tasks).filter((task) => task.status === "Pronto" )}/>
           </Col>
      </Row>
    )
  }
}
export default Tasks;