import React from 'react';
import ReactDOM from 'react-dom'
import NoteCard from './notesCard'

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
    }
    // componentDidMount(){
    //     firebase.database().ref().on('value', (res) => {
    //     console.log(res.val())
    //     })
    // }

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
        this.noteTitle.value = "",
        this.noteText.value = "",
        this.showSideBar(e)
    }

    removeNote(e){
        console.log('One day I would like to remove this')
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
                        <NoteCard note={note} key={`note-${i}`}/>
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