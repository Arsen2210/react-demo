import React  from 'react';
import classes from './style.css';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';


export default class Task extends React.PureComponent{
    constructor(props){
        super(props);
        console.log('Task constructor');
        this.state = {
          isEdit: false,
          editText: props.text
        }
    }


    componentDidMount(){
        console.log('Task mounted');
      }

      componentDidUpdate(prevProps, prevState){
        console.log('Task updated');
        // console.log('prevProps', prevProps);
        // console.log('this.props', this.props);
      }

 /*       shouldComponentUpdate(prevProps, prevState){
       return prevProps.text !== this.props.text;
       
      } */

      componentWillUnmount(){
        console.log('Task unmounted');
      }

      handleEdit = ()=>{
        this.setState({
          isEdit: true
        });
        this.props.onEdit();
      }

      cancelEdit = ()=> {
        this.setState({
          isEdit: false,
          editText: this.props.text
        });
        this.props.onEdit();
      }

      handleInputChange = (event)=>{
        this.setState({
          editText: event.target.value
        });
      }

      saveEdit = ()=>{
        this.props.onSaveEdit(this.state.editText);
        this.setState({
          isEdit: false
        });
        
      }

   render(){
    console.log('Task render');
    const {text} = this.props;
    const {isEdit} = this.state;
    
    const spanStyle = {
        fontSize: '20px',
        color: 'maroon'
    };
    
        return (
<>

<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <FontAwesomeIcon icon={faTrashAlt} />
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>







            <div className = {classes.taskBlock}>
            <input 
            type="checkbox"
            onChange = {this.props.onCheck}
            />
            {
              isEdit ? 
              <input type="text" value={this.state.editText} onChange = {this.handleInputChange}/> :
              <span style = {spanStyle}>{text}</span>
            }
            
            {
              isEdit ?
              <> 
              <button onClick = {this.saveEdit}>Save</button>
              <button onClick = {this.cancelEdit}>Cancel</button>
              </> :
              <>
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.props.onDelete}>X</button>
              </>
            }

        </div>

        </>
        );
   }
}