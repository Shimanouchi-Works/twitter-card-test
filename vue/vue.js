      var app = new Vue({
        el: "#app",
        data:{
          message: "Vue#######.js",
          twUrl : '',
        },
        methods : {
          createSnsUrl : function(){
			// 現在のurlをエンコード
			var url = encodeURIComponent(location.href);
			// ページ文言(タイトルとかdescription) ここではdescriptionを使用
			var txt = encodeURIComponent(document.querySelector("meta[name='description']").getAttribute('content'));;
			// Twitter用のurl作成 ハッシュタグもtxtを使用
			this.twUrl = 'https://twitter.com/intent/tweet?text=' + txt + '&hashtags=' + txt + '&url=' + url;
//			this.twUrl = 'https://twitter.com/intent/tweet';
          },
        },
		mounted:{
            this.createSnsUrl();
		}
      })
