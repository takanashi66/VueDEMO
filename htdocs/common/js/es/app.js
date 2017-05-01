window.onload = function(){
  
  
  //Vueのインスタンスを生成
  let todo = new Vue({
  	//ターゲットを宣言
    el: '#app',
    
    //格納データ
    data: {
      input: '',
      inputText: '',
  		todos: [],
    },
    
    methods: {
  	  //追加メソッド
  	  add: function(){
  		  
  		  //inputのvalを取得(空白の除去)
  			var text = this.input.trim();
  			
  			if (text) {
  				//inputの値が取得できたら、pushしてデータを追加
  				//push() 配列の末尾に値を追加
  				this.todos.push({ text: text, e: false })
  				//inputを初期化
  				this.input = '';
  			}
  			
  		},
  		
  		edit: function(index){
  			
  			this.todos[index].e = true;
  			this.inputText = this.todos[index].text;
  			
  		},
  		
  		readd: function(index){
  			
  			this.todos[index].text = this.inputText;
  			this.todos[index].e = false;
  			
  		},
  		
  		//削除メソッド
  		remove: function (stat) {
  			//配列から検索して削除
  			this.todos.splice(this.todos.indexOf(stat), 1);
  		}
  	}
  })
  
  
}