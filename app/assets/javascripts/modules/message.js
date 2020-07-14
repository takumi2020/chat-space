$(function () {
  function buildHTML(message) {
    if (message.image) {
      let html = 
        `<div class="mainChat-main__messageList" data-message-id=${message.id}>
          <ul class="mainChat-main__messageList-content">
              <li class="groupName">
                ${message.user_name}
              </li>
              <li class="inputDate">
                ${message.created_at}
              </li>
          </ul>
          <div class="mainChat-main__messageList-message">
            <p class="mainChat-main__messageList-message">
              ${message.coment}
            </p>
            <img class="mainChat-main__messageList-image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
      `<div class="mainChat-main__messageList" data-message-id=${message.id}>
          <ul class="mainChat-main__messageList-content">
              <li class="groupName">
                ${message.user_name}
              </li>
              <li class="inputDate">
                ${message.created_at}
              </li>
          </ul>
          <div class="mainChat-main__messageList-message">
            <p class="mainChat-main__messageList-message">
              ${message.coment}
            </p>
              </div>
        </div>`
      return html;
    };
  }

  $('.mainChat-footer__message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        let html = buildHTML(data);
        $('.mainChat-main').append(html);
        $('.mainChat-main').animate({ scrollTop: $('.mainChat-main')[0].scrollHeight });
        $('form')[0].reset();
        $('.mainChat-footer__messageBox--btn').attr('disabled', false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
        $('.mainChat-footer__messageBox--btn').attr('disabled', false);
      });
  });

//   let reloadMessages = function() {
//     let last_message_id = $('.mainChat-main__messageList:last').data("message-id") || 0;
//     $.ajax({
//       url: "api/messages",
//       type: 'get',
//       dataType: 'json',
//       data: {id: last_message_id}
//     })
//     .done(function(messages) {
//       if (messages.length !== 0) {
//         let insertHTML = '';
//         $.each(messages, function(i, message) {
//           insertHTML += buildHTML(message)
//         });
//         $('.mainChat-main').append(insertHTML);
//         $('.mainChat-main').animate({ scrollTop: $('.mainChat-main')[0].scrollHeight});
//       }
//     })
//     .fail(function() {
//       alert('error');
//     });
//   };
//   setInterval(reloadMessages, 7000);
// });

// let reloadMessages = function() {
//   //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
//   let last_message_id = $('.MessageBox:last').data("message-id") || 0;
//   $.ajax({
//     //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
//     url: "api/messages",
//     //ルーティングで設定した通りhttpメソッドをgetに指定
//     type: 'get',
//     dataType: 'json',
//     //dataオプションでリクエストに値を含める
//     data: {id: last_message_id}
//   })
//   .done(function(messages) {
//     // 更新するメッセージがなかった場合は.doneの後の処理が動かないようにする
//     if (messages.length !== 0) {
//       //追加するHTMLの入れ物を作る
//       let insertHTML = '';
//       //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
//       $.each(messages, function(i, message) {
//         insertHTML += buildHTML(message)
//       });
//       //メッセージが入ったHTMLに、入れ物ごと追加
//       $('.MessageField').append(insertHTML);
//       $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
//     }
//   })
//   .fail(function() {
//     alert('error');
//   });
// };
// setInterval(reloadMessages, 7000);
// });