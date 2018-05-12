var app1 = new Vue({
  el: '#app-1',
  data: { msg: 'Teste' }
})

var app2 = new Vue({
  el: '#app-2',
  data: { msg: 'Teste' }
})

var app3 = new Vue({
  el: '#app-3',
  data: { rawHtml: '<span style="color:red">This should be RED</span>' }
})

var app4 = new Vue({
  el: '#app-4',
  data: { dynamicId: '1', isButtonDisabled: 'true' }
})

var app5 = new Vue({
	el: "#app-5",
	data: {id: 1, number: 2, ok: true, message: "T3st3"}
})

var app6 = new Vue({
	el: "#app-6",
	data: {seen: false, list: [{description: "Teste 1", description: "Teste 2", description: "Teste 3" }] }
})