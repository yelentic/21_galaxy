# react-pushpop

Push a property to context, pop from context into a property. The idea is to remove the burden of learning React context's (as light as it is) in favor of using the more visible and better understood properties.

### Example of a push
````javascript
import React from 'react'
import { Push } from 'react-pushpop'

@Push('myProperty', React.PropTypes.string)
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

class MyContainer extends React.Component {
  render() {
    // myProperty is pushed to MyComponent's context
    // and is available to descendant components through
    // the context
    return <MyComponent myProperty='MyValue'/>
  }
}
````

### Example of a pop
````javascript
import React from 'react'
import { Pop } from 'react-pushpop'

@Pop('myProperty', React.PropTypes.string)
class MyComponent extends React.Component {
  render() {
    // myProperty is read from context and
    // made available as a prop
    return <div>{this.props.myProperty}</div>
  }
}
````
