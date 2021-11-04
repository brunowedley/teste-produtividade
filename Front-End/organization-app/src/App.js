import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './App.scss';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt, faSitemap, faPencilAlt, faCalendarPlus, faCalendarDay, faArrowDown, faSortAlphaDown, faCalendarTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt, faSitemap, faCalendarPlus, faPencilAlt, faCalendarDay, faSortAlphaDown, faCalendarTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Container>
         <Tasks />
       </Container>
      </div>
    );
  }
}

export default App;

// estilos e parte da arquitetura do front feitos seguindo o tutorial https://onebitcode.com/crud-com-rails-e-react/
