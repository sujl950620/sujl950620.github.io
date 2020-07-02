/**
 * Main.js create date : 2019.09.19
 */
/*
 */
var timeout;

var monsterwall = new Array();

makemonster(476, 0 ,771,273);
makemonster(837, 0 ,1132,273);
makemonster(1198, 0 ,1493,273);
makemonster(1559, 0 ,1854,273);

makemonster(476, 807 ,771,1080);
makemonster(837, 807 ,1132,1080);
makemonster(1198, 807 ,1493,1080);
makemonster(1559, 807 ,1854,1080);

var birdStat = {
      name : "칼날부리",
      ename : "birdStat",
      maxhp : 50,
      hp : 50,
      money : 100,
      dg : 0
}

var frogStat = {
      name : "두꺼비",
      ename : "frogStat",
      hp : 180,
      maxhp : 180,
      money : 300,
      dg : 1
}

var golemStat = {
      name : "골렘",
      ename : "golemStat",
      hp : 800,
      maxhp : 800,
      money : 1600,
      dg : 2
}

var bluegolemStat = {
      name : "블루골렘",
      ename : "bluegolemStat",
      hp : 4000,
      maxhp : 4000,
      money : 9000,
      dg : 3
}

var redgolemStat = {
      name : "레드골렘",
      ename : "redgolemStat",
      hp : 25000,
      maxhp : 25000,
      money : 60000,
      dg : 4
}

var minibaronStat = {
      name : "협곡의전령",
      ename : "minibaronStat",
      hp : 200000,
      maxhp : 200000,
      money : 550000,
      dg : 5
}

var dragonStat = {
      name : "드래곤",
      ename : "dragonStat",
      hp : 1800000,
      maxhp : 1800000,
      money : 5000000,
      dg : 6
}

var baronStat = {
      name : "바론",
      ename : "baronStat",
      hp : 20000000,
      maxhp : 20000000,
      money : 8000000,
      dg : 7
}

var nowDg = "home";

var money = 0;
var x = 150;
var y = 480;

//현재 캐릭터의 우측과 하단영역 확인 , 가운데 위치 확인용
var x1 = x + 100;
var y1 = y + 100;
var xc = x + 50;
var yc = y + 50;

// 현재 캐릭터
var chracter = ["reveka", "nami", "sabo", "hankok", "sangdi", "ace", "ruffy", "joro", "shanks", "mihawk"]

//캐릭터 스탯정보
var revekaStat = {
   name : "레베카",
   attack : 10,
   money : 1000,
   speed : 1000,
   lvl : 1,
   img : "reveka",
   a_cnt : 7,
   m_cnt : 4
}

var namiStat = {
   name : "나미",
   attack : 80,
   money : 1000,
   speed : 950,
   lvl : 2,
   img : "nami",
   a_cnt : 7,
   m_cnt : 3,
   shop : [ 0, 180 ]
}

var saboStat = {
   name : "사보",
   attack : 150,
   money : 3000,
   speed : 900,
   lvl : 3,
   img : "sabo",
   a_cnt : 5,
   m_cnt : 3,
   shop : [ 0, 380 ]
}

var hankokStat = {
   name : "핸콕",
   attack : 270,
   money : 5000,
   speed : 850,
   lvl : 4,
   img : "hankok",
   a_cnt : 10,
   m_cnt : 3,
   shop : [ 0, 580 ]
}

var sangdiStat = {
   name : "상디",
   attack : 500,
   money : 10000,
   speed : 800,
   lvl : 5,
   img : "sangdi",
   a_cnt : 7,
   m_cnt : 3,
   shop : [ 310, 580 ]
}

var aceStat = {
   name : "에이스",
   attack : 1000,
   money : 50000,
   speed : 750,
   lvl : 6,
   img : "ace",
   a_cnt : 5,
   m_cnt : 3,
   shop : [ 0, 780 ]
}

var ruffyStat = {
   name : "루피",
   attack : 1800,
   money : 100000,
   speed : 700,
   lvl : 7,
   img : "ruffy",
   a_cnt : 7,
   m_cnt : 5,
   shop : [ 310, 780 ]
}

