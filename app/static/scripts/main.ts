const popup = document.getElementsByClassName("popup")[0];
const totalValueArray = document.getElementsByClassName("totalValue");
const cartItemsCount = document.getElementById("cartItemsCount");
const counterArray = document.getElementsByClassName("counter");

function decrementValue(id) {
    const itemPrice = document.getElementById(`${id}itemPrice`);
    const dessertCount = document.getElementById(`${id}dessertCount`);
    const cartElementArray = document.getElementsByClassName(`${id}cartElement`);
    const cartElementItemCountArray = document.getElementsByClassName(`${id}itemCount`);
    const rowSummaryArray = document.getElementsByClassName(`${id}rowSummary`);
    const divCartWithValue = document.getElementById(`${id}divCartWithValue`);
    if (!dessertCount?.textContent || !itemPrice?.textContent || !divCartWithValue || !cartItemsCount?.textContent) return;
    if (Number.parseInt(dessertCount.textContent) > 0) {
        for (const totalValue of totalValueArray) {
            totalValue.textContent = (Number(totalValue.textContent) - Number(itemPrice.textContent.slice(1))).toFixed(2).toString();
        }
        dessertCount.textContent = (Number.parseInt(dessertCount.textContent) - 1).toString();
        cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) - 1).toString();
        for (const count of cartElementItemCountArray) {
            count.textContent = dessertCount.textContent;
        }
        for (const rowSummary of rowSummaryArray) {
            rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
        }
    }
    if (Number.parseInt(dessertCount.textContent) === 0) {
        divCartWithValue.style.display = 'none';
        for (const cartElement of cartElementArray) {
            if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
        }
    }
}

function incrementValue(id) {
    const itemPrice = document.getElementById(`${id}itemPrice`);
    const dessertCount = document.getElementById(`${id}dessertCount`);
    const divCartWithValue = document.getElementById(`${id}divCartWithValue`);
    const cartElementArray = document.getElementsByClassName(`${id}cartElement`);
    const cartElementItemCountArray = document.getElementsByClassName(`${id}itemCount`);
    const rowSummaryArray = document.getElementsByClassName(`${id}rowSummary`);
    if (!dessertCount?.textContent || !divCartWithValue || !itemPrice?.textContent || !cartItemsCount?.textContent) return;
    for (const totalValue of totalValueArray) {
        totalValue.textContent = (Number(totalValue.textContent) + Number(itemPrice.textContent.slice(1))).toFixed(2).toString();
    }
    dessertCount.textContent = (Number.parseInt(dessertCount.textContent) + 1).toString();
    cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) + 1).toString();
    for (const count of cartElementItemCountArray) {
        count.textContent = dessertCount.textContent;
    }
    for (const rowSummary of rowSummaryArray) {
        rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
    }
    if (Number.parseInt(dessertCount.textContent) > 0) {
        divCartWithValue.style.display = 'flex';
        for (const cartElement of cartElementArray) {
            if (cartElement instanceof HTMLElement) cartElement.style.display = 'flex';
        }
    }
}

function deleteItem(id) {
    const itemPrice = document.getElementById(`${id}itemPrice`);
    const dessertCount = document.getElementById(`${id}dessertCount`);
    const divCartWithValue = document.getElementById(`${id}divCartWithValue`);
    const cartElementArray = document.getElementsByClassName(`${id}cartElement`);
    const cartElementItemCountArray = document.getElementsByClassName(`${id}itemCount`);
    const rowSummaryArray = document.getElementsByClassName(`${id}rowSummary`);
    if (!cartItemsCount?.textContent || !dessertCount?.textContent || !divCartWithValue || !itemPrice?.textContent) return;
    for (const totalValue of totalValueArray) {
        totalValue.textContent = (Number(totalValue.textContent) - (Number(itemPrice.textContent.slice(1)) * Number.parseInt(dessertCount.textContent))).toFixed(2).toString();
    }
    cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) - Number.parseInt(dessertCount.textContent)).toString();
    divCartWithValue.style.display = 'none';
    for (const cartElement of cartElementArray) {
        if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
    }
    dessertCount.textContent = '0';
    for (const count of cartElementItemCountArray) {
        count.textContent = '';
    }
    for (const rowSummary of rowSummaryArray) {
        rowSummary.textContent = '0';
    }
}

function showPopup() {
    const popupElement = document.getElementsByClassName("popup")[0];
    if (popupElement instanceof HTMLElement) {
        popupElement.style.display = 'flex';
    }
}

function startNewOrder() {
    const cartElements = document.getElementsByClassName("cartElement");
    const cartElementItemCount = document.getElementsByClassName("itemCount");
    const divCartWithValueArray = document.getElementsByClassName("divCartWithValue");
    const popupElement = document.getElementsByClassName("popup")[0];
    if (cartItemsCount?.textContent) cartItemsCount.textContent = '0';
    for (const cartElement of cartElements) {
        if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
    }
    for (const count of cartElementItemCount) {
        count.textContent = '';
    }
    if (popupElement instanceof HTMLElement) {
        popupElement.style.display = 'none';
    }
    for (const totalValue of totalValueArray) {
        totalValue.textContent = '';
    }
    for (const counter of counterArray) {
        if (counter instanceof HTMLElement) counter.textContent = '0';
    }
    for (const rowSummary of document.getElementsByClassName("rowSummary")) {
        if (rowSummary instanceof HTMLElement) rowSummary.textContent = '0';
    }
    for (const divCartWithValue of divCartWithValueArray) {
        if (divCartWithValue instanceof HTMLElement)
            divCartWithValue.style.display = 'none';
    }
    for (const count of cartElementItemCount) {
        count.textContent = '';
    }
    for (const rowSummary of document.getElementsByClassName("rowSummary")) {
        if (rowSummary instanceof HTMLElement) rowSummary.textContent = '0';
    }
}