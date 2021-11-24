console.log("this is our project")
shownotes();
// button ottidre en agbek anta

let addbtn = document.getElementById('addbutton');

addbtn.addEventListener("click" , function(e){
    let addtxt = document.getElementById("txtarea");
    let notes = localStorage.getItem("addnotes");
    if (notes == null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("addnotes", JSON.stringify(notesObj));
    addtxt.value = "";
    // console.log(notesObj)
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("addnotes");
    if (notes == null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="notescard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onClick = "deletenote(this.id)" class="btn btn-primary">Delete Notes</button>
            </div>
        </div>`;
       
    });
    let elem = document.getElementById("addnotes");
    if (notesObj.length != 0) {
        elem.innerHTML = html;
    }
    else{
        elem.innerHTML = 'Nothing to show ! " Add a note';
    }
}
function deletenote(index){
    let notes = localStorage.getItem("addnotes");
    if (notes == null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("addnotes", JSON.stringify(notesObj));
    shownotes();
}
let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notescard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        console.log(cardTxt);
    })
})
