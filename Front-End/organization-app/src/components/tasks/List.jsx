import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
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
                    <td className="col-md-10" >{task.task} - {task.status}</td>
                    <td>
                      {
                        task.status === "Em andamento" || "Pendente"
                        ? <a className="check" href="">
                          <FontAwesomeIcon icon="check-circle"/>
                        </a>
                        : null
                      }
                    </td>
                    <td>
                      <a className="delete" href="#">
                        <FontAwesomeIcon icon="trash-alt"/>
                        </a>
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
