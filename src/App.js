import { Component } from 'react';
import h from 'react-hyperscript';
import { Alert, Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Sidebar from './Sidebar';

const header = (props) => {
  return (
    h('div', { className: 'App-header' }, [
      h('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      h('h2', 'Welcome to React')
    ])
  );
};

const view = (props) => {
  return (
    h(Grid, { id: 'view' },
      h(Row, {}, [
        h(Col, { xs: 2 },
          h(Sidebar)
        ),
        h(Col, { xs: 10 },
          h(Content)
        )
      ])
    )
  )
};

class App extends Component {
  render() {
    return (
      h('div', { className: 'App' }, [
        h(header),
        h(view)
      ])
    );
  }
}

export default App;
