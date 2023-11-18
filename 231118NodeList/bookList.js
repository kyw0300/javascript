const title = document.querySelector('#title');
const author = document.querySelector('#author');
const save = document.querySelector('#save');
const bookList = document.querySelector('#bookList');

const delButton = document.querySelector('.delButton');

save.addEventListener('click', (e) => {
    console.log(e.target);
    e.preventDefault();
    const item = document.createElement('li');
    item.innerHTML = `
        ${title.value} - ${author.value}
        <span class="delButton">삭제</span>
    `;
    bookList.appendChild(item);

    title.value = "";
    author.value = "";

    // 삭제 버튼 클릭 시
    const delButtons = document.querySelectorAll('.delButton');

    for(let delButton of delButtons) {
        delButton.addEventListener('click', function(e){
            console.log('this', this);
            console.log('this.parentNode', this.parentNode);
            console.log('this.parentNode.parentNode', this.parentNode.parentNode);

            // remove() 와 removeChild()의 차이?
            // this.parentNode.remove();
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
});
