const stack = []

function push(value){
    stack.push(value)
}
function pop(){
    return stack.pop()
}
function peek(){
    return stack[size()-1]
}
function isEmpty(){
    return size() === 0
}
function size(){
    return stack.length 
}


const _pop = document.querySelector("#pop")
const _push = document.querySelector("#push")
const _size = document.querySelector("#size")
const _isempty = document.querySelector("#isempty")
const _peek = document.querySelector("#peek")



_push.addEventListener("click", ()=>Push())
_pop.addEventListener("click", ()=>Pop())
_peek.addEventListener("click", ()=>Peek())
_isempty.addEventListener("click", ()=>isEmpty_())
_size.addEventListener("click", ()=>Size())

function Push() {
  const entrada = document.querySelector("#elemento").value
  push(entrada)
  console.log(stack)
}

function Pop(){
  pop()
  console.log(stack)
}

function Peek(){
  console.log(peek())
}

function isEmpty_(){
  console.log(isEmpty())
}

function Size(){
  console.log(size())
}