const grid = document.querySelector(".grid");
const button = document.querySelector('#numChange');
function getColumns () {
    clearBoxes();
    let num = prompt("How many columns?");
    if (num === null || num === 0) {
        console.log("loop 1");
        let num = 4;
        grid.style.cssText = `grid-template-columns:  repeat(${num}, 1fr)`;
        //grid.style.cssText = `grid-template-rows:  repeat(${num}, 1fr)`;
        updateGrid(num);
        activateHighlight();
    } else if (num > 100) {
        console.log("loop 2");
        let num = 100;
        grid.style.cssText = `grid-template-columns:  repeat(${num}, 1fr)`;
        //grid.style.cssText = `grid-template-rows:  repeat(${num}, 1fr)`;
        updateGrid(num);
        activateHighlight();
    } else {
        console.log("loop 3");
       // grid.removeAttribute('grid-template-columns');
        console.log(num);
        console.log(grid);
        grid.style.cssText = `grid-template-columns:  repeat(${num}, 1fr)`;
        //grid.style.cssText = `grid-template-rows:  repeat(${num}, 1fr)`;
        updateGrid(num);
        activateHighlight();
    }
}
function updateGrid(num) {
    let howMany = num * num;
    for (let i = 0; i < howMany; i++) {
        if (i===0) {
            let box = document.createElement("div");
            box.classList.add('box');
            box.id = "box" + i;
            grid.appendChild(box);
        } else if (i > 0) {
            let box = document.createElement("div");
            box.classList.add('box');
            box.id = "box" + i;
            grid.appendChild(box);
        }
        
    }
}





function activateHighlight () {
    let boxes = document.querySelectorAll('.box');
    console.log(boxes[0]);
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.classList.remove('box');
            box.classList.add('hovered');
        });
    });

    
}

function clearBoxes () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
}
button.addEventListener('click', getColumns);

