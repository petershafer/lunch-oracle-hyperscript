import { Component } from 'react';
import h from 'react-hyperscript';
import { Nav, NavItem } from 'react-bootstrap';
import SharedStore from './SharedStore';

class Sidebar extends Component {
  render() {
    return (
      h(Nav, { bsStyle: 'pills' }, 
        [1,2,3].map(item => {
          return h(NavItem, {
              onClick: e => SharedStore.doSomething(),
            },
            `Nav Item ${item}`
          );
        })
      )
    );
  }
}

export default Sidebar;
