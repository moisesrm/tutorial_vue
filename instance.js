var data = { a: 1 }

var vm = new Vue({
	data: data
})

vm.a == data.a

vm.a = 2
data.a

data.a = 3
vm.a

vm.b = { data: {
	  newTodoText: '',
	  visitCount: 0,
	  hideCompletedTodos: false,
	  todos: [],
	  error: null
	}
}

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})