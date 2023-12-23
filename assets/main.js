// ======== responsive navbar =========
const navIcon = document.querySelector(".nav_icon i");
const mobileUl = document.querySelector("#mobile_nav ul");
navIcon.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    e.target.classList.remove("fa-bars");
    e.target.classList.add("fa-xmark");
  } else {
    e.target.classList.remove("fa-xmark");
    e.target.classList.add("fa-bars");
  }
  mobile();
});

function mobile() {
  if (mobileUl.classList.contains("hidden")) {
    mobileUl.classList.remove("hidden");
    mobileUl.classList.add("block");
  } else {
    mobileUl.classList.remove("block");
    mobileUl.classList.add("hidden");
  }
}

// Online order area js
const items = document.querySelector("#all_items ");
const addOrder = document.querySelector("#order");
const totalP = document.querySelector('#total')
items.addEventListener("click", (e) => {
  if (e.target.closest("div .teams")) {
    const div = e.target.parentElement;
    const clone = div.cloneNode(true);
    addOrder.appendChild(clone);
  }
});

addOrder.addEventListener("click", (e) => {
  if (e.target.closest("div .teams")) {
    const div = e.target.parentElement;
    addOrder.removeChild(div);
  }
});

// confirm order
const submitBtn = document.querySelector('.btn');
const success = document.querySelector('.success_msg');
submitBtn.addEventListener('click' , (e)=>{
    success.innerText = 'You will get your order as soon as possible'
})