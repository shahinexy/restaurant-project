// ======== responsive navbar =========
const navIcon = document.querySelector('.nav_icon i')
const mobileUl = document.querySelector('#mobile_nav ul')
navIcon.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-bars')){
        e.target.classList.remove('fa-bars');
        e.target.classList.add('fa-xmark');        
    }else{
        e.target.classList.remove('fa-xmark');   
        e.target.classList.add('fa-bars');
    }
    mobile()
})

function mobile(){
    if(mobileUl.classList.contains('hidden')){
        mobileUl.classList.remove('hidden')
        mobileUl.classList.add('block')
    } else{
        mobileUl.classList.remove('block')
        mobileUl.classList.add('hidden')
    }
}

// Online order area js
const items = document.querySelector('.all_items');
const addOrder = document.querySelector('#order');
items.addEventListener('click', (e)=>{
    // console.log(addOrder);
    const div = e.target.parentElement;
    addOrder.parentElement.appendChild(div);
    if(e.target.classList.contains('teams')){
        console.log(items);
    }

})