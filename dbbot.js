const scriptName = "dbbot";

var main = require('main');
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */

//대응소스는 자체적으로 구해서 추가하세요
function responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, user) {
  try{

    main({
      room: room,
      msg: msg,
      sender: sender,
      isGroupChat: isGroupChat,
      replier: replier,
      imageDB: imageDB,
      packageName: packageName,
      user: user
    })
  } catch (e) {
    Log.e(e)
  }
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}
