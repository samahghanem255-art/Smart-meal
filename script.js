let cart=[];
let total=0;

function addToCart(name,price){
cart.push({name,price});
total+=price;
document.getElementById("cartCount").innerText=cart.length;
alert(`تمت إضافة ${name} إلى السلة`);
}

function openCart(){
if(cart.length===0){
alert("السلة فارغة");
return;
}
let items=cart.map(i=>`${i.name} - ${i.price} دج`).join("\n");
alert(`🛒 طلبك:\n${items}\n\nالمجموع: ${total} دج`);
}

function confirmOrder(){
if(cart.length===0){
alert("أضف عناصر أولا");
return;
}
window.open(`https://wa.me/213661234567?text=أريد تأكيد طلبي، المجموع ${total} دج`);
}
