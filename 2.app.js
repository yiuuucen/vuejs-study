var list=[
	{
		title:'吃饭大豆豆'
	},
	{
		title:'吃饭大豆豆'
	}

];


new Vue({
	el:".main",
	data:{
		list:list,
		todo:''
	},
	methods:{
		// addTodo:function(){

		// }
		//ES6提供的简写方式
		addTodo(){//添加任务
			//向list中添加一项任务
			// 事件处理函数中的this指向的是，当前这个根实例
		
			this.list.push({
				title:this.todo
			});
			
			this.todo='';
		}
	}
});