var joroStat = {
   name : "조로",
   attack : 5000,
   money : 300000,
   speed : 650,
   lvl : 8,
   img : "joro",
   a_cnt : 7,
   m_cnt : 3,
   shop : [ 0, 980 ]
}

var shanksStat = {
   name : "샹크스",
   attack : 12000,
   money : 800000,
   speed : 600,
   lvl : 9,
   img : "shanks",
   a_cnt : 7,
   m_cnt : 3,
   shop : [ 155, 980 ]
}

var mihawkStat = {
   name : "미호크",
   attack : 25000,
   money : 1500000,
   speed : 550,
   lvl : 10,
   img : "mihawk",
   a_cnt : 6,
   m_cnt : 3,
   shop : [ 310, 980 ]
// 2차원배열이랑 합칠수, 줄일수 있는지
}

//현재 캐릭터
var nowChar = revekaStat;

var wall = new Array();

// 충돌 벽 추가
// x1 , y1 , x2 , y2
// 사이드벽
makeWall(0, 0, 0, 980);
makeWall(0, 0, 1920, 0);
makeWall(0, 1080, 1920, 1080);
makeWall(1920, 0, 0, 0);

makeWall(0, 150, 410, 180); // 상점 인터페이스 사이벽
makeWall(410, 0, 476, 421); // 위 첫번째 벽
makeWall(771, 0, 837, 421); // 2
makeWall(1132, 0, 1198, 421);// 3
makeWall(1493, 0, 1559, 421); // 4

makeWall(1854, 0, 1920, 1080); // 오른쪽 끝 벽
makeWall(410, 589, 476, 1080);// 아래 첫번째 벽
makeWall(771, 589, 837, 1080); // 2
makeWall(1132, 589, 1198, 1080); // 3
makeWall(1493, 589, 1559, 1080); // 4

// 이미지 sprite 변수 영역 좌, 우
var imgX = 0;
var imgY = 0;
var imgX_L = -100;
var imgX_L_M = -100;
var imgY_L = 0;


var movecnt = 0; //사진이 움직인 횟수를 세기위한 
var direct = 0;// 0은 왼편 바라보기, 1은 오른편 바라보기
var mysetInterval = null; // 이동Interval 초기화를 위한 변수
var dgMode = false;//던전에 들어갔는지 체크하기 위한 flag

