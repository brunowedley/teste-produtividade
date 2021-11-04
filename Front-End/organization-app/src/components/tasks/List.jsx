import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
  async checkTask(task) {
    await fetch(`http://localhost:3001/updateTask/${task._id}`, 
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       ...task, taskStatus: 'Pronto'
      })
    }
  );
  
  this.props.loadTasks();
  }

  async checkTaskOnGoing(task) {
    await fetch(`http://localhost:3001/updateTask/${task._id}`, 
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       ...task, taskStatus: 'Em andamento'
      })
    }
  );
  
  this.props.loadTasks();
  }

  async deleteTask(task) {
    if(window.confirm(`Are you sure you want to delete: ${task.task}? `)) {
      await fetch(`http://localhost:3001/deleteTasks/${task._id}`, {method: 'DELETE'});
      // console.log(`to aqui hein, no id: ${task._id}, task: ${task.task}`);
      this.props.loadTasks();
    }
  }

  render() {
    const { tasks } = this.props
    return(
      <div>
        <Card>
          <Card.Body>
            <Table responsive>
              <tbody>
                {Object.values(tasks).map((task, index) => {
                  return <tr key={task.id}>
                    <td className="col-md-10" >{task.task} - {task.taskStatus}</td>
                    <td className="col-md-5" >{task.details}</td>
                    <td>
                      {
                        task.taskStatus === "Pendente"
                        ? <a className="check" href="#">
                          <FontAwesomeIcon icon="calendar-day"
                          onClick={() => this.checkTaskOnGoing(task)} size='lg'/>
                        </a>
                        : <a className="check" href="#">
                        <FontAwesomeIcon icon="check-circle"
                        onClick={() => this.checkTask(task)} size='lg'/>
                      </a>
                      }
                    </td>
                    <td>
                        <a className="delete" href="#" onClick={() => this.deleteTask(task)}>
                        <FontAwesomeIcon icon="trash-alt"/>           
                        </a>
                        {/* <a className="check" href="#" onClick={() => this.deleteTask(task)}>
                        <FontAwesomeIcon icon="pencil-alt"/>         
                        </a> */}
                    </td>
                    </tr>
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default List;
