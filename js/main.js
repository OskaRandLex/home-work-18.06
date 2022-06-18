const submitItem = document.querySelector('.add-item');

submitItem.addEventListener('click', AddItem);

function AddItem() {
    let inItemName = document.getElementById('item-name').value;
    let inImgSrc = document.getElementById('img-item').value;
    let inProducer = document.getElementById('producer').value;
    let inCount = document.getElementById('count').value;
    let inPrice = document.getElementById('price').value;

    const ItemName = document.getElementById('name');
    const Img = document.getElementById('img');
    const producer = document.getElementById('prod');
    const count = document.getElementById('count-now');
    const price = document.getElementById('price-now');

    ItemName.innerText = inItemName;
    Img.src = inImgSrc;
    producer.innerText = inProducer;
    count.innerText = inCount;
    price.innerText = inPrice;
}