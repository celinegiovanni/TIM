// imported into index.html
let directoryList = document.getElementById("directoryList");

function create(tag: string, parent?: HTMLElement) : HTMLElement {
    let e = document.createElement(tag);
    if (parent) parent.appendChild(e);
    return e;
}

function populateList(el: HTMLUListElement, children: string[]) {
    console.log(el, children);
    children.forEach((c) => {
        let e = create("li", el);
        e.innerText = c;
    })
}