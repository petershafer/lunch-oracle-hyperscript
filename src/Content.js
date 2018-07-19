import { Component } from 'react';
import h from 'react-hyperscript';
import SharedStore from './SharedStore';
import { observer } from 'mobx-react';

@observer class Content extends Component {
  render() {
    return ([
      h('p#content', 'content'),
      h('ul', {},
        SharedStore.myList.map(item => h('li', item))
      )
    ]);
  }
}

export default Content;
