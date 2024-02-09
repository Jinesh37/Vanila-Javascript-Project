const fill=document.querySelector('.fill');
const empties=document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd)
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop);
}
function dragStart(){
    console.log('drag start');
    this.className+='hold' 
    setTimeout(()=>this.className='invisible',0)
}
function dragEnd(){
    this.className='fill';
    console.log('drag end');
}
function dragOver(e){
    console.log('drag Over');
    e.preventDefault();
}
function dragEnter(e){
    console.log('drag Enter');
    this.className+='hovered';
    e.preventDefault();
}
function dragLeave(){
    this.className="empty"
    console.log('drag leave');
}
function dragDrop(){
    this.className='empty'
    this.append(fill)
    console.log('drag drop')
}