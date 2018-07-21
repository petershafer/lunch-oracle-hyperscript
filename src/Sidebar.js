import { Component } from 'react';
import h from 'react-hyperscript';
import { Nav, NavItem } from 'react-bootstrap';
import SharedStore from './SharedStore';
import { observer } from 'mobx-react';
import Toggle from 'react-bootstrap-toggle';

@observer class Sidebar extends Component {
  render() {
    return ([
      h(Nav, { bsStyle: 'pills' }, 
        SharedStore.parameters.map(item => {
          return h(NavItem, {
              onClick: e => SharedStore.toggle(item.get('key')),
              active: SharedStore.myParams.includes(item.get('key')),
            },
            `${item.get('label', '')}`
          );
        })
      ),
      h(Toggle, {
        on: h('h4', 'All'),
        off: h('h4', 'Any'),
        onClick: e => SharedStore.toggleAll(),
        active: SharedStore.all,
        size: "xs",
        offstyle: "warning",
      })
    ]);
  }
}

export default Sidebar;