$(document).ready(function() {
   
   $("#gold-val").html(money);// 골드 refresh

   $("body").on("keypress", function(event) {
      switch (event.keyCode) {
      // wasd
      case 119:
         wKey();
         move();
         checkDg();
         break;
      case 97:
         aKey();
         direct = 0;//방향 좌측지정
         move();
         break;
      case 115:
         sKey();
         move();
         checkDg();
         break;
      case 100:
         dKey();
         direct = 1;//방향 우측지정
         move();
         break;
      case 99:
    	  money += 100000000;//개발용 치트키
      case 101:
         eKey();
         if (mysetInterval == null) {
            mysetInterval = setInterval(attack, nowChar.speed/nowChar.a_cnt);
            if(checkmonster(x,y)) {
            	
               }
         }
         break;
      case 104 ://H 키 도움말
          hKey();
          break;
      } // switch end

      $(".box").css("top", y + "px");//현재 캐릭터의 Y축 위치
      $(".box").css("left", x + "px");//현재 캐릭터의 X축 위치
      $("#gold-val").html(money);// 골드 refresh

      // 나미 구매
      if ((Math.abs(namiStat.shop[0] - x) <= 5)//캐릭터
            && (Math.abs(namiStat.shop[1] - y) <= 5) && nowChar.lvl < namiStat.lvl) {
         if (confirm("나미를 구매하시겠습니까?")) {
            // yes
            //&& nowChar.lvl > namiStat.lvl
            if (money >= namiStat.money ) {
               chracter = "nami";//캐릭터변경
               alert("나미를 구매하셨습니다");
               money = money - namiStat.money;//결제
               x = 150; // 초기위치이동
               y = 480; 
               nowChar = namiStat; // 바뀐 캐릭터의 정보를 가져옴
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(namiStat.name); // 인터페이스 이름변경, 공격력, 공격속도, 골드량, 초상화 변경
               $("#attack-val").html(namiStat.attack);
               $("#speed-val").html(namiStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + namiStat.img + "1.png')");
            } else {//골드부족으로 인한 구매실패
               alert((namiStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
               x = 150;
               y = 480;
            } // if ~ else end
            stopMoveSprite();
         } // if end
      }
      // 사보구매
      else if ((Math.abs(saboStat.shop[0] - x) <= 5)
            && (Math.abs(saboStat.shop[1] - y) <= 5) && nowChar.lvl < saboStat.lvl) {
         if (confirm("사보를 구매하시겠습니까?")) {
            // yes
            if (money >= saboStat.money) {
               chracter = "sabo";
               alert("사보를 구매하셨습니다");
               money = money - saboStat.money;
               x = 150;
               y = 480;
               nowChar = saboStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(saboStat.name);
               $("#attack-val").html(saboStat.attack);
               $("#speed-val").html(saboStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + saboStat.img + "1.png')");
            } else {
            	alert((saboStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         } // if end
      }
      // 핸콕 구매
      else if ((Math.abs(hankokStat.shop[0] - x) <= 5)
            && (Math.abs(hankokStat.shop[1] - y) <= 5) && nowChar.lvl < hankokStat.lvl) {
         if (confirm("핸콕을 구매하시겠습니까?")) {
            // yes
            if (money >= hankokStat.money) {
               chracter = "hankok";
               alert("핸콕을 구매하셨습니다");
               money = money - hankokStat.money;
               x = 150;
               y = 480;
               nowChar = hankokStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(hankokStat.name);
               $("#attack-val").html(hankokStat.attack);
               $("#speed-val").html(hankokStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + hankokStat.img + "1.png')");
            } else {
            	alert((hankokStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         } // if end
         //상디구매
      } else if ((Math.abs(sangdiStat.shop[0] - x) <= 5)
            && (Math.abs(sangdiStat.shop[1] - y) <= 5) && nowChar.lvl < sangdiStat.lvl) {
         if (confirm("상디를 구매하시겠습니까?")) {
            // yes
            if (money >= sangdiStat.money) {
               chracter = "sangdi";
               alert("상디 구매하셨습니다");
               money = money - sangdiStat.money;
               x = 150;
               y = 480;
               nowChar = sangdiStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(sangdiStat.name);
               $("#attack-val").html(sangdiStat.attack);
               $("#speed-val").html(sangdiStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + sangdiStat.img + "1.png')");
            } else {
            	alert((sangdiStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         } // if end
      //에이스 구매
      } else if ((Math.abs(aceStat.shop[0] - x) <= 5)
            && (Math.abs(aceStat.shop[1] - y) <= 5) && nowChar.lvl < aceStat.lvl) {
         if (confirm("에이스를 구매하시겠습니까?")) {
            // yes
            if (money >= aceStat.money) {
               chracter = "ace";
               alert("에이스 구매하셨습니다");
               money = money - aceStat.money;
               x = 150;
               y = 480;
               nowChar = aceStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(aceStat.name);
               $("#attack-val").html(aceStat.attack);
               $("#speed-val").html(aceStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + aceStat.img + "1.png')");
            } else {
            	alert((aceStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         }
         //ruffy구매
      } else if ((Math.abs(ruffyStat.shop[0] - x) <= 5)
            && (Math.abs(ruffyStat.shop[1] - y) <= 5) && nowChar.lvl < ruffyStat.lvl) {
         if (confirm("루피를 구매하시겠습니까?")) {
            // yes
            if (money >= ruffyStat.money) {
               chracter = "ruffy";
               alert("루피 구매하셨습니다");
               money = money - ruffyStat.money;
               x = 150;
               y = 480;
               nowChar = ruffyStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(ruffyStat.name);
               $("#attack-val").html(ruffyStat.attack);
               $("#speed-val").html(ruffyStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + ruffyStat.img + "1.png')");
            } else {
            	alert((ruffyStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         }
         //조로 구매
      } else if ((Math.abs(joroStat.shop[0] - x) <= 5)
            && (Math.abs(joroStat.shop[1] - y) <= 5) && nowChar.lvl < joroStat.lvl) {
         if (confirm("조로를 구매하시겠습니까?")) {
            // yes
            if (money >= joroStat.money) {
               chracter = "joro";
               alert("조로 구매하셨습니다");
               money = money - joroStat.money;
               x = 150;
               y = 480;
               nowChar = joroStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(joroStat.name);
               $("#attack-val").html(joroStat.attack);
               $("#speed-val").html(joroStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + joroStat.img + "1.png')");
            } else {
            	alert((joroStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         }
      }
      //샹크스 구매
      else if ((Math.abs(shanksStat.shop[0] - x) <= 5)
            && (Math.abs(shanksStat.shop[1] - y) <= 5) && nowChar.lvl < shanksStat.lvl) {
         if (confirm("샹크스를 구매하시겠습니까?")) {
            // yes
            if (money >= shanksStat.money) {
               chracter = "shanks";
               alert("샹크스를 구매하셨습니다");
               money = money - shanksStat.money;
               x = 150;
               y = 480;
               nowChar = shanksStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(shanksStat.name);
               $("#attack-val").html(shanksStat.attack);
               $("#speed-val").html(shanksStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + shanksStat.img + "1.png')");
            } else {
            	alert((shanksStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         }
         //미호크구매
      } else if ((Math.abs(mihawkStat.shop[0] - x) <= 5)
            && (Math.abs(mihawkStat.shop[1] - y) <= 5) && nowChar.lvl < mihawkStat.lvl) {
         if (confirm("미호크를 구매하시겠습니까?")) {
            // yes
            if (money >= mihawkStat.money) {
               chracter = "mihawk";
               alert("미호크를 구매하셨습니다");
               money = money - mihawkStat.money;
               x = 150;
               y = 480;
               nowChar = mihawkStat;
               // money 확인, 알림, money계산, 기본 새 좌표
               $("#name").html(mihawkStat.name);
               $("#attack-val").html(mihawkStat.attack);
               $("#speed-val").html(mihawkStat.speed);
               $("#gold-val").html(money);
               $(".inter_illustration-img").css("background-image", "url('./src/img/game/" + mihawkStat.img + "1.png')");
            } else {
            	alert((mihawkStat.money*1 - money*1) + " 만큼 골드가 부족합니다");
				x = 150;
				y = 480;
            } // if ~ else end
            stopMoveSprite();
         }
      } // if ~ else if end
     
   });
   
   // 이미지 sprite 영역
   // 이동, 공격키가 떼질때 이동중인 이미지 정지, 미처 체크하지 못한 던전입장 체크
   $("body").on("keyup", function(event) {
      stopMoveSprite();
      checkDg();
   });
   
});// document 전체

//이동 wasd에 넣을 함수, 키가 눌릴 때 Interval 속도만큼 sprite이미지를 캐릭터 div에 적용
function move() {
   if (mysetInterval == null) {
      mysetInterval = setInterval(moveSprite, 100);
   }
}

//현재 캐릭터의 x, y 위치로 던전입장체크
function checkDg() {
   if(checkmonster(x,y) && dgMode == false) {
        //던전영역 진입시 flag변경
        dgMode = true;
        
        if(dgMode == true && y <= 270){
          if(x >= 476 && x <= 771){
             nowDg = birdStat;
             //현재 던전위치 할당, 몬스터의 체력 관리를 위함
          } else if (x >= 837 && x <= 1132){
             nowDg = bluegolemStat;
          } else if (x >= 1198 && x <= 1493){
             nowDg = minibaronStat;
          } else if (x >= 1559 && x <= 1854){
             nowDg = baronStat;
                 }
           } else if(dgMode == true && y >= 710){
              if(x >= 476 && x <= 771){
                 nowDg = frogStat;
              } else if (x >= 837 && x <= 1132){
                 nowDg = golemStat;
              } else if (x >= 1198 && x <= 1493){
                 nowDg = redgolemStat;
              } else if (x >= 1559 && x <= 1854){
                 nowDg = dragonStat;
                     }
           }
        //던전입장시 위치별로 현재 입장한 던전에 대한 팝업안내
        popup();
        
        //던전 외부로 나갈시 던전영역 flag변경
     } else if (!checkmonster(x,y) && dgMode == true){
        dgMode = false;
        nowDg = "home";
        
     }
}

//버튼에 따라 캐릭터의 위치 변경, 벽 충돌 체크 및 이벤트
function wKey() {
   if (checkBlock(x, y)) {
      y -= 10;
   } else {
      y += 20;
   }
};

function aKey() {
   if (checkBlock(x, y)) {
      x -= 10;
   } else {
      x += 20;
   }
};

function sKey() {
   if (checkBlock(x, y)) {
      y += 10;
   } else {
      y -= 20;
   }
}

function dKey() {
   if (checkBlock(x, y)) {
      x += 10;
   } else {
      x -= 20;
   }
}

//던전영역 입장및 공격시 해당영역 몬스터 체력관리용
function eKey() {
   if(checkmonster(x,y)) {

      }
}

//미리 변수로 지정한 벽위치에 배열값 추가위를 위한 함수
function makeWall(xa, ya, xb, yb) {
   var pos = {
      x1 : xa,
      y1 : ya,
      x2 : xb,
      y2 : yb
   }

   wall.push(pos);
}

//벽에 진입했는지 체크 flag
function checkBlock(x, y) {
   for (var i = 0; i < wall.length; i++) {
      if (
      //
      ((x > wall[i].x1 && x < wall[i].x2) && (y > wall[i].y1 && y < wall[i].y2)) ||
      //
      ((x + 100 > wall[i].x1 && x + 100 < wall[i].x2) && (y + 100 > wall[i].y1 && y + 100 < wall[i].y2)) ||
      //
      ((x < wall[i].x1 && x + 100 > wall[i].x1) && (y < wall[i].y1 && y + 100 > wall[i].y1)) ||

      ((x < wall[i].x2 && x + 100 > wall[i].x2) && (y < wall[i].y2 && y + 100 > wall[i].y2)) ||
      // ------------//
      ((x + 100 > wall[i].x1 && x < wall[i].x2) && (y + 100 > wall[i].y1 && y < wall[i].y2))

      ) {
         return false;
      }
   }
   return true;
}

// 이동 wasd및 공격 e 버튼키를 뗄 때, 방향별 정지
function stopMoveSprite() {
   clearInterval(mysetInterval);
   mysetInterval = null;
   imgX = 0;
   imgY = 0;
   imgX_L = -100*(nowChar.a_cnt-1);
   imgX_L_M = -100*(nowChar.m_cnt-1);
   imgY_L = 0;
   movecnt = 0;

   if (direct == 0) {
	   $(".box").css("background-position-x", imgX_L_M + "px");
	   $(".box").css("background-position-y", imgY + "px");
      $(".box").css("background-image", "url('./src/img/game/" + nowChar.img + "_L_move.png')");
   } else if (direct == 1) {
	   $(".box").css("background-position-x", imgX + "px");
	   $(".box").css("background-position-y", imgY + "px");
      $(".box").css("background-image", "url('./src/img/game/" + nowChar.img + "_R_move.png')");
   } else if (attackcnt == 0) {
      $(".box").css("background-image", "url('./src/img/game/" + nowChar.img + "_L_move.png')");
   }
}

//이동 wasd 버튼의 배경 sprite이미지 이동 함수
function moveSprite() {
	/*if (imgX <= 0 && movecnt < nowChar.m_cnt) {//nowChar.a_cnt를 더하거나 빼서 넣느냐 마느냐!!!!!!
		imgX -= 100;
		movecnt++;
	}
	if (movecnt == nowChar.m_cnt) {
		imgX = 0;
		movecnt = 0;
	}
	$(".box").css("background-position-x", imgX + "px");
	$(".box").css("background-position-y", imgY + "px");
	$(".box").css("background-image", "url('./images/" + nowChar.img + "_R_move.png')");
	
	if(direct == 0) {
		$(".box").css("transform", "scaleX(-1)");
	} else {
		$(".box").css("transform", "scaleX(1)");
	}*/
      
   if (direct == 0) {
	   if (imgX_L_M >= (nowChar.m_cnt - 1) * -100 && movecnt < nowChar.m_cnt) {
		   imgX_L_M += 100;
		   movecnt++;
	   }
	   if (movecnt == nowChar.m_cnt * 1) {
		   imgX_L_M = (nowChar.m_cnt - 1) * -100;//원래 0
		   movecnt = 0;
	   }
	   $(".box").css("background-position-x", imgX_L_M + "px");
	   $(".box").css("background-position-y", imgY_L + "px");
	   $(".box").css("background-image",
			   "url('./src/img/game/" + nowChar.img + "_L_move.png')");
   } else if (direct == 1) {
	   if (imgX <= 0 && movecnt < nowChar.m_cnt) {
		   imgX -= 100;
		   movecnt++;
	   }
	   if (movecnt == nowChar.m_cnt) {
		   imgX = 0;
		   movecnt = 0;
	   }
	   $(".box").css("background-position-x", imgX + "px");
	   $(".box").css("background-position-y", imgY + "px");
	   $(".box").css("background-image", "url('./src/img/game/" + nowChar.img + "_R_move.png')");
   }
}

//공격 버튼 sprite 이미지 설정 ( 방향별 )
function attack() {

   if (direct == 0) {
      $(".box").css("background-position-x", imgX_L + "px");
      $(".box").css("background-position-y", imgY_L + "px");
      $(".box").css("background-image", "url('./src/img/game/" + nowChar.img + "_L_attack.png')");
      if (imgX_L >= (nowChar.a_cnt - 1) * -100 && movecnt < nowChar.a_cnt) {
         imgX_L += 100;
         movecnt++;
      }

      if (movecnt == nowChar.a_cnt * 1) {
         imgX_L = (nowChar.a_cnt - 1) * -100;
         movecnt = 0;
         if(dgMode == true){
            
            nowDg.hp -= nowChar.attack;
            if (nowDg.hp <= 0)
            {
               money += nowDg.money;
               nowDg.hp = nowDg.maxhp;
            }
            $("#"+nowDg.ename+"hp").html(nowDg.hp);
            $(".hpbar_"+nowDg.ename+"").css("width",nowDg.hp/nowDg.maxhp*100+"%");
          
         }
      }
   } else if (direct == 1) {
      $(".box").css("background-position-x", imgX + "px");
      $(".box").css("background-position-y", imgY + "px");
      $(".box").css("background-image", "url('./src/img/game/" + nowChar.img + "_R_attack.png')");
      if (imgX <= 0 && movecnt < nowChar.a_cnt) {
         imgX -= 100;
         movecnt++;
      }

      if (movecnt == nowChar.a_cnt * 1) {
         imgX = 0;
         movecnt = 0;
         if(dgMode == true){
            if(dgMode == true){
            
               nowDg.hp -= nowChar.attack;
               if (nowDg.hp <= 0)
               {
                  money += nowDg.money;
                  nowDg.hp = nowDg.maxhp;
               }
               $("#"+nowDg.ename+"hp").html(nowDg.hp);
               $(".hpbar_"+nowDg.ename+"").css("width",nowDg.hp/nowDg.maxhp*100+"%");
             
            }
         }
      }
   }
}

//던전 영역에 진입여부 체크 flag
function checkmonster(x, y) {
      for(var i = 0 ; i < monsterwall.length ; i++) {
         
         if(
            //
            ((x > monsterwall[i].x1 && x < monsterwall[i].x2) &&
            ( y > monsterwall[i].y1 && y < monsterwall[i].y2)) ||
            //
            ((x + 100 > monsterwall[i].x1 && x + 100 < monsterwall[i].x2) &&
            (y + 100 > monsterwall[i].y1 && y + 100 < monsterwall[i].y2))
                
         ) {
            return true;
         }
       }   
       return false;
    }

//던전 영역 배열 추가
function makemonster(xa, ya, xb, yb) {
      var pos1 = {
         x1 : xa,
         y1 : ya,
         x2 : xb,
         y2 : yb
      }
      monsterwall.push(pos1);
    
   }

//도움말 H 키 입력시 팝업
function popup() {
      var html1;
      con.innerHTML +=  html1 = "<div class=\"popup\"><div class=\"popup_empty\"></div><div ><span class=\"popup1\"  id=\"name\">" + nowDg.name + "</span><span class=\"popup1\">던전에 입장하였습니다</span> </div> </div>";
         
      setTimeout(function() { 
            $("#con").html("");
      }, 3000);
   }

//팝업내용
function hKey() {
var html2 = "<div class=\"popup2\"><div><span class=\"popup3\">도움말 및 사용법 </span>       ";
     html2 += "       <div class=\"hero_information\" >방향키 : w 키 = 위, s키 =아래 , a키 =왼쪽 , d= 오른쪽 <br/> ";
     html2 += "       e키=공격              영웅 정보<br/> "; 
     html2 += "       레베카 = 공격력 : 10, 가격 :   x   , 공격속도 : 1000 <br/> "; 
     html2 += "       나미 = 공격력 : 80, 가격 : 1,000, 공격속도 : 950 <br/> "; 
     html2 += "       사보 = 공격력 : 150, 가격 : 3,000, 공격속도 : 900 <br/> "; 
     html2 += "       핸콕 = 공격력 : 270, 가격 : 5,000, 공격속도 : 850 <br/> "; 
     html2 += "       상디 = 공격력 : 500, 가격 : 10,000, 공격속도 : 800 <br/> "; 
     html2 += "       에이스 = 공격력 : 1000, 가격 : 50,000, 공격속도 : 750 <br/> ";  
     html2 += "       루피 = 공격력 : 1800, 가격 : 100,000, 공격속도 : 700 <br/> "; 
     html2 += "       조로 = 공격력 : 5000, 가격 : 300,000, 공격속도 : 650 <br/>"; 
     html2 += "       샹크스 = 공격력 : 12000, 가격 : 800,000, 공격속도 : 600 <br/> "; 
     html2 += "       미호크 = 공격력 : 25000, 가격 : 1,500,000, 공격속도 : 550 <br/>"; 
     html2 += "       </div> "; 
     html2 += "       <div class=\"hero_information\"> "; 
     html2 += "             <br/> "; 
     html2 += "          몬스터 정보  <br/> "; 
     
     html2 += "          칼날부리 = 체력 : 50, 골드 : 100 <br/>"; 
     html2 += "          두꺼비 = 체력 : 180, 골드 : 300  <br/>"; 
     html2 += "          골렘 = 체력 : 800, 골드 : 1,600 <br/>"; 
     html2 += "          블루골렘 = 체력 : 4,000 , 골드 : 9,000 <br/>"; 
     html2 += "          레드골렘 = 체력 : 25,000 , 골드 : 60,000 <br/>"; 
     html2 += "          협곡의 전령 = 체력 : 200,000 , 골드 : 550,000  <br/>"; 
     html2 += "          드래곤 = 체력 : 1,800,000 , 골드 : 5,000,000 <br/>"; 
     html2 += "          바론 = 체력 : 20,000,000 , 골드 : 8,000,000 <br/> "; 
     html2 += "       </div>"; 
     html2 += " </div>"; 
     html2 += " </div>"; 
     help.innerHTML = html2;
     setTimeout(function() { 
         $("#help").html("");
   }, 10000);
}