import React from 'react'
export default class NoteCard extends React.Component{
    constructor(){
        super()
        this.state ={
            editing: false, 
            note: {}
            }
    }
    componentDidMount(){
        this.setState({
            note: this.props.note
        })
    }
    render(){
        return(
            <div className="noteCard">
                    <i className="fa fa-edit"
                    onClick={() => this.setState({editing: true})}></i>
                    <i className="fa fa-times"
                    onClick={(e) => this.props.removeNote(e, this.props.index)}></i>
                    <h4>{this.state.note.title}</h4>
                    <p>{this.state.note.text}</p>
            </div>
        )
    }
    
}
/*
    this.state.notes = [ {title:'blah, text:'test'}, {title:'blah, text:'test'} ]
    let testVariable = this.state.notes[0]
    testVariable = {title: 'blah', text: 'test'}

    newArray.splice(testVariable, howmanytoremove, )
*/