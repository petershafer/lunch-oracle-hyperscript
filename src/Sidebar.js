import { Component } from 'react';
import h from 'react-hyperscript';
import { Nav, NavItem } from 'react-bootstrap';
import SharedStore from './SharedStore';
import { observer } from 'mobx-react';

@observer class Sidebar extends Component {
  render() {
    return (
      h(Nav, { bsStyle: 'pills' }, 
        SharedStore.parameters.map(item => {
          return h(NavItem, {
              onClick: e => SharedStore.toggle(item.get('key')),
              active: SharedStore.myParams.includes(item.get('key')),
            },
            `${item.get('label', '')}`
          );
        })
      )
    );
  }
}

export default Sidebar;
