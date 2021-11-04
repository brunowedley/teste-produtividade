import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateTask(props) {
  const [task, setTask] = useState('');
  const [details, setDetails] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [show, setShow] = useState('');

  const handleSubmit = (async () => {
    await fetch(`http://localhost:3001/createTask`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task, details: details, taskStatus: taskStatus
      })
    })
    setShow(false)
    setTask('')
    setDetails('')
    setTaskStatus('')
    props.loadTasks();
  });

  return(
    <div>
      <Button onClick={e => setShow(true)} variant="dark" className="float-right create_task_btn"><FontAwesomeIcon icon="calendar-plus" size="lg" /></Button>

      <Modal show={show || false} onHide={e => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control className="form-group" type="email" placeholder="What is yout task?" value={task || ''} onChange={e => setTask(e.target.value)} />
          <Form.Control className="form-group" type="email" placeholder="Tell me details about it" value={details || ''} onChange={e => setDetails(e.target.value)} />
          <Form.Select className="form-group" class="form-select" multiple aria-label="multiple select example" onChange={e => setTaskStatus(e.target.value)}>
              <option selected>Select the status of your task</option>
              <option value="Pendente">To Do</option>
              <option value="Em andamento">On Going</option>
              <option value="Pronto">Done</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e => setShow(false)}>
            Close
          </Button>
          <form onSubmit={handleSubmit}>
            <Button variant="dark" type="submit">
              Create
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateTask;