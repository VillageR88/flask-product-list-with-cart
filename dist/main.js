"use strict";
var popup = document.getElementsByClassName("popup")[0];
var totalValueArray = Array.from(document.getElementsByClassName("totalValue"));
var totalValue = document.getElementById("totalValue");
var totalValue2nd = document.getElementById("totalValue2nd");
var cartItemsCount = document.getElementById("cartItemsCount");
var counterArray = document.getElementsByClassName("counter");
function decrementValue(id) {
    var itemPrice = document.getElementById("".concat(id, "itemPrice"));
    var dessertCount = document.getElementById("".concat(id, "dessertCount"));
    var cartElementArray = document.getElementsByClassName("".concat(id, "cartElement"));
    var cartElementItemCountArray = document.getElementsByClassName("".concat(id, "itemCount"));
    var rowSummaryArray = document.getElementsByClassName("".concat(id, "rowSummary"));
    var divCartWithValue = document.getElementById("".concat(id, "divCartWithValue"));
    if (!(dessertCount === null || dessertCount === void 0 ? void 0 : dessertCount.textContent) || !(itemPrice === null || itemPrice === void 0 ? void 0 : itemPrice.textContent) || !divCartWithValue || !(cartItemsCount === null || cartItemsCount === void 0 ? void 0 : cartItemsCount.textContent))
        return;
    if (Number.parseInt(dessertCount.textContent) > 0) {
        for (var _i = 0, totalValueArray_1 = totalValueArray; _i < totalValueArray_1.length; _i++) {
            var totalValue_1 = totalValueArray_1[_i];
            totalValue_1.textContent = (Number(totalValue_1.textContent) - Number(itemPrice.textContent.slice(1))).toFixed(2).toString();
        }
        dessertCount.textContent = (Number.parseInt(dessertCount.textContent) - 1).toString();
        cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) - 1).toString();
        for (var _a = 0, _b = Array.from(cartElementItemCountArray); _a < _b.length; _a++) {
            var count = _b[_a];
            count.textContent = dessertCount.textContent;
        }
        for (var _c = 0, _d = Array.from(rowSummaryArray); _c < _d.length; _c++) {
            var rowSummary = _d[_c];
            rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
        }
    }
    if (Number.parseInt(dessertCount.textContent) === 0) {
        divCartWithValue.style.display = 'none';
        for (var _e = 0, _f = Array.from(cartElementArray); _e < _f.length; _e++) {
            var cartElement = _f[_e];
            if (cartElement instanceof HTMLElement)
                cartElement.style.display = 'none';
        }
    }
}
function incrementValue(id) {
    var itemPrice = document.getElementById("".concat(id, "itemPrice"));
    var dessertCount = document.getElementById("".concat(id, "dessertCount"));
    var divCartWithValue = document.getElementById("".concat(id, "divCartWithValue"));
    var cartElementArray = document.getElementsByClassName("".concat(id, "cartElement"));
    var cartElementItemCountArray = document.getElementsByClassName("".concat(id, "itemCount"));
    var rowSummaryArray = document.getElementsByClassName("".concat(id, "rowSummary"));
    if (!(dessertCount === null || dessertCount === void 0 ? void 0 : dessertCount.textContent) || !divCartWithValue || !(itemPrice === null || itemPrice === void 0 ? void 0 : itemPrice.textContent) || !(cartItemsCount === null || cartItemsCount === void 0 ? void 0 : cartItemsCount.textContent))
        return;
    for (var _i = 0, totalValueArray_2 = totalValueArray; _i < totalValueArray_2.length; _i++) {
        var totalValue_2 = totalValueArray_2[_i];
        totalValue_2.textContent = (Number(totalValue_2.textContent) + Number(itemPrice.textContent.slice(1))).toFixed(2).toString();
    }
    dessertCount.textContent = (Number.parseInt(dessertCount.textContent) + 1).toString();
    cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) + 1).toString();
    for (var _a = 0, _b = Array.from(cartElementItemCountArray); _a < _b.length; _a++) {
        var count = _b[_a];
        count.textContent = dessertCount.textContent;
    }
    for (var _c = 0, _d = Array.from(rowSummaryArray); _c < _d.length; _c++) {
        var rowSummary = _d[_c];
        rowSummary.textContent = (Number.parseInt(dessertCount.textContent) * Number(itemPrice.textContent.slice(1))).toFixed(2);
    }
    if (Number.parseInt(dessertCount.textContent) > 0) {
        divCartWithValue.style.display = 'flex';
        for (var _e = 0, _f = Array.from(cartElementArray); _e < _f.length; _e++) {
            var cartElement = _f[_e];
            if (cartElement instanceof HTMLElement)
                cartElement.style.display = 'flex';
        }
    }
}
function deleteItem(id) {
    var itemPrice = document.getElementById("".concat(id, "itemPrice"));
    var dessertCount = document.getElementById("".concat(id, "dessertCount"));
    var divCartWithValue = document.getElementById("".concat(id, "divCartWithValue"));
    var cartElementArray = document.getElementsByClassName("".concat(id, "cartElement"));
    var cartElementItemCountArray = document.getElementsByClassName("".concat(id, "itemCount"));
    var rowSummaryArray = document.getElementsByClassName("".concat(id, "rowSummary"));
    if (!(cartItemsCount === null || cartItemsCount === void 0 ? void 0 : cartItemsCount.textContent) || !(dessertCount === null || dessertCount === void 0 ? void 0 : dessertCount.textContent) || !divCartWithValue || !(itemPrice === null || itemPrice === void 0 ? void 0 : itemPrice.textContent))
        return;
    for (var _i = 0, totalValueArray_3 = totalValueArray; _i < totalValueArray_3.length; _i++) {
        var totalValue_3 = totalValueArray_3[_i];
        totalValue_3.textContent = (Number(totalValue_3.textContent) - (Number(itemPrice.textContent.slice(1)) * Number.parseInt(dessertCount.textContent))).toFixed(2).toString();
    }
    cartItemsCount.textContent = (Number.parseInt(cartItemsCount.textContent) - Number.parseInt(dessertCount.textContent)).toString();
    divCartWithValue.style.display = 'none';
    for (var _a = 0, _b = Array.from(cartElementArray); _a < _b.length; _a++) {
        var cartElement = _b[_a];
        if (cartElement instanceof HTMLElement)
            cartElement.style.display = 'none';
    }
    dessertCount.textContent = '0';
    for (var _c = 0, _d = Array.from(cartElementItemCountArray); _c < _d.length; _c++) {
        var count = _d[_c];
        count.textContent = '';
    }
    for (var _e = 0, _f = Array.from(rowSummaryArray); _e < _f.length; _e++) {
        var rowSummary = _f[_e];
        rowSummary.textContent = '0';
    }
}
function showPopup() {
    var popupElement = document.getElementsByClassName("popup")[0];
    if (popupElement instanceof HTMLElement) {
        popupElement.style.visibility = 'visible';
    }
}
function startNewOrder() {
    var allButtons = document.querySelectorAll("button");
    var cartElements1st = document.getElementsByClassName("cartElement1st");
    var cartElements2nd = document.getElementsByClassName("cartElement2nd");
    var cartElementItemCount1st = document.getElementsByClassName("itemCount1st");
    var cartElementItemCount2nd = document.getElementsByClassName("itemCount2nd");
    var divCartWithValueArray = document.getElementsByClassName("divCartWithValue");
    var popupElement = document.getElementsByClassName("popup")[0];
    if (cartItemsCount === null || cartItemsCount === void 0 ? void 0 : cartItemsCount.textContent)
        cartItemsCount.textContent = '0';
    for (var _i = 0, _a = Array.from(cartElements1st); _i < _a.length; _i++) {
        var cartElement = _a[_i];
        if (cartElement instanceof HTMLElement)
            cartElement.style.display = 'none';
    }
    for (var _b = 0, _c = Array.from(cartElementItemCount1st); _b < _c.length; _b++) {
        var count = _c[_b];
        count.textContent = '';
    }
    if (totalValue instanceof HTMLElement)
        totalValue.textContent = '';
    for (var _d = 0, _e = Array.from(allButtons); _d < _e.length; _d++) {
        var button = _e[_d];
        if (button instanceof HTMLElement)
            button.style.pointerEvents = 'none';
    }
    setTimeout(function () {
        for (var _i = 0, _a = Array.from(cartElements2nd); _i < _a.length; _i++) {
            var cartElement = _a[_i];
            if (cartElement instanceof HTMLElement)
                cartElement.style.display = 'none';
        }
        for (var _b = 0, _c = Array.from(cartElementItemCount2nd); _b < _c.length; _b++) {
            var count = _c[_b];
            count.textContent = '';
        }
        if (totalValue2nd instanceof HTMLElement)
            totalValue2nd.textContent = '';
        for (var _d = 0, _e = Array.from(allButtons); _d < _e.length; _d++) {
            var button = _e[_d];
            if (button instanceof HTMLElement)
                button.style.pointerEvents = 'auto';
        }
    }, 1000);
    if (popupElement instanceof HTMLElement) {
        popupElement.style.visibility = 'hidden';
    }
    for (var _f = 0, _g = Array.from(counterArray); _f < _g.length; _f++) {
        var counter = _g[_f];
        if (counter instanceof HTMLElement)
            counter.textContent = '0';
    }
    for (var _h = 0, _j = Array.from(divCartWithValueArray); _h < _j.length; _h++) {
        var divCartWithValue = _j[_h];
        if (divCartWithValue instanceof HTMLElement)
            divCartWithValue.style.display = 'none';
    }
    for (var _k = 0, _l = Array.from(document.getElementsByClassName("rowSummary")); _k < _l.length; _k++) {
        var rowSummary = _l[_k];
        if (rowSummary instanceof HTMLElement)
            rowSummary.textContent = '0';
    }
}
