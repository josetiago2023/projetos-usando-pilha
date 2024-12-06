class Stack{
  constructor(){
      this.stack = []
  }

  push(value){
      this.stack.push(value)
  }
  pop(){
      return this.stack.pop()
  }
  peek(){
      return this.stack[this.size()-1]
  }
  isEmpty(){
      return this.size() === 0
  }
  size(){
      return this.stack.length 
  }
}


let s = new Stack();

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
    s.push(entrada)
    console.log(`Adicionado  ${entrada}`)
  }
  
  function Pop(){
    const entrada = document.querySelector("#elemento").value
    s.push(entrada)
    console.log(`Removido  ${entrada}`)
  }
  
  function Peek(){
    console.log(s.peek())
  }
  
  function isEmpty_(){
    console.log(s.isEmpty())
  }
  
  function Size(){
    console.log(s.size())
  }