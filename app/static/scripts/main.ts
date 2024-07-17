const popup = document.getElementsByClassName("popup")[0];
const totalValueArray = Array.from(document.getElementsByClassName("totalValue"));
const totalValue = document.getElementById("totalValue");
const totalValue2nd = document.getElementById("totalValue2nd");
const cartItemsCount = document.getElementById("cartItemsCount");
const counterArray = document.getElementsByClassName("counter");

// @ts-ignore
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
        for (const count of Array.from(cartElementItemCountArray)) {
            count.textContent = dessertCount.textContent;
        }
        for (const rowSummary of Array.from(rowSummaryArray)) {
            rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
        }
    }
    if (Number.parseInt(dessertCount.textContent) === 0) {
        divCartWithValue.style.display = 'none';
        for (const cartElement of Array.from(cartElementArray)) {
            if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
        }
    }
}


// @ts-ignore
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
    for (const count of Array.from(cartElementItemCountArray)) {
        count.textContent = dessertCount.textContent;
    }
    for (const rowSummary of Array.from(rowSummaryArray)) {
        rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
    }
    if (Number.parseInt(dessertCount.textContent) > 0) {
        divCartWithValue.style.display = 'flex';
        for (const cartElement of Array.from(cartElementArray)) {
            if (cartElement instanceof HTMLElement) cartElement.style.display = 'flex';
        }
    }
}

// @ts-ignore
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
    for (const cartElement of Array.from(cartElementArray)) {
        if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
    }
    dessertCount.textContent = '0';
    for (const count of Array.from(cartElementItemCountArray)) {
        count.textContent = '';
    }
    for (const rowSummary of Array.from(rowSummaryArray)) {
        rowSummary.textContent = '0';
    }
}

function showPopup() {
    const popupElement = document.getElementsByClassName("popup")[0];
    if (popupElement instanceof HTMLElement) {
        popupElement.style.visibility = 'visible';
    }
}

function startNewOrder() {
    const allButtons = document.querySelectorAll("button");
    const cartElements1st = document.getElementsByClassName("cartElement1st");
    const cartElements2nd = document.getElementsByClassName("cartElement2nd");
    const cartElementItemCount1st = document.getElementsByClassName("itemCount1st");
    const cartElementItemCount2nd = document.getElementsByClassName("itemCount2nd");
    const divCartWithValueArray = document.getElementsByClassName("divCartWithValue");
    const popupElement = document.getElementsByClassName("popup")[0];
    if (cartItemsCount?.textContent) cartItemsCount.textContent = '0';
    for (const cartElement of Array.from(cartElements1st)) {
        if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
    } for (const count of Array.from(cartElementItemCount1st)) {
        count.textContent = '';
    }
    if (totalValue instanceof HTMLElement) totalValue.textContent = '';
    for (const button of Array.from(allButtons)) {
        if (button instanceof HTMLElement) button.style.pointerEvents = 'none';
    }
    setTimeout(() => {
        for (const cartElement of Array.from(cartElements2nd)) {
            if (cartElement instanceof HTMLElement) cartElement.style.display = 'none';
        }
        for (const count of Array.from(cartElementItemCount2nd)) {
            count.textContent = '';
        }
        if (totalValue2nd instanceof HTMLElement) totalValue2nd.textContent = '';
        for (const button of Array.from(allButtons)) {
            if (button instanceof HTMLElement) button.style.pointerEvents = 'auto';
        }
    }, 1000);

    if (popupElement instanceof HTMLElement) {
        popupElement.style.visibility = 'hidden';
    }
    for (const counter of Array.from(counterArray)) {
        if (counter instanceof HTMLElement) counter.textContent = '0';
    }
    for (const divCartWithValue of Array.from(divCartWithValueArray)) {
        if (divCartWithValue instanceof HTMLElement)
            divCartWithValue.style.display = 'none';
    }
    for (const rowSummary of Array.from(document.getElementsByClassName("rowSummary"))) {
        if (rowSummary instanceof HTMLElement) rowSummary.textContent = '0';
    }
}