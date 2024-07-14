const totalValue = document.getElementById("totalValue");
const cartItemsCount = document.getElementById("cartItemsCount");
const itemPrice = document.getElementById("price");

function decrementValue(id) {
    const dessertCount = document.getElementById(`${id}dessertCount`);
    const cartElement = document.getElementById(`${id}cartElement`);
    const cartElementItemCount = document.getElementById(`${id}itemCount`);
    const rowSummary = document.getElementById(`${id}rowSummary`);
    const divCartWithValue = document.getElementById(`${id}divCartWithValue`);
    if (!dessertCount?.textContent || !cartElementItemCount || !rowSummary || !itemPrice?.textContent || !divCartWithValue || !cartElement || !cartItemsCount?.textContent || !totalValue) return;
    if (Number.parseInt(dessertCount.textContent) > 0) {
        totalValue.textContent = (Number(totalValue.textContent) - Number(itemPrice.textContent.slice(1))).toFixed(2).toString();
        dessertCount.textContent = (Number.parseInt(dessertCount.textContent) - 1).toString();
        cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) - 1).toString();
        cartElementItemCount.textContent = dessertCount.textContent;
        rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
    }
    if (Number.parseInt(dessertCount.textContent) === 0) {
        divCartWithValue.style.display = 'none';
        cartElement.style.display = 'none';
    }
}

function incrementValue(id) {
    const dessertCount = document.getElementById(`${id}dessertCount`);
    const divCartWithValue = document.getElementById(`${id}divCartWithValue`);
    const cartElement = document.getElementById(`${id}cartElement`);
    const cartElementItemCount = document.getElementById(`${id}itemCount`);
    const rowSummary = document.getElementById(`${id}rowSummary`);
    if (!dessertCount?.textContent || !cartElementItemCount || !divCartWithValue || !cartElement || !rowSummary || !itemPrice?.textContent || !cartItemsCount?.textContent || !totalValue) return;
    totalValue.textContent = (Number(totalValue.textContent) + Number(itemPrice.textContent.slice(1))).toFixed(2).toString();
    dessertCount.textContent = (Number.parseInt(dessertCount.textContent) + 1).toString();
    cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) + 1).toString();
    cartElementItemCount.textContent = dessertCount.textContent;
    rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
    if (Number.parseInt(dessertCount.textContent) > 0) {
        divCartWithValue.style.display = 'flex';
        cartElement.style.display = 'flex';
    }
}

function deleteItem(id) {
    const dessertCount = document.getElementById(`${id}dessertCount`);
    const divCartWithValue = document.getElementById(`${id}divCartWithValue`);
    const cartElement = document.getElementById(`${id}cartElement`);
    const cartElementItemCount = document.getElementById(`${id}itemCount`);
    const rowSummary = document.getElementById(`${id}rowSummary`);
    if (!cartItemsCount?.textContent || !dessertCount?.textContent || !divCartWithValue || !cartElement || !cartElementItemCount || !rowSummary || !totalValue || !itemPrice?.textContent) return;
    totalValue.textContent = (Number(totalValue.textContent) - (Number(itemPrice.textContent.slice(1)) * Number.parseInt(dessertCount.textContent))).toFixed(2).toString();
    cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) - Number.parseInt(dessertCount.textContent)).toString();
    divCartWithValue.style.display = 'none';
    cartElement.style.display = 'none';
    dessertCount.textContent = '0';
    cartElementItemCount.textContent = '0';
    rowSummary.textContent = '0';
}