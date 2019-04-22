import React from 'react';
import ReactDOM from 'react-dom'
import NoteCard from './NoteCard'

  const config = {
    apiKey: "AIzaSyDshodj2AbH9WwruyMhcaiF3yABrOKMAiU",
    authDomain: "noted-926fe.firebaseapp.com",
    databaseURL: "https://noted-926fe.firebaseio.com",
    projectId: "noted-926fe",
    storageBucket: "noted-926fe.appspot.com",
    messagingSenderId: "546847460903"
  };
  firebase.initializeApp(config);


class App extends React.Component {
    constructor(){
        super()
        this.state ={
            notes: [],
        }
        this.showSideBar =this.showSideBar.bind(this)
        this.addNote =this.addNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.editNote = this.editNote.bind(this)

    }
    // componentDidMount(){

    showSideBar(e){
        e.preventDefault()
        this.sideBar.classList.toggle("show")
       // this.props =this.props.bind(this)

    }
    addNote(e){
        e.preventDefault()
        console.log(this)
        //console.log(`this is: ${this}`)
        //console.log(`props is: ${props}`)
        //console.log(`state is: ${state}`)
        const note = {
            title: this.noteTitle.value,
            text: this.noteText.value
        }
        const newNotes = Array.from(this.state.notes)
        newNotes.push(note)
        this.setState({
            notes: newNotes
        })
        console.log(this.state.notes)
        this.noteTitle.value = "",
        this.noteText.value = "",
        this.showSideBar(e)
    }
  //takes a target an
  //I'm going to attach the funciton removeNote to a button. This button corressponds with a speceific notecard
    removeNote(e, i){
        console.log('One day I would like to remove this', e)
        console.log(i)
        //need to remove idex of newwarry which is living in state.
        const newArray = Array.from(this.state.notes)
        newArray.splice(i,1)
        this.setState({
            notes: newArray
        })
        
    }

    editNote(e){
        console.log('begin editing')
        const title = e.target.title;
        const text = e.target.text;
        this.setState({
          [title]: text,
        });
        this.addNote =this.addNote.bind(this)
        this.editNote= this.editNote.bind(this)
      }
    
    render(){

        return (
            <div>
                <header className="mainHeader">
                    <h1>Hello Ms Choza. Feel free to add notes here:</h1>
                    <nav>
                        <a href=""
                        onClick={this.showSideBar}
                        >Add New Note</a>
                    </nav>
                </header>
                <section className="notes">
                {this.state.notes.map((note ,i) => {
                    return(
                        <NoteCard note={note} key={i}
                        index={i}
                       removeNote={this.removeNote}
                       editNote={this.editNote}
                        />
                        
                    )
                }).reverse()}
                </section>
                <aside className="sidebar" ref={ref => this.sideBar =ref}>
                    <form
                    onSubmit={this.addNote}>
                    <h3>Add New Note</h3>
                    <div className="close-btn"
                    onClick={this.showSideBar}>
                        <i className="fa fa-times"></i>
                    </div>
                        <label htmlFor='note-title'>Title</label>
                        <input type="text" name="note-title" ref={ref => this.noteTitle = ref}/>
                        <label htmlFor="note-text">Test:</label>
                        <textarea name="note-text" ref={ ref => this.noteText = ref}></textarea>
                        <input type="submit" value="Add New Note"/>
                    </form>
                </aside>
               

            </div>
        )
    }
   
}
ReactDOM.render(<App/>, document.getElementById('app'))