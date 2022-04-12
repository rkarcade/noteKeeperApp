import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

//delete function
// under the delete button, add the onClick handleclci, when the button gets clicked,
// we needed to handleclick and trigge a function that was passed over from props that';s coming from deleteFunction in apps
//under the deleteNote we will need the id of that note that needs to be deleted. and the id will
//pass over each of the notes that gets rendered as a prop, which we will add an Ondelete prop inside the Note input
//return (
//   <div>
//   <Header />
//   <CreateArea onAdd={addNote} />
//   {notes.map((noteItem) => {
//     return (
//     <Note
//     title={noteItem.title}
//     content={noteItem.content}
//     onDelete = {deleteNote}
//     />
//     );
//   })}
//   <Footer />
// </div>
// );

//so now to Note.jsx, we will tap into props.onDelete which is connected to the note that has ondelete  and that will trigger the function deleteNotes.
//so when
// function deleteNote(id){
//   console.log("delete was triggered")
// }
//it will delete was triggered.

//so it works, nso now to delete it, it must go through the list of previous notes prevNotes array, and loop
//through it using the filter function and takes up to 3 arguments
// function deleteNote(id){
//   setNotes(prevNotes => {
//     return prevNotes.filter((noteItem, index) => {
//       return index !== id;

//     })
//   })
// }

//now you have to also include key and id into the note component within app.js
// {notes.map((noteItem, index) => {
//   return (
//     <Note
//       key={index}
//       id={index}
//       title={noteItem.title}
//       content={noteItem.content}
//       onDelete={deleteNote}
//     />
//   );
// })}

//when each of the note component are rendered, we will pass over the index of the noteitem form the notes
//aray from the id which we can pick up from note component which now passed in note(props) note.jsx looks like
//and send it back when we trigger the onDelete

//last thing, to reset the input to "" after you click submit
// function submitNote(event) {
//   props.onAdd(note);
//   setNote({
//     title: "",
//     content: ""
//   });
//   event.preventDefault();
