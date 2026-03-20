


function showsidebar(){
    console.log("sidebar open");
     document.getElementById('sidebar') .style.display="flex";
   
    // sidebar.style.zIndex="99999";

}
function hidesidebar(){
     document.getElementById('sidebar') .style.display="none";
   
}




function selectSize(box) {
    let all = document.querySelectorAll('.allsizes');

    // Remove dark-grey from all
    all.forEach(item => item.classList.remove('selected'));

    // Add dark-grey to clicked one
    box.classList.add('selected');
        currentProduct.size = box.innerText; // ⭐ Save chosen size
}

function addbtn() {

    if (!currentProduct.size) {
        alert("Please select a size");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if same product + size already exists
    const existingIndex = cart.findIndex(item =>
        item.name === currentProduct.name &&
        item.size === currentProduct.size
    );

    if (existingIndex !== -1) {
        // Increase quantity if already in cart
        cart[existingIndex].quantity += 1;
    } else {
        // Add new product with quantity
        cart.push({
            name: currentProduct.name,
            price: Number(currentProduct.price),
            size: currentProduct.size,
            img: currentProduct.img,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(currentProduct.name + " added to cart!");
}
