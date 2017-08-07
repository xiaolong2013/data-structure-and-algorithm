
/***
  * date:8.17
  * author:yxl
  * 实现一个 stack
  * push() pop() peek() size() clear()   
  *  等方法
**/


function Stack(){
    //底层用数组才存取数据
    this.data = [];
}


Stack.prototype = {

	  push: function(element){
           //往栈里面压入数据
           this.data.push(element);
	  },

	  pop: function(){
           //弹出栈顶的元素
	  	   return this.data.pop();
	  },

	  peek:function(){
          //返回栈顶的元素  
          return this.data[this.data.length-1];
	  },

	  clear:function(){
          //清空栈
	  	  this.data = [];
	  },

	  size:function(){
          //返回栈的长度
	  	  return this.data.length;
	  },

	  isEmpty:function(){
         //判断当前栈是否为空
	  	 return this.data.length === 0 
	  }
}