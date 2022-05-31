let nameField = document.getElementById("name");
let noField = document.getElementById("no");
let addBtn = document.getElementById("btn");
// ul
let mybody = document.getElementById("body");
let ul = document.querySelector("#ul");
// addEventListener
addBtn.addEventListener("click", add);

//Functions
function add(e) {
  e.preventDefault();
  let names = nameField.value;
  let number = noField.value;
  if (names !== "" && number !== "") {
    document.querySelectorAll("input").forEach((input) => {
      input.style.borderColor = "#00000066";
    });
    console.log("yes");
    // create div
    let newLi = document.createElement("li");
    newLi.classList.add("userList");
    newLi.innerHTML = `  
         <img src="${img[randomImage()]}" alt="">
        <div class="userWrapper">
            <span id="userName">${names}</span>
            <span id="userNo">${number}</span>
        </div>
        <div class="deleteIcon" onclick=(remove(e))>
              <i class="fa fa-trash"></i>
        </div>`;
    ul.appendChild(newLi);
    nameField.value = "";
    noField.value = "";
    newLi.addEventListener("click", remove);
  } else {
    document.querySelectorAll("input").forEach((input) => {
      input.style.borderColor = "red";
    });
  }
  // ul.innerHTML = newLi
}
// deleting the Contacs
function remove(e) {
  let selected = e.target;
  let parentLi = selected.parentElement;
  if (selected.classList.contains("deleteIcon")) {
    parentLi.remove();
  }
}
// getting random number between 0 - img.length
function randomImage() {
  return Math.floor(Math.random() * img.length);
}

let img = [
  "https://media.istockphoto.com/vectors/businessman-icon-symbol-vector-isolated-on-white-background-vector-id1390193773?k=20&m=1390193773&s=612x612&w=0&h=w9vAKWaWcTfSC_hv7OrVB4r_QPlFEYqIixl1B1enwTc=",
  "https://media.istockphoto.com/vectors/default-placeholder-man-vector-id844000458?k=20&m=844000458&s=612x612&w=0&h=6vA5LeyqldiTyXVUbTjR-c148f7x0k-qeisBCbV7ZFc=",
  "https://media.istockphoto.com/vectors/female-avatar-profile-picture-silhouette-light-shadow-vector-id885234698?k=20&m=885234698&s=612x612&w=0&h=_tU856TWSs-DHSjkobQlNnvxhw14k2-dY1XbAxohI2Y=",
];
