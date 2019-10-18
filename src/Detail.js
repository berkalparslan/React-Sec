import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jsonList } from './actions/NoteAction';

class Detail extends Component {
    
    fncRender = () => {
        this.props.jsonList();
        const { obj } = this.props;
      //  const dt = JSON.parse(JSON.stringify(obj)) //data.json uygun oldugu icin parse edebildi
      if (obj.Products !== undefined){
        return obj.Products.map( (item, index) => {
            return (<li key={index}> { item }</li>)
        } )
    }
    }
3
    componentWillMount(){
        this.props.jsonList()
    }

    render() {
        
        return (
            <div>
                <h1> Detail </h1>
                <ul>
                    {this.fncRender()}
                </ul>
            </div>
        );
    }
}

function mapState(state) {
    return{
        obj:state
    }
}

export default connect(mapState, { jsonList })(Detail)