class Node {
  constructor(value){
      this.value = value
      this.prev = null
  }
}

export default class LinkedStack {
  constructor(){
      this.top = null
  }
  
  push(value) {
      const node = new Node(value)
      if (this.isEmpty()){
          this.top = node
      } else {
          node.prev = this.top
          this.top = node
      }
  }

  pop(){
      if (this.isEmpty()){
          console.log("A pilha está vazia")
          return null
      } else {
          const value = this.top.value
          this.top = this.top.prev
          return value
      }
      
  }

  isEmpty(){
      return this.top === null
  }

  peek(){
      if (this.isEmpty()){
          console.log("A pilha está vazia")
          return null
      }
      return this.top.value
  }

  size(){
      let temp = this.top
      let _size = 0
      while (temp !== null){
          _size += 1
          temp = temp.prev
      }
      return _size
  }

}

let s = new LinkedStack();

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
  console.log("Adicionado")
}

function Pop(){
  s.pop()
  console.log("Removido")
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