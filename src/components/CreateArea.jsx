import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange() {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

//1) create a state const called const = {note, setNote} = UseState ()); that contains both title and content
//now add two values into the forms input within createarea.jsx
//return (
//   <div>
//   <form>
//     <input name="title"  value ={note.title} placeholder="Title" />
//     <textarea name="content" value ={note.content} placeholder="Take a note..." rows="3" />
//     <button>Add</button>
//   </form>
// </div>
// );

//now add the onChange which will pass the handleChange function for both the title and dcontent
//handlechange will be receiving a receive an exvent when it's get triggered and destructure the event so we get event taeget and event value
//we're going to crea te a dstructured object using the const keyword and destructured object will tap into event.target.name and event.target.vlauie

//setNote function within the handlechange function .....>>>setNote should be able to receive
//the previous hotes and im going to use that to add to the existing notes

//So in my setote I'm going to return a new object with the previous note
//and in addition I'm going to add the new name and value. And remember that this syntax simply turns this
//name key from just the string name for the key to the actual value of this name constant.

//2) now cteate a submit Note, pass a that as onClick function in notes and then create that function
//pass an event to the submitnote which is triggered by the onclick.
//    event.preventDefault(); when you refresh the page, it will have some flashes, so to get rid of this, use preventDefault when clicking the button
//next is somehow trigger the function that can pass this note back to the app. to do that, we have to pass in a function as a prop.

//so within app.jsx, create a function call add Note. this add note will receive that note object (from the const in create area)
//So that addNote is going to be added as a value to one of the props for the createarea and you can
//call it anything you want but I'm going to call it onAdd and I'm going to set it equal addNote (within the component tag in app.jsx)
//now to trigger the addNote by gerring hold of props that gets passed in CreateArea the props.onAdd. And calling this onAdd from the props is going to be equivalent to calling the
//addNote from the App.jsx. And in order for us to be able to add the note we have to pass it back
//as an input.So in the onAdd we're going to pass over the current created note, like so. Now we're pretty much done
//if you add console.log(note) in function app addNotes, you be able to see what was captuired

//now to add the note into our array and that array would need state becaus eit's going to be changed. in app.jsx
//  const [notes,setNotes] = useState([]); <---it's empty in the beginning only when user add new notes then only does it get populate
//now to create setNotes function  within addNote function to add onto the array of notes
// function addNote (newNote) {
//   setNotes(prevNotes => {
//     return [...prevNotes, newNote];
//   });

// I want to use my notes array and map through it to render a different note component for each item inside the
// array. My map is going to take a function and I'm just going to create an arrow function in this case.
// And for each of the note items inside this notes array remember that the map function is going to loop
// through this notes array and get hold of each of the note items inside and execute this function.

// Then I'm going to return a new note component and this note component is going to need some properties
// passed over. So one of these is going to be the title which is going to be set as noteItem.title.
// The next is the content which is going to be the noteItem.content.

// And now in order for this code to be recognized as Javascript I'm going to go ahead and select all of
// it and add the curly braces around it so that my errors go away.
