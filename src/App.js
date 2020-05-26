import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import './index.css';
import lessClasses from './components/style.less';
// import Person from './components/Person';
// import greet, {idGen as idGenerator, Hello, getThis} from './tools';
// import * as newObj from './tools';
import ToDo from './components/ToDo';
// import Counter from './components/Counter';
// import Animal from './components/Animal';
// import Input from './components/Input';
// newObj.getThis();
// getThis();
import Div from './components/HOC/Div';

console.log('classes', classes);

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('App constructor');
    this.state = {
      counter: 0
    };
}

componentDidMount(){
  console.log('App mounted');
}


handleClick = ()=>{
  this.setState({
    counter: this.state.counter+1
  });
}

  render(){
console.log('App render starts');

  return (
    <div className={'App'}>

<button
onClick = {this.handleClick}
>
Click me and see the magic!</button>

<Div text='hello' className={classes['color-red']}>
<span >span text</span>

 <p>Lorem ipsum dolor sit amet.</p>
 <a href="/">Click me</a>
</Div>

<ToDo/>
<div className={lessClasses.block}>dfgdfgdf</div>

<div className="but">but</div>
    </div>
  );

  }

}

export default App;


