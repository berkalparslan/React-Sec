import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNote, removeNote} from './actions/NoteAction';

class  App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: ''
    }

  }

fncSend = () => {

   const text = this.state.text
   const date = this.state.date
   this.props.addNote(text,date)
   console.log("data : "+ JSON.stringify(this.props.obj))
}

fncNodeList = () => {
  const {obj} = this.props; // obj = this.props.obj ile ayni
  return obj.map((item,index) => {
    return(
      <li key={index}>{item.text} - {item.date} - <button className="btn btn-danger" onClick={ ()=> this.fncDelete(item.id) }> Delete </button> </li>
    )
  })
}

fncDelete = (id) => {
  this.props.removeNote(id)
}


  render() {
    return (

      <div>
        <h1>App</h1>
        <input className= "form-control" onChange= {(evt) => {this.setState({text: evt.target.value})}} type="text"/><br/>
        <input className= "form-control" onChange= {(evt) => {this.setState({date: evt.target.value})}} type="date"/><br/>
        <button onClick= { () => this.fncSend() } className="btn btn-success">Send</button>

        <hr></hr>
        <ul>
        {this.fncNodeList()}
        </ul>
      </div>

    )
  }
}

function mapState(state){
  return{
    obj: state
  }
}

export default connect(mapState, { addNote, removeNote})(App)