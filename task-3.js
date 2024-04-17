function getElementWidth(content, padding, border) {
    return parseInt(content) + (2 * parseInt(padding)) + (2 * parseFloat(border))
}

const result = getElementWidth("50px", "8px", "4px");
console.log(result);