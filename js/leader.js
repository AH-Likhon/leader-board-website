const sectionTile = document.getElementById('section-title');
sectionTile.style.color = 'Darkcyan';

const blogTitle = document.getElementById('blog-title');
blogTitle.style.color = 'Darkcyan';

const player01 = document.getElementById('player-1');
player01.style.backgroundColor = 'rgba(255,0,0,0.2)';

const player02 = document.getElementById('player-2');
player02.style.backgroundColor = 'rgba(0,51,204,0.2)';

const player03 = document.getElementById('player-3');
player03.style.backgroundColor = 'rgba(51,153,102,0.2)';

const player04 = document.getElementById('player-4');
player04.style.backgroundColor = 'rgba(0,0,0,0.2)';

const player05 = document.getElementById('player-5');
player05.style.backgroundColor = 'rgba(102,0,51,0.2)';

const player06 = document.getElementById('player-6');
player06.style.backgroundColor = 'rgba(51,0,0,0.2)';


// bubble and delegate
// const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         // console.log('item clicked');
//         // document.getElementById('item-container').removeChild(item);
//         event.target.parentNode.removeChild(event.target);
//     })
// }


document.getElementById('add-item').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'New Item';
    li.classList.add('item');
    const parent = document.getElementById('item-container');
    parent.appendChild(li);
})

document.getElementById('item-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})