/* CODE NOTE · script.js 라우팅 · 진도율 · 고정목차 스크롤감지 · 실시간 프리뷰· 스크롤 등장 애니메이션 · 설정 */

const COURSES = {
  html: {
    name: "HTML", full: "HyperText Markup Language",
    desc: "웹의 뼈대와 구조", color: "#e2502f", logo: "assets/logo-html.png",
    sections: [
      { id:"html-1", title:"HTML이란?", show:"html",
        body:`<p><strong>HTML</strong>(HyperText Markup Language)은 웹 페이지의 <span class="hl">구조와 내용</span>을 정의하는 마크업 언어입니다. 제목·문단·이미지·링크 같은 요소를 <code class="inline">&lt;태그&gt;</code>로 감싸 브라우저에게 의미를 알려줍니다.</p>
        <ul class="points"><li>웹의 <strong>뼈대(구조)</strong> 담당 — CSS는 디자인, JS는 동작</li><li>실습 환경: VS Code + Chrome + Live Server</li></ul>
        <div class="note-box"><span class="note-tag">📝 메모</span><p>HTML은 <strong>대·소문자를 구분하지 않지만</strong> 태그·속성 이름은 소문자로 통일해 쓰는 것이 규칙입니다.</p></div>`,
        code:{ html:`<h1>안녕하세요 👋</h1>\
<p>제 첫 번째 웹 페이지입니다.</p>`, css:`body{font-family:sans-serif;padding:24px;}`, js:`` } },

      { id:"html-2", title:"태그와 요소", show:"html",
        body:`<p><strong>태그(Tag)</strong>는 마크업을 위한 기호로, 보통 <span class="hl">시작 태그와 종료 태그</span>가 짝을 이룹니다. 태그와 내용을 모두 포함한 단위를 <strong>요소(Element)</strong>라고 합니다.</p>
        <ul class="points"><li>속성은 시작 태그 안에 작성: <code class="inline">&lt;p style="color:blue"&gt;</code></li><li>시작 태그만 있는 빈 태그: <code class="inline">&lt;br&gt;</code>, <code class="inline">&lt;img&gt;</code>, <code class="inline">&lt;hr&gt;</code>, <code class="inline">&lt;meta&gt;</code></li><li>주석은 <code class="inline">&lt;!-- 내용 --&gt;</code></li><li>하위 태그는 들여쓰기로 가독성 확보</li></ul>`,
        code:{ html:`<!-- 이것은 주석입니다 -->\
<p style="color:blue;">파란 문단</p>\
<hr>\
<p>가로줄 아래 문단<br>줄바꿈도 했어요</p>`, css:`body{padding:20px;font-family:sans-serif;}`, js:`` } },

      { id:"html-3", title:"문서 기본 구조", show:"html",
        body:`<p>모든 HTML 문서는 정해진 뼈대를 가집니다. <code class="inline">&lt;head&gt;</code>에는 페이지 정보를, <code class="inline">&lt;body&gt;</code>에는 화면에 보이는 내용을 담습니다.</p>
        <ul class="points"><li><strong>&lt;!DOCTYPE html&gt;</strong> — HTML5 문서 선언</li><li><strong>&lt;meta charset="UTF-8"&gt;</strong> — 한글 깨짐 방지</li><li><strong>&lt;title&gt;</strong> — 브라우저 탭 제목</li></ul>`,
        code:{ html:`<!DOCTYPE html>\
<html lang="ko">\
  <head>\
    <meta charset="UTF-8">\
    <title>내 페이지</title>\
  </head>\
  <body>\
    <h1>본문 내용</h1>\
  </body>\
</html>`, css:``, js:`` } },

      { id:"html-4", title:"텍스트 태그", show:"html",
        body:`<p>제목은 <code class="inline">&lt;h1&gt;~&lt;h6&gt;</code>, 문단은 <code class="inline">&lt;p&gt;</code>, 목록은 <code class="inline">&lt;ul&gt;</code>(순서 없음)·<code class="inline">&lt;ol&gt;</code>(순서 있음)·<code class="inline">&lt;li&gt;</code>로 만듭니다.</p>`,
        code:{ html:`<h1>가장 큰 제목</h1>\
<h3>작은 제목</h3>\
<p>이것은 문단입니다.</p>\
<ul>\
  <li>사과</li>\
  <li>바나나</li>\
</ul>\
<ol>\
  <li>첫째</li>\
  <li>둘째</li>\
</ol>`, css:`body{font-family:sans-serif;padding:20px;line-height:1.6;}`, js:`` } },

      { id:"html-5", title:"표 만들기 (table)", show:"html",
        body:`<p>표는 <code class="inline">&lt;table&gt;</code> 안에 행 <code class="inline">&lt;tr&gt;</code>을 만들고, 그 안에 셀 <code class="inline">&lt;td&gt;</code>(제목 셀은 <code class="inline">&lt;th&gt;</code>)을 넣어 구성합니다.</p>
        <ul class="points"><li><strong>&lt;caption&gt;</strong> — 표 제목</li><li><strong>colspan</strong> / <strong>rowspan</strong> — 열·행 병합</li></ul>`,
        code:{ html:`<table border="1">\
  <caption>상품 구성</caption>\
  <tr>\
    <th>용도</th><th>중량</th><th>가격</th>\
  </tr>\
  <tr>\
    <td>선물용</td><td>3kg</td><td>35,000원</td>\
  </tr>\
  <tr>\
    <td colspan="2">가정용 합계</td><td>20,000원</td>\
  </tr>\
</table>`, css:`body{font-family:sans-serif;padding:20px;}\
table{border-collapse:collapse;}\
th,td{padding:10px 16px;}\
th{background:#ffe066;}`, js:`` } },

      { id:"html-6", title:"이미지·미디어·링크", show:"html",
        body:`<p>이미지는 <code class="inline">&lt;img&gt;</code>, 링크는 <code class="inline">&lt;a&gt;</code>, 영상·소리는 <code class="inline">&lt;video&gt;</code>·<code class="inline">&lt;audio&gt;</code>로 삽입합니다.</p>
        <ul class="points"><li><strong>src</strong> — 파일 경로, <strong>alt</strong> — 대체 텍스트, <strong>width</strong> — 크기</li><li><strong>href</strong> — 이동 주소, <strong>target="_blank"</strong> — 새 탭</li></ul>`,
        code:{ html:`<img src="https://picsum.photos/200/120" alt="예시 이미지" width="200">\
<br><br>\
<a href="https://www.naver.com" target="_blank">\
  네이버 새 탭으로 열기 →\
</a>`, css:`body{padding:24px;font-family:sans-serif;}\
a{color:#2b66c4;font-weight:bold;}`, js:`` } },

      { id:"html-7", title:"시맨틱 구조화", show:"html",
        body:`<p><span class="hl">시맨틱 태그</span>는 이름만 봐도 의미를 알 수 있는 태그입니다. <code class="inline">&lt;div&gt;</code>로만 짜면 구조를 알기 어렵지만, 시맨틱 태그는 검색 엔진·보조기기가 구조를 이해하기 쉽습니다.</p>
        <ul class="points"><li><strong>header</strong>·<strong>nav</strong>·<strong>main</strong>·<strong>section</strong>·<strong>article</strong>·<strong>aside</strong>·<strong>footer</strong></li><li>전역 속성: <strong>id</strong>(유일 식별)·<strong>class</strong>(그룹)·<strong>style</strong>·<strong>title</strong></li></ul>`,
        code:{ html:`<header>🏠 머리말 (제목·메뉴)</header>\
<nav>📑 내비게이션</nav>\
<main>\
  <section>📄 본문 영역</section>\
  <aside>💡 곁들이는 내용</aside>\
</main>\
<footer>© 2026 footer</footer>`, css:`body{font-family:sans-serif;}\
header,nav,section,aside,footer{padding:14px;margin:6px;border-radius:10px;}\
header{background:#ffd9cf;}nav{background:#d9ecff;}\
section{background:#e2f7ea;}aside{background:#fff3c4;}footer{background:#eee;}`, js:`` } },

      { id:"html-8", title:"폼 (form)", show:"html",
        body:`<p><strong>폼(Form)</strong>은 사용자가 정보를 입력해 서버로 보내는 요소입니다. <code class="inline">&lt;form&gt;</code> 안에 <code class="inline">&lt;input&gt;</code>·<code class="inline">&lt;button&gt;</code> 등을 배치합니다.</p>
        <ul class="points"><li><strong>method</strong> — get/post 전송 방식, <strong>action</strong> — 처리 서버</li><li><strong>label</strong>로 입력칸에 이름표를, <strong>fieldset</strong>/<strong>legend</strong>로 그룹화</li><li><strong>type</strong>: text · password · number · checkbox · radio …</li></ul>`,
        code:{ html:`<form>\
  <fieldset>\
    <legend>회원 가입</legend>\
    <label>아이디 <input type="text" placeholder="ID"></label><br><br>\
    <label>비밀번호 <input type="password"></label><br><br>\
    <label>나이 <input type="number" value="20"></label><br><br>\
    <button type="button">가입하기</button>\
  </fieldset>\
</form>`, css:`body{padding:24px;font-family:sans-serif;}\
fieldset{border:2px solid #d9583f;border-radius:10px;padding:16px;}\
legend{font-weight:bold;}\
input,button{padding:7px 10px;border-radius:7px;border:1px solid #ccc;}\
button{background:#d9583f;color:#fff;border:none;cursor:pointer;}`, js:`` } },

      { id:"html-9", title:"인라인 프레임 (iframe)", show:"html",
        body:`<p><code class="inline">&lt;iframe&gt;</code>은 <span class="hl">문서 안에 또 다른 문서</span>를 끼워 넣는 태그입니다. 다른 웹페이지·지도·동영상을 현재 페이지 안에 표시할 수 있습니다.</p>
        <ul class="points"><li><strong>src</strong> — 삽입할 문서 주소</li><li><strong>width</strong> / <strong>height</strong> — 프레임 크기</li><li><strong>frameborder</strong> — 테두리(0이면 없음), <strong>title</strong> — 접근성 설명</li></ul>
        <div class="note-box"><span class="note-tag">📝 메모</span><p>유튜브·구글 지도의 "공유 → 소스 코드 복사"가 바로 이 <code class="inline">&lt;iframe&gt;</code> 코드입니다.</p></div>`,
        code:{ html:`<h3>iframe으로 문서 끼워넣기</h3>
<iframe
  src="https://example.com"
  width="300" height="180"
  title="예시 사이트">
</iframe>`, css:`body{font-family:sans-serif;padding:20px;}
iframe{border:3px solid #d9583f;border-radius:10px;}`, js:`` } }
    ]
  },

  css: {
    name: "CSS", full: "Cascading Style Sheets",
    desc: "색·여백·배치로 디자인", color: "#2b66c4", logo: "assets/logo-css.png",
    sections: [
      { id:"css-1", title:"CSS란?", show:"css",
        body:`<p><strong>CSS</strong>(Cascading Style Sheets)는 HTML의 <span class="hl">색·모양·배치</span>를 꾸미는 언어입니다. 내용(HTML)과 디자인(CSS)을 분리하면, 같은 문서를 다양한 기기에 맞게 바꿀 수 있습니다.</p>
        <ul class="points"><li>구성: 색상·배경 · 폰트 · 박스 모델 · 레이아웃</li><li>현재 표준은 <strong>CSS3</strong></li></ul>`,
        code:{ html:`<h3>CSS 스타일</h3>\
<p>이 문서는 <span>웹 프로그래밍</span> 문서입니다.</p>`, css:`body{background:lightblue;}\
h3{color:navy;}\
span{color:blue;font-weight:bold;}`, js:`` } },

      { id:"css-2", title:"스타일 적용 방법", show:"css",
        body:`<p>CSS를 HTML에 적용하는 방법은 세 가지입니다.</p>
        <ul class="points"><li><strong>인라인</strong> — 태그에 직접 <code class="inline">style="..."</code></li><li><strong>내부</strong> — <code class="inline">&lt;head&gt;</code> 안 <code class="inline">&lt;style&gt;</code> 태그</li><li><strong>외부</strong> — 별도 <code class="inline">.css</code> 파일을 <code class="inline">&lt;link&gt;</code>로 연결 (가장 권장)</li></ul>
        <div class="note-box"><span class="note-tag">📝 메모</span><p>선택자 구조: <code class="inline">선택자 { 속성: 값; }</code> — 속성과 값은 콜론 <code class="inline">:</code> , 여러 개는 세미콜론 <code class="inline">;</code>으로 구분.</p></div>`,
        code:{ html:`<h3 style="color:tomato;">① 인라인 스타일</h3>\
<p class="box">② 내부 스타일</p>`, css:`/* 내부 스타일 시트 */\
.box{\
  background:#e8f0ff;\
  color:#2b66c4;\
  padding:12px;\
  border-radius:8px;\
}`, js:`` } },

      { id:"css-3", title:"선택자 기본", show:"css",
        body:`<p>어떤 요소를 꾸밀지 고르는 것이 <span class="hl">선택자</span>입니다.</p>
        <ul class="points"><li><strong>태그 선택자</strong> — <code class="inline">p { }</code> 모든 p</li><li><strong>클래스 선택자</strong> — <code class="inline">.box { }</code> class="box"</li><li><strong>아이디 선택자</strong> — <code class="inline">#title { }</code> id="title"</li></ul>`,
        code:{ html:`<p>일반 문단</p>\
<p class="hi">강조 문단</p>\
<p id="big">아주 큰 문단</p>`, css:`p{color:#555;}\
.hi{color:#3f9d6d;font-weight:bold;}\
#big{font-size:26px;color:#2b66c4;}`, js:`` } },

      { id:"css-4", title:"색상과 단위", show:"css",
        body:`<p>색은 여러 방식으로 표현합니다.</p>
        <ul class="points"><li><strong>이름</strong> — <code class="inline">red</code>, <strong>16진수</strong> — <code class="inline">#ff0000</code></li><li><strong>rgb/rgba</strong> — <code class="inline">rgba(255,0,0,.5)</code> (a=투명도)</li><li><strong>hsl/hsla</strong> — 색상·채도·밝기</li><li>크기: 절대(<strong>px, pt</strong>) · 상대(<strong>%, em</strong>)</li></ul>`,
        code:{ html:`<div class="a">#16진수</div>\
<div class="b">rgba 반투명</div>\
<div class="c">hsl 표기</div>`, css:`div{padding:14px;margin:8px;color:#fff;border-radius:8px;font-family:sans-serif;}\
.a{background:#2b66c4;}\
.b{background:rgba(217,88,63,.7);}\
.c{background:hsl(150,55%,45%);}`, js:`` } },

      { id:"css-5", title:"글꼴·문단 스타일", show:"css",
        body:`<p>글자 모양은 <code class="inline">font-</code> 속성, 문단 배치는 <code class="inline">text-</code> 속성으로 지정합니다.</p>
        <ul class="points"><li><strong>font-family · font-size · font-weight · font-style</strong></li><li><strong>text-align · line-height · text-decoration</strong></li></ul>`,
        code:{ html:`<h2>제목입니다</h2>\
<p>문단 스타일을 적용해 봅니다. 줄 높이와 정렬을 확인하세요.</p>`, css:`body{padding:20px;}\
h2{font-family:serif;font-size:30px;font-style:italic;color:#2b66c4;}\
p{font-size:16px;line-height:2;text-align:center;text-decoration:underline;}`, js:`` } },

      { id:"css-6", title:"박스 모델", show:"css",
        body:`<p>모든 요소는 사각형 상자입니다. 안쪽부터 <span class="hl">내용 → padding → border → margin</span> 순으로 공간을 구성합니다.</p>
        <ul class="points"><li><strong>블록 요소</strong>(p, div, h1…) — 한 줄 독점, 너비 100%</li><li><strong>인라인 요소</strong>(span, a…) — 내용 만큼만 차지</li></ul>`,
        code:{ html:`<div class="box">박스 모델</div>`, css:`.box{\
  width:160px;\
  padding:20px;\
  margin:30px;\
  border:3px solid #2b66c4;\
  border-radius:12px;\
  background:#e8f0ff;\
  color:#2b66c4;\
  font-weight:bold;\
}`, js:`` } },

      { id:"css-7", title:"우선순위 (캐스케이딩)", show:"css",
        body:`<p>같은 요소에 여러 스타일이 겹치면 <span class="hl">더 구체적인 선택자</span>가 이깁니다. 우선순위가 같으면 <strong>나중에 작성한 코드</strong>가 적용됩니다.</p>
        <ul class="points"><li>인라인 &gt; <strong>#id</strong> &gt; <strong>.class</strong> &gt; <strong>태그</strong></li><li><strong>!important</strong> — 모든 것을 무시하고 최우선 (남용 주의)</li></ul>`,
        code:{ html:`<p id="t" class="c">어떤 색일까요?</p>`, css:`p{color:gray;}        /* 태그 (0,0,1) */\
.c{color:tomato;}     /* 클래스 (0,1,0) */\
#t{color:#2b66c4;}    /* 아이디 (1,0,0) → 승리! */`, js:`` } },

      { id:"css-8", title:"고급 선택자 (연결)", show:"css",
        body:`<p>선택자를 연결해 관계로 대상을 한정합니다.</p>
        <ul class="points"><li><strong>하위</strong> — <code class="inline">div p</code> (공백, 모든 자손)</li><li><strong>자식</strong> — <code class="inline">div &gt; p</code> (직계 자식만)</li><li><strong>형제</strong> — <code class="inline">h1 ~ p</code> (이후 모든 형제)</li><li><strong>인접 형제</strong> — <code class="inline">h1 + p</code> (바로 다음 하나)</li></ul>`,
        code:{ html:`<section>\
  <h1>예약 안내</h1>\
  <p>바로 다음 문단</p>\
  <div><p>div 안의 문단</p></div>\
  <p>형제 문단</p>\
</section>`, css:`h1 + p{color:#d9583f;font-weight:bold;} /* 바로 다음 하나 */\
div > p{background:#fff3c4;}            /* 직계 자식 */\
h1 ~ p{font-style:italic;}              /* 이후 형제 */`, js:`` } },

      { id:"css-9", title:"가상 클래스·가상 요소", show:"css",
        body:`<p><span class="hl">가상 클래스</span>는 요소의 특정 <strong>상태</strong>를, <span class="hl">가상 요소</span>는 요소의 <strong>일부분</strong>을 선택합니다. (아래 버튼·목록에 마우스를 올려보세요!)</p>
        <ul class="points"><li><strong>:hover</strong> · <strong>:active</strong> · <strong>:focus</strong> — 상호작용 상태</li><li><strong>:first-child</strong> · <strong>:last-child</strong> · <strong>:nth-child(n)</strong> — 순서</li><li><strong>::before</strong> · <strong>::after</strong> — 내용 앞·뒤에 생성</li></ul>`,
        code:{ html:`<button>마우스를 올려보세요</button>
<ul>
  <li>첫째 줄</li>
  <li>둘째 줄</li>
  <li>셋째 줄</li>
</ul>`, css:`body{font-family:sans-serif;padding:20px;}
button{padding:10px 18px;border:none;border-radius:8px;
  background:#2b66c4;color:#fff;cursor:pointer;transition:.25s;}
button:hover{background:#d9583f;transform:scale(1.1);}
li:nth-child(odd){background:#e8f0ff;}  /* 홀수 줄 */
li:first-child{font-weight:bold;}
li::before{content:"✏️ ";}            /* 앞에 추가 */`, js:`` } },

      { id:"css-10", title:"레이아웃·배치 (display)", show:"css",
        body:`<p>요소의 배치 방식은 <code class="inline">display</code>로 정합니다. <code class="inline">box-sizing:border-box</code>를 쓰면 padding·border를 포함해 너비를 계산해 편리합니다.</p>
        <ul class="points"><li><strong>block</strong> — 한 줄 차지 / <strong>inline</strong> — 내용만큼 / <strong>inline-block</strong> — 둘의 절충</li><li><strong>none</strong> — 화면에서 숨김</li><li><strong>float</strong> — 요소를 좌·우로 띄워 배치 (clear로 해제)</li></ul>`,
        code:{ html:`<span class="chip">HTML</span>
<span class="chip">CSS</span>
<span class="chip">JS</span>`, css:`body{font-family:sans-serif;padding:24px;}
.chip{
  display:inline-block;   /* 가로로 나란히 + 크기 지정 가능 */
  box-sizing:border-box;
  width:90px;
  padding:12px;
  margin:4px;
  text-align:center;
  background:#2b66c4;color:#fff;
  border-radius:10px;
}`, js:`` } },

      { id:"css-11", title:"웹폰트 적용", show:"css",
        body:`<p>방문자 PC에 없는 글꼴도 <span class="hl">웹폰트</span>로 불러와 쓸 수 있습니다. 보통 구글 폰트를 <code class="inline">@import</code>나 <code class="inline">&lt;link&gt;</code>로 연결한 뒤 <code class="inline">font-family</code>에 지정합니다.</p>
        <ul class="points"><li>구글 폰트에서 글꼴 선택 → 링크 복사 → 문서에 연결</li><li>직접 글꼴 파일을 쓸 땐 <strong>@font-face</strong>로 등록</li></ul>`,
        code:{ html:`<h1>웹폰트 적용 예시</h1>
<p>Gaegu 손글씨 폰트로 보여요!</p>`, css:`@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@700&display=swap');

body{padding:24px;}
h1, p{
  font-family:'Gaegu', sans-serif;
}
h1{color:#2b66c4;}`, js:`` } }
    ]
  },

  js: {
    name: "JavaScript", full: "JavaScript",
    desc: "동작과 상호작용", color: "#caa015", logo: "assets/logo-js.png",
    sections: [
      { id:"js-1", title:"JavaScript란?", show:"js",
        body:`<p><strong>JavaScript</strong>는 1995년 넷스케이프에서 만든, 웹에 <span class="hl">동작</span>을 더하는 언어입니다. 컴파일 없이 브라우저가 바로 해석(인터프리터)하는 스크립트 언어입니다.</p>
        <ul class="points"><li>작성 위치: <code class="inline">&lt;script&gt;</code> 태그, <code class="inline">.js</code> 파일, 이벤트 속성</li><li>역할: 입력 처리·연산, 내용/모양 동적 제어, DOM 조작</li><li><code class="inline">console.log()</code>로 값 출력</li></ul>`,
        code:{ html:`<h2 id="out">결과를 확인!</h2>`, css:`body{font-family:sans-serif;padding:24px;}`, js:`console.log("Hello, JavaScript!");\
document.getElementById("out").textContent =\
  "JS가 화면을 바꿨습니다 ✨";` } },

      { id:"js-2", title:"변수와 상수", show:"js",
        body:`<p>데이터를 담는 공간이 <span class="hl">변수</span>입니다. <code class="inline">let</code>은 값을 바꿀 수 있고, <code class="inline">const</code>는 한 번 정하면 못 바꿉니다.</p>
        <ul class="points"><li>이름: 영문자·_·$로 시작, 띄어쓰기 불가, 대소문자 구별</li><li>여러 단어는 카멜표기 — <code class="inline">totalScore</code>, <code class="inline">getArea</code></li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:18px;}`, js:`let width = 200;\
let height = 50;\
const area = width * height;\
document.getElementById("box").textContent =\
  "사각형 넓이 = " + area;` } },

      { id:"js-3", title:"자료형", show:"js",
        body:`<p>JavaScript의 자료형입니다.</p>
        <ul class="points"><li><strong>숫자</strong>, <strong>문자열</strong>('' ""), <strong>논리형</strong>(true/false)</li><li><strong>배열</strong>, <strong>객체</strong>, <strong>undefined</strong>, <strong>null</strong></li><li><code class="inline">typeof</code>로 자료형 확인, <strong>템플릿 리터럴</strong> <code class="inline">\`\${변수}\`</code></li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:17px;line-height:1.8;}`, js:`const name = "코딩 학생";\
let age = 20;\
const likes = ["HTML", "CSS", "JS"];\
\
document.getElementById("box").innerHTML =\
  \`이름: \${name} (\${typeof name})<br>\` +\
  \`나이: \${age}세<br>\` +\
  \`관심: \${likes.join(", ")}\`;` } },

      { id:"js-4", title:"연산자", show:"js",
        body:`<p>값을 계산하고 비교합니다.</p>
        <ul class="points"><li><strong>산술</strong> + - * / %(나머지)</li><li><strong>비교</strong> === (값+자료형 같음), &gt; &lt; &gt;= &lt;=</li><li><strong>논리</strong> &amp;&amp;(그리고) ||(또는) !(부정)</li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:18px;line-height:1.9;}`, js:`let a = 7, b = 3;\
document.getElementById("box").innerHTML =\
  \`a + b = \${a + b}<br>\` +\
  \`a % b = \${a % b}<br>\` +\
  \`a > b 인가? \${a > b}<br>\` +\
  \`(a>5 && b<5) → \${a > 5 && b < 5}\`;` } },

      { id:"js-5", title:"조건문", show:"js",
        body:`<p><code class="inline">if</code>로 상황에 따라 다르게 동작합니다.</p>
        <ul class="points"><li><strong>if · else if · else</strong> 로 분기</li><li><strong>삼항 연산자</strong> — <code class="inline">조건 ? 참값 : 거짓값</code></li><li>여러 경우는 <strong>switch</strong></li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:20px;}`, js:`let score = 82;\
let grade;\
if (score >= 90) grade = "A";\
else if (score >= 80) grade = "B";\
else grade = "C";\
\
let pass = score >= 60 ? "합격" : "불합격";\
document.getElementById("box").textContent =\
  \`\${score}점 → \${grade} (\${pass})\`;` } },

      { id:"js-6", title:"반복문", show:"js",
        body:`<p>같은 일을 여러 번 반복합니다. <strong>break</strong>는 멈춤, <strong>continue</strong>는 건너뜀.</p>
        <ul class="points"><li><strong>for</strong> — 횟수가 정해진 반복</li><li><strong>while · do-while</strong> — 조건이 참인 동안</li></ul>`,
        code:{ html:`<ul id="list"></ul>`, css:`body{font-family:sans-serif;padding:24px;font-size:17px;}`, js:`const list = document.getElementById("list");\
for (let i = 1; i <= 5; i++) {\
  const li = document.createElement("li");\
  li.textContent = i + (i % 2 === 0 ? "번 (짝수)" : "번 (홀수)");\
  list.appendChild(li);\
}` } },

      { id:"js-7", title:"함수", show:"js",
        body:`<p><span class="hl">함수</span>는 반복되는 작업을 묶어 이름 붙인 것입니다. 매개변수로 값을 받아 <code class="inline">return</code>으로 결과를 돌려줍니다.</p>
        <ul class="points"><li>선언 <code class="inline">function 이름(매개변수){ }</code>, 호출 <code class="inline">이름(인자)</code></li><li>매개변수 기본값, 익명/화살표 함수 <code class="inline">() =&gt; {}</code></li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:20px;line-height:1.7;}`, js:`function add(a, b = 10) {\
  return a + b;\
}\
const mul = (a, b) => a * b;\
\
document.getElementById("box").innerHTML =\
  \`add(7,5) = \${add(7,5)}<br>\` +\
  \`add(7) = \${add(7)}<br>\` +\
  \`mul(4,6) = \${mul(4,6)}\`;` } },

      { id:"js-8", title:"객체", show:"js",
        body:`<p><span class="hl">객체</span>는 관련된 데이터(프로퍼티)와 동작(메서드)을 하나로 묶은 것입니다. <code class="inline">.</code>으로 접근합니다.</p>
        <ul class="points"><li><strong>프로퍼티</strong> — 상태/특성, <strong>메서드</strong> — 동작(함수)</li><li>내장 객체: <strong>Array</strong>, <strong>Date</strong> 등</li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:18px;line-height:1.8;}`, js:`const car = {\
  model: "소나타",\
  color: "블랙",\
  speed: 110,\
  getState: function() {\
    return \`\${this.model}: \${this.speed}km/h\`;\
  }\
};\
const now = new Date();\
document.getElementById("box").innerHTML =\
  car.getState() + "<br>현재시각: " +\
  now.toLocaleTimeString();` } },

      { id:"js-9", title:"DOM과 이벤트", show:"js",
        body:`<p><strong>DOM</strong>(Document Object Model)은 웹 문서를 객체 트리로 표현한 것입니다. JS로 요소를 찾아(접근) 내용·스타일을 바꿉니다.</p>
        <ul class="points"><li>접근: <code class="inline">getElementById</code>, <code class="inline">querySelector</code></li><li><strong>이벤트</strong> — <code class="inline">addEventListener("click", 함수)</code></li></ul>`,
        code:{ html:`<button id="btn">클릭하세요</button>\
<p id="count">클릭 수: 0</p>`, css:`body{font-family:sans-serif;padding:24px;text-align:center;}\
button{padding:12px 24px;font-size:16px;border:none;border-radius:10px;background:#caa015;color:#fff;cursor:pointer;}\
#count{font-size:22px;font-weight:bold;margin-top:16px;}`, js:`let n = 0;\
const btn = document.querySelector("#btn");\
btn.addEventListener("click", () => {\
  n++;\
  document.getElementById("count").textContent =\
    "클릭 수: " + n;\
});` } },

      { id:"js-10", title:"JSON", show:"js",
        body:`<p><strong>JSON</strong>(JavaScript Object Notation)은 데이터를 주고받을 때 쓰는 <span class="hl">가벼운 텍스트 형식</span>입니다. JS 객체와 모양이 거의 같아 다루기 쉽습니다.</p>
        <ul class="points"><li><strong>JSON.stringify(객체)</strong> — 객체 → JSON 문자열 (서버로 보낼 때)</li><li><strong>JSON.parse(문자열)</strong> — JSON 문자열 → 객체 (받아서 쓸 때)</li><li>키는 반드시 <strong>큰따옴표</strong>로 감쌈</li></ul>`,
        code:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:16px;line-height:1.8;}`, js:`const car = { model: "소나타", color: "블랙", speed: 110 };\
\
// 객체 → JSON 문자열\
const text = JSON.stringify(car);\
\
// JSON 문자열 → 객체\
const back = JSON.parse(text);\
\
document.getElementById("box").innerHTML =\
  "문자열: " + text + "<br>" +\
  "다시 객체로: " + back.model + " / " + back.speed + "km/h";` } },

      { id:"js-11", title:"Ajax", show:"js",
        body:`<p><strong>Ajax</strong>는 <span class="hl">페이지를 새로고침하지 않고</span> 서버와 데이터를 주고받는 기술입니다. 화면 일부만 바꿔 더 빠르고 매끄러운 웹을 만듭니다. (아래 버튼을 눌러보세요!)</p>
        <ul class="points"><li>요즘은 <strong>fetch()</strong> 함수를 많이 사용 (과거엔 XMLHttpRequest)</li><li>응답이 올 때까지 기다리는 <strong>비동기</strong> 처리 — <code class="inline">then()</code> 또는 <code class="inline">async/await</code></li></ul>`,
        code:{ html:`<button id="load">사용자 불러오기</button>\
<div id="box" style="margin-top:14px;"></div>`, css:`body{font-family:sans-serif;padding:24px;}\
button{padding:10px 18px;border:none;border-radius:8px;background:#caa015;color:#fff;cursor:pointer;}\
#box{font-size:15px;line-height:1.7;}`, js:`const btn = document.getElementById("load");\
btn.addEventListener("click", () => {\
  // fetch로 서버 데이터 요청 (새로고침 없이!)\
  fetch("https://jsonplaceholder.typicode.com/users/1")\
    .then(res => res.json())\
    .then(user => {\
      document.getElementById("box").innerHTML =\
        "이름: " + user.name + "<br>" +\
        "이메일: " + user.email;\
    })\
    .catch(() => {\
      document.getElementById("box").textContent = "불러오기 실패 ⚠";\
    });\
});` } }
    ]
  }
};

/* -------------------- DOM 참조 -------------------- */
const $ = (s) => document.querySelector(s);
const viewLanding = $("#view-landing");
const viewLearn = $("#view-learn");
const cardDeck = $("#cardDeck");
const tocList = $("#tocList");
const content = $("#content");
const contentScroll = $("#contentScroll");
const progressFill = $("#progressFill");
const progressPct = $("#progressPct");
const langChip = $("#langChip");
const langName = $("#langName");
const previewFrame = $("#previewFrame");
const editors = { html: $("#code-html"), css: $("#code-css"), js: $("#code-js") };

let current = null, seen = new Set(), totalSections = 0;
let jumpActive = false, jumpTargetTop = 0, jumpTimer = null;

/* 공통: 모서리 드래그 크기 조절 핸들 */
function makeResizable(el, opts) {
  if (!el || el.querySelector(":scope > .rsz-grip")) return;
  opts = opts || {};
  const grip = document.createElement("div");
  grip.className = "rsz-grip";
  grip.title = "드래그하여 크기 조절";
  el.appendChild(grip);
  let sx = 0, sy = 0, sw = 0, sh = 0;
  const onMove = (e) => {
    const pt = e.touches ? e.touches[0] : e;
    let w = sw + (pt.clientX - sx);
    let h = sh + (pt.clientY - sy);
    const maxW = opts.maxW ? opts.maxW() : (el.parentElement ? el.parentElement.clientWidth : 9999);
    w = Math.max(opts.minW || 200, Math.min(maxW, w));
    h = Math.max(opts.minH || 140, Math.min(opts.maxH ? opts.maxH() : window.innerHeight * 0.9, h));
    if (opts.widthTarget) {
      const wt = opts.widthTarget();
      if (wt) { wt.style.flex = `0 0 ${w}px`; el.style.width = ""; el.style.flex = ""; }
    } else {
      el.style.width = w + "px";
      el.style.flex = "0 0 auto";
    }
    el.style.height = h + "px";
  };
  const onUp = () => {
    document.body.classList.remove("is-resizing");
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("mouseup", onUp);
    window.removeEventListener("touchend", onUp);
  };
  const onDown = (e) => {
    e.preventDefault(); e.stopPropagation();
    const pt = e.touches ? e.touches[0] : e;
    sx = pt.clientX; sy = pt.clientY;
    const wt = opts.widthTarget ? opts.widthTarget() : null;
    sw = wt ? wt.offsetWidth : el.offsetWidth;
    sh = el.offsetHeight;
    document.body.classList.add("is-resizing");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
  };
  grip.addEventListener("mousedown", onDown);
  grip.addEventListener("touchstart", onDown, { passive: false });
}

/* 1) 랜딩 — 언어 카드 (실제 로고 이미지) */
function buildLanding() {
  cardDeck.innerHTML = "";
  Object.entries(COURSES).forEach(([key, c]) => {
    const card = document.createElement("article");
    card.className = "lang-card";
    card.dataset.lang = key;
    card.innerHTML = `
      <div class="card-badge"><img src="${c.logo}" alt="${c.name} 로고"></div>
      <h3 class="card-title">${c.name}</h3>
      <p class="card-desc">${c.desc}</p>
      <span class="card-go">시작하기 →</span>`;
    card.addEventListener("click", () => openCourse(key));
    cardDeck.appendChild(card);
  });

  // 4번째 카드 · 실습문제 연습
  const pcard = document.createElement("article");
  pcard.className = "lang-card lang-card--practice";
  pcard.dataset.lang = "practice";
  pcard.innerHTML = `
    <div class="card-badge card-badge--practice"><span class="practice-emoji">📝</span></div>
    <h3 class="card-title">실습문제</h3>
    <p class="card-desc">강의자료 문제 풀이</p>
    <span class="card-go">도전하기 →</span>`;
  pcard.addEventListener("click", openPractice);
  cardDeck.appendChild(pcard);
}

/* 2) 화면 전환 */
function openCourse(key) {
  current = key; seen = new Set(); jumpActive = false;
  document.documentElement.style.setProperty("--lang-color", COURSES[key].color);
  contentScroll.style.scrollBehavior = "auto";
  contentScroll.scrollTop = 0;
  buildCourse(key);
  contentScroll.scrollTop = 0;
  seen = new Set();
  updateActive();
  requestAnimationFrame(() => { contentScroll.style.scrollBehavior = "smooth"; });
  viewLanding.classList.remove("is-active");
  viewLearn.classList.add("is-active");
  updateMemoVisibility(true);
}
function goHome() {
  viewLearn.classList.remove("is-active");
  viewLanding.classList.add("is-active");
  updateMemoVisibility(false);
  if (typeof ScrollTrigger !== 'undefined') {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }
}
function updateMemoVisibility(show) {
  const pad = $("#memoPad");
  if (pad) pad.classList.toggle("memo-hidden", !show);
}

/* 3) 코스 화면 구성 */
function buildCourse(key) {
  const c = COURSES[key];
  totalSections = c.sections.length;
  langChip.textContent = c.name === "JavaScript" ? "JS" : c.name;
  langName.textContent = c.full;

  tocList.innerHTML = "";
  c.sections.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "toc-item";
    li.dataset.target = s.id;
    li.innerHTML = `<span class="toc-num">${String(i+1).padStart(2,"0")}</span><span>${s.title}</span>`;
    li.addEventListener("click", () => {
      const el = document.getElementById(s.id);
      if (!el) return;
      jumpActive = true;
      jumpTargetTop = el.offsetTop - 12;
      seen.add(s.id);
      contentScroll.scrollTo({ top: jumpTargetTop, behavior: "smooth" });
      clearTimeout(jumpTimer);
      jumpTimer = setTimeout(() => { jumpActive = false; }, 1000);
      updateActive();
    });
    tocList.appendChild(li);
  });

  content.innerHTML = "";

  c.sections.forEach((s, i) => {
    const sec = document.createElement("section");
    sec.className = "section";
    sec.id = s.id;
    const showCode = s.code[s.show] || "";
    sec.innerHTML = `
      <span class="section-kicker">CHAPTER ${String(i+1).padStart(2,"0")}</span>
      <h2>${s.title}</h2>
      ${s.body}
      <div class="code-block">
        <div class="code-block-head">
          <span>example · ${s.show.toUpperCase()}</span>
          <button class="try-btn">▶ 직접 해보기</button>
        </div>
        <pre><code>${highlight(escapeHtml(showCode), s.show)}</code></pre>
      </div>`;
    sec.querySelector(".try-btn").addEventListener("click", () => loadExample(s));
    content.appendChild(sec);
  });

  loadExample(c.sections[0], false);
  updateActive();
}

/* 4) 에디터 예제 불러오기 + 실시간 프리뷰 */
function loadExample(section, focus = true) {
  editors.html.value = section.code.html || "";
  editors.css.value = section.code.css || "";
  editors.js.value = section.code.js || "";
  switchTab(section.show);
  runPreview();
  if (focus) {
    const p = $(".editor-pane");
    p.animate([{boxShadow:"0 0 0 0 rgba(143,217,127,0)"},{boxShadow:"0 0 0 4px rgba(143,217,127,.7)"},{boxShadow:"0 0 0 0 rgba(143,217,127,0)"}],{duration:700,easing:"ease-out"});
  }
}
function runPreview() {
  const srcdoc = `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8">
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}${editors.css.value}</style></head>
<body>${editors.html.value}<script>try{${editors.js.value}}catch(e){document.body.insertAdjacentHTML("beforeend",'<pre style="color:#c00;font:13px monospace;padding:10px">⚠ '+e.message+'</pre>')}</script></body></html>`;
  previewFrame.srcdoc = srcdoc;
}
let runTimer = null;
function scheduleRun(){ clearTimeout(runTimer); runTimer = setTimeout(runPreview, 450); }

function switchTab(tab) {
  document.querySelectorAll(".etab").forEach(b => b.classList.toggle("is-active", b.dataset.tab === tab));
  document.querySelectorAll(".code-area").forEach(a => a.classList.toggle("is-active", a.dataset.tab === tab));
}

/* 5) 진도율 + 스크롤 감지 */
function updateActive() {
  const sections = [...content.querySelectorAll(".section")];
  if (!sections.length) return;
  const trigger = contentScroll.scrollTop + 90;
  let activeId = sections[0].id;
  sections.forEach(sec => { if (sec.offsetTop <= trigger) activeId = sec.id; });
  if (contentScroll.scrollTop + contentScroll.clientHeight >= contentScroll.scrollHeight - 4)
    activeId = sections[sections.length - 1].id;

  document.querySelectorAll(".toc-item").forEach(li => {
    const on = li.dataset.target === activeId;
    li.classList.toggle("is-active", on);
    if (seen.has(li.dataset.target)) li.classList.add("is-done");
  });
  if (jumpActive) {
    if (Math.abs(contentScroll.scrollTop - jumpTargetTop) < 6) jumpActive = false;
  } else {
    seen.add(activeId);
    const li = document.querySelector(`.toc-item[data-target="${activeId}"]`);
    if (li) li.classList.add("is-done");
  }
  const pct = totalSections ? Math.round((seen.size / totalSections) * 100) : 0;
  progressFill.style.width = pct + "%";
  progressPct.textContent = pct + "%";
}

/* 6) 코드 하이라이터 */
function escapeHtml(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function highlight(code, lang) {
  const store = [];
  const stash = (cls, txt) => { store.push('<span class="' + cls + '">' + txt + '</span>'); return "\u0000" + (store.length - 1) + "\u0001"; };

  if (lang === "html") {
    code = code.replace(/&lt;!--[\s\S]*?--&gt;/g, m => stash("tok-com", m));
    code = code.replace(/"[^"]*"/g, m => stash("tok-str", m));
    code = code.replace(/(&lt;\/?)([a-zA-Z0-9]+)/g, (m, p1, p2) => p1 + stash("tok-tag", p2));
  } else {
    code = code.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, m => stash("tok-com", m));
    code = code.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g, m => stash("tok-str", m));
    code = code.replace(/\b(const|let|var|function|return|if|else|for|while|true|false|null|new|document|console|addEventListener|typeof)\b/g, m => stash("tok-kw", m));
    code = code.replace(/\b(\d+(?:\.\d+)?)\b/g, m => stash("tok-num", m));
  }
  
  return code.replace(/\u0000(\d+)\u0001/g, (m, i) => store[+i]);
}

/* 7) 스크롤 등장 애니메이션 */
function setupReveal() {
  const els = [...document.querySelectorAll("[data-reveal]")];
  function check() {
    const h = viewLanding.clientHeight;
    els.forEach(el => {
      if (el.classList.contains("in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.95 && r.bottom > 0) el.classList.add("in");
    });
  }
  viewLanding.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  check();

  // 스크롤 힌트 숨김
  const hint = $("#scrollHint");
  viewLanding.addEventListener("scroll", () => {
    if (viewLanding.scrollTop > 60) hint.style.opacity = "0";
    else hint.style.opacity = "1";
  });
}

/* 8) 설정 패널 */
const TWEAK_GROUPS = {
  paper: ["paper-cream","paper-white","paper-mint","paper-grid"],
  lines: ["lines-on","lines-off"],
  hand: ["hand-on","hand-off"]
};
const TWEAK_DEFAULT = { paper:"paper-cream", lines:"lines-on", hand:"hand-on" };
const SIZE_DEFAULT = { readPx: 16, codePx: 13, memoPx: 14 };
const READ_BASE = 16; 

function getStore(){ return JSON.parse(localStorage.getItem("codenote-tweaks") || "{}"); }
function setStore(s){ localStorage.setItem("codenote-tweaks", JSON.stringify(s)); }

function applyTweak(group, val) {
  TWEAK_GROUPS[group].forEach(c => document.body.classList.remove(c));
  document.body.classList.add(val);
  const store = getStore();
  store[group] = val;
  setStore(store);
  syncTweakUI();
}
function applySize(which, px) {
  px = Math.round(px);
  if (which === "readPx") {
    document.documentElement.style.setProperty("--read-scale", (px / READ_BASE).toFixed(4));
    const el = $("#readVal"); if (el) el.textContent = px + "px";
    const r = $("#readRange"); if (r && +r.value !== px) r.value = px;
  } else if (which === "codePx") {
    document.documentElement.style.setProperty("--code-size", px + "px");
    const el = $("#codeVal"); if (el) el.textContent = px + "px";
    const r = $("#codeRange"); if (r && +r.value !== px) r.value = px;
  } else {
    document.documentElement.style.setProperty("--memo-size", px + "px");
    const el = $("#memoVal"); if (el) el.textContent = px + "px";
    const r = $("#memoRange"); if (r && +r.value !== px) r.value = px;
  }
  const store = getStore();
  store[which] = px;
  setStore(store);
}
function syncTweakUI() {
  document.querySelectorAll(".toggle[data-tweak], .swatches[data-tweak]").forEach(ctrl => {
    const group = ctrl.dataset.tweak;
    if (ctrl.classList.contains("toggle")) {
      ctrl.classList.toggle("is-on", document.body.classList.contains(ctrl.dataset.on));
    } else {
      ctrl.querySelectorAll("button").forEach(b => {
        b.classList.toggle("is-active", document.body.classList.contains(b.dataset.val));
      });
    }
  });
}
function loadTweaks() {
  const store = getStore();
  Object.keys(TWEAK_DEFAULT).forEach(group => {
    const val = store[group] || TWEAK_DEFAULT[group];
    TWEAK_GROUPS[group].forEach(c => document.body.classList.remove(c));
    document.body.classList.add(val);
  });
  applySize("readPx", store.readPx || SIZE_DEFAULT.readPx);
  applySize("codePx", store.codePx || SIZE_DEFAULT.codePx);
  applySize("memoPx", store.memoPx || SIZE_DEFAULT.memoPx);
  syncTweakUI();
}
function setupTweaks() {
  $("#tweakFab").addEventListener("click", () => $("#tweakPanel").classList.toggle("is-open"));
  $("#tweakClose").addEventListener("click", () => $("#tweakPanel").classList.remove("is-open"));

  document.querySelectorAll(".swatches[data-tweak]").forEach(ctrl => {
    const group = ctrl.dataset.tweak;
    ctrl.querySelectorAll("button").forEach(b => {
      b.addEventListener("click", () => applyTweak(group, b.dataset.val));
    });
  });
  document.querySelectorAll(".toggle[data-tweak]").forEach(tg => {
    tg.addEventListener("click", () => {
      const isOn = document.body.classList.contains(tg.dataset.on);
      applyTweak(tg.dataset.tweak, isOn ? tg.dataset.off : tg.dataset.on);
    });
  });
  $("#readRange").addEventListener("input", (e) => applySize("readPx", +e.target.value));
  $("#codeRange").addEventListener("input", (e) => applySize("codePx", +e.target.value));
  $("#memoRange").addEventListener("input", (e) => applySize("memoPx", +e.target.value));
  $("#tweakReset").addEventListener("click", () => {
    Object.entries(TWEAK_DEFAULT).forEach(([g,v]) => applyTweak(g, v));
    applySize("readPx", SIZE_DEFAULT.readPx);
    applySize("codePx", SIZE_DEFAULT.codePx);
    applySize("memoPx", SIZE_DEFAULT.memoPx);
  });
  loadTweaks();
}

/* 8.5) 코드 복사 */
function copyCode(btn, eds) {
  const activeTab = document.querySelector(".etab.is-active[data-tab], .etab.is-active[data-ptab]");
  const tab = activeTab ? (activeTab.dataset.tab || activeTab.dataset.ptab) : "html";
  const text = eds[tab].value;
  const done = () => {
    const old = btn.textContent;
    btn.textContent = "✓ 복사됨!";
    btn.classList.add("ebtn--ok");
    setTimeout(() => { btn.textContent = old; btn.classList.remove("ebtn--ok"); }, 1300);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta); done();
}

/* 8.6) 실습문제 연습 */
const PRACTICE = [
  { id:"p-html-1", lang:"html", title:"자기소개 페이지", goal:"제목·문단·목록으로 나를 소개하기",
    mission:"<code class=\"inline\">&lt;h1&gt;</code>으로 이름을, <code class=\"inline\">&lt;p&gt;</code>로 소개 문장을, <code class=\"inline\">&lt;ul&gt;&lt;li&gt;</code>로 좋아하는 것 3가지를 적어 자기소개 페이지를 완성하세요.",
    hint:"목록은 &lt;ul&gt; 안에 &lt;li&gt; 항목을 여러 개 넣습니다.",
    starter:{ html:`<!-- 여기에 자기소개를 작성하세요 -->\
<h1>이름을 적어요</h1>\
\
`, css:`body{font-family:sans-serif;padding:24px;line-height:1.6;}`, js:`` },
    solution:{ html:`<h1>김부산 (Busan Kim)</h1>\
<p>안녕하세요! 웹을 배우는 학생입니다.</p>\
<h3>좋아하는 것</h3>\
<ul>\
  <li>코딩하기</li>\
  <li>고양이</li>\
  <li>아메리카노</li>\
</ul>`, css:`body{font-family:sans-serif;padding:24px;line-height:1.6;}\
h1{color:#d9583f;}`, js:`` } },

  { id:"p-html-2", lang:"html", title:"시간표 만들기 (표)", goal:"table·tr·th·td로 표 그리기",
    mission:"<code class=\"inline\">&lt;table&gt;</code>로 요일(월·화·수)을 제목 행 <code class=\"inline\">&lt;th&gt;</code>으로, 과목을 <code class=\"inline\">&lt;td&gt;</code>로 채운 시간표를 만드세요.",
    hint:"행은 &lt;tr&gt;, 제목 셀은 &lt;th&gt;, 일반 셀은 &lt;td&gt; 입니다.",
    starter:{ html:`<table border="1">\
  <!-- 제목 행과 내용 행을 채우세요 -->\
\
</table>`, css:`body{font-family:sans-serif;padding:24px;}\
table{border-collapse:collapse;}\
th,td{padding:10px 16px;text-align:center;}`, js:`` },
    solution:{ html:`<table border="1">\
  <tr>\
    <th>월</th><th>화</th><th>수</th>\
  </tr>\
  <tr>\
    <td>국어</td><td>수학</td><td>영어</td>\
  </tr>\
  <tr>\
    <td>체육</td><td>과학</td><td>미술</td>\
  </tr>\
</table>`, css:`body{font-family:sans-serif;padding:24px;}\
table{border-collapse:collapse;}\
th,td{padding:10px 16px;text-align:center;}\
th{background:#d9583f;color:#fff;}`, js:`` } },

  { id:"p-html-3", lang:"html", title:"회원가입 폼", goal:"form·label·input으로 입력 폼 만들기",
    mission:"아이디(text), 비밀번호(password), 나이(number) 입력칸과 가입 버튼을 가진 폼을 만드세요. 각 입력칸에는 <code class=\"inline\">&lt;label&gt;</code>로 이름표를 답니다.",
    hint:"input의 type을 text·password·number로 바꿔보세요.",
    starter:{ html:`<form>\
  <!-- 입력칸 3개와 버튼을 만드세요 -->\
\
</form>`, css:`body{font-family:sans-serif;padding:24px;}\
label{display:block;margin-bottom:12px;}\
input,button{padding:7px 10px;border-radius:6px;border:1px solid #ccc;}`, js:`` },
    solution:{ html:`<form>\
  <label>아이디 <input type="text" placeholder="ID"></label>\
  <label>비밀번호 <input type="password"></label>\
  <label>나이 <input type="number" value="20"></label>\
  <button type="button">가입하기</button>\
</form>`, css:`body{font-family:sans-serif;padding:24px;}\
label{display:block;margin-bottom:12px;}\
input,button{padding:7px 10px;border-radius:6px;border:1px solid #ccc;}\
button{background:#d9583f;color:#fff;border:none;cursor:pointer;}`, js:`` } },

  { id:"p-css-1", lang:"css", title:"카드 박스 꾸미기", goal:"padding·border·radius·background 적용",
    mission:"<code class=\"inline\">.card</code> 박스에 안쪽 여백(padding) 20px, 파란 테두리(border), 둥근 모서리(border-radius), 연한 배경색을 넣어 예쁜 카드로 만드세요.",
    hint:"border:3px solid #2b66c4; 처럼 작성합니다.",
    starter:{ html:`<div class="card">스타일을 입혀주세요!</div>`, css:`.card{\
  /* 여기에 스타일을 작성하세요 */\
\
}`, js:`` },
    solution:{ html:`<div class="card">스타일을 입혀주세요!</div>`, css:`.card{\
  padding:20px;\
  border:3px solid #2b66c4;\
  border-radius:14px;\
  background:#e8f0ff;\
  color:#2b66c4;\
  font-weight:bold;\
  text-align:center;\
}`, js:`` } },

  { id:"p-css-2", lang:"css", title:"버튼 호버 효과", goal:":hover와 transition으로 인터랙션 만들기",
    mission:"버튼에 마우스를 올리면(<code class=\"inline\">:hover</code>) 배경색이 바뀌고 살짝 커지도록 <code class=\"inline\">transition</code>과 <code class=\"inline\">transform</code>을 적용하세요.",
    hint:"button:hover{ transform:scale(1.1); } 를 추가해 보세요.",
    starter:{ html:`<button>마우스를 올려보세요</button>`, css:`button{\
  padding:12px 22px;\
  border:none;border-radius:10px;\
  background:#2b66c4;color:#fff;\
  cursor:pointer;\
  /* transition을 추가하세요 */\
}\
/* :hover 규칙을 추가하세요 */`, js:`` },
    solution:{ html:`<button>마우스를 올려보세요</button>`, css:`button{\
  padding:12px 22px;\
  border:none;border-radius:10px;\
  background:#2b66c4;color:#fff;\
  cursor:pointer;\
  transition:.25s;\
}\
button:hover{\
  background:#d9583f;\
  transform:scale(1.1);\
}`, js:`` } },

  { id:"p-css-3", lang:"css", title:"줄무늬 목록", goal:":nth-child로 홀짝 행 구분하기",
    mission:"목록의 홀수 번째 항목에만 배경색을 넣어 줄무늬(zebra) 목록을 만드세요. <code class=\"inline\">li:nth-child(odd)</code>를 사용합니다.",
    hint:"li:nth-child(odd){ background:#eee; } 처럼 작성합니다.",
    starter:{ html:`<ul>\
  <li>첫째 줄</li>\
  <li>둘째 줄</li>\
  <li>셋째 줄</li>\
  <li>넷째 줄</li>\
</ul>`, css:`body{font-family:sans-serif;padding:20px;}\
li{padding:10px;list-style:none;}\
/* 홀수 줄 규칙을 추가하세요 */`, js:`` },
    solution:{ html:`<ul>\
  <li>첫째 줄</li>\
  <li>둘째 줄</li>\
  <li>셋째 줄</li>\
  <li>넷째 줄</li>\
</ul>`, css:`body{font-family:sans-serif;padding:20px;}\
li{padding:10px;list-style:none;}\
li:nth-child(odd){background:#e8f0ff;}\
li:nth-child(even){background:#fff3c4;}`, js:`` } },

  { id:"p-js-1", lang:"js", title:"학점 계산기", goal:"if·else if로 점수를 학점으로",
    mission:"점수 변수 <code class=\"inline\">score</code>가 90 이상이면 A, 80 이상이면 B, 그 외엔 C가 되도록 <code class=\"inline\">if/else</code>로 작성해 화면에 출력하세요.",
    hint:"if (score >= 90) grade = \"A\"; 형태로 분기합니다.",
    starter:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:22px;}`, js:`let score = 85;\
let grade;\
// 조건문으로 grade를 정하세요\
\
document.getElementById("box").textContent =\
  score + "점 → " + grade;` },
    solution:{ html:`<div id="box"></div>`, css:`body{font-family:sans-serif;padding:24px;font-size:22px;}`, js:`let score = 85;\
let grade;\
if (score >= 90) grade = "A";\
else if (score >= 80) grade = "B";\
else grade = "C";\
\
document.getElementById("box").textContent =\
  score + "점 → " + grade;` } },

  { id:"p-js-2", lang:"js", title:"구구단 출력", goal:"for 반복문으로 단 출력하기",
    mission:"<code class=\"inline\">for</code> 반복문으로 3단(3×1 ~ 3×9)을 계산해 목록으로 출력하세요.",
    hint:"for(let i=1; i<=9; i++) 안에서 3*i 를 계산합니다.",
    starter:{ html:`<ul id="list"></ul>`, css:`body{font-family:sans-serif;padding:24px;font-size:18px;}`, js:`const list = document.getElementById("list");\
// for 반복문으로 3단을 출력하세요\
` },
    solution:{ html:`<ul id="list"></ul>`, css:`body{font-family:sans-serif;padding:24px;font-size:18px;}`, js:`const list = document.getElementById("list");\
for (let i = 1; i <= 9; i++) {\
  const li = document.createElement("li");\
  li.textContent = "3 x " + i + " = " + (3 * i);\
  list.appendChild(li);\
}` } },

  { id:"p-js-3", lang:"js", title:"클릭 카운터", goal:"addEventListener로 이벤트 처리하기",
    mission:"버튼을 클릭할 때마다 숫자가 1씩 올라가는 카운터를 만드세요. <code class=\"inline\">addEventListener(\"click\", ...)</code>를 사용합니다.",
    hint:"클릭마다 변수 n을 1 늘리고 화면 텍스트를 갱신합니다.",
    starter:{ html:`<button id="btn">+1</button>\
<p id="out">0</p>`, css:`body{font-family:sans-serif;padding:24px;text-align:center;}\
button{padding:12px 24px;font-size:18px;border:none;border-radius:10px;background:#caa015;color:#fff;cursor:pointer;}\
#out{font-size:40px;font-weight:bold;}`, js:`let n = 0;\
const btn = document.getElementById("btn");\
// 클릭 이벤트를 연결하세요\
` },
    solution:{ html:`<button id="btn">+1</button>\
<p id="out">0</p>`, css:`body{font-family:sans-serif;padding:24px;text-align:center;}\
button{padding:12px 24px;font-size:18px;border:none;border-radius:10px;background:#caa015;color:#fff;cursor:pointer;}\
#out{font-size:40px;font-weight:bold;}`, js:`let n = 0;\
const btn = document.getElementById("btn");\
btn.addEventListener("click", () => {\
  n++;\
  document.getElementById("out").textContent = n;\
});` } }
];
const LANG_LABEL = { html:"HTML", css:"CSS", js:"JavaScript" };
const LANG_COLOR = { html:"#e2502f", css:"#2b66c4", js:"#caa015" };
const peditors = { html: $("#pcode-html"), css: $("#pcode-css"), js: $("#pcode-js") };
let pCurrentId = null, pFilter = "all", pSolved = new Set();
let userProblems = JSON.parse(localStorage.getItem("codenote-user-problems") || "[]");
let myCode = JSON.parse(localStorage.getItem("codenote-my-code") || "{}");
function saveMyCode(){
  if (!pCurrentId) return;
  myCode[pCurrentId] = { html: peditors.html.value, css: peditors.css.value, js: peditors.js.value };
  localStorage.setItem("codenote-my-code", JSON.stringify(myCode));
}
function saveUserProblems(){ localStorage.setItem("codenote-user-problems", JSON.stringify(userProblems)); }
function allProblems(){ return PRACTICE.concat(userProblems); }
function findProblem(id){ return allProblems().find(x => x.id === id); }
function filteredProblems(){ return allProblems().filter(p => pFilter === "all" || p.lang === pFilter); }

function openPractice() {
  document.documentElement.style.setProperty("--lang-color", "#7a5cc4");
  updateMemoVisibility(false);
  buildPracticeList();
  const first = filteredProblems()[0] || PRACTICE[0];
  loadProblem(first.id);
  viewLanding.classList.remove("is-active");
  $("#view-practice").classList.add("is-active");
}
function buildPracticeList() {
  const list = $("#practiceList");
  list.innerHTML = "";
  filteredProblems().forEach((p) => {
    const li = document.createElement("li");
    li.className = "toc-item" + (p.id === pCurrentId ? " is-active" : "") + (pSolved.has(p.id) ? " is-done" : "");
    li.dataset.pid = p.id;
    const mine = p.id.startsWith("u-");
    li.innerHTML = `<span class="toc-num">${LANG_LABEL[p.lang].slice(0,2).toUpperCase()}</span><span>${p.title}</span>` +
      (mine ? `<span class="pi-mine" title="내가 만든 문제">✏️</span><button class="pi-del" title="삭제">✕</button>` : "");
    li.addEventListener("click", (e) => { if (e.target.classList.contains("pi-del")) return; loadProblem(p.id); });
    if (mine) li.querySelector(".pi-del").addEventListener("click", (e) => { e.stopPropagation(); deleteUserProblem(p.id); });
    list.appendChild(li);
  });
  const mineCount = userProblems.length;
  $("#practiceSolved").textContent = pSolved.size + "개 도전함" + (mineCount ? ` · 내 문제 ${mineCount}개` : "");
}
function deleteUserProblem(id) {
  userProblems = userProblems.filter(p => p.id !== id);
  saveUserProblems();
  if (pCurrentId === id) { const next = filteredProblems()[0] || PRACTICE[0]; loadProblem(next.id); }
  else buildPracticeList();
}
function loadProblem(id) {
  const p = findProblem(id);
  if (!p) return;
  pCurrentId = id;
  pSolved.add(id);
  document.documentElement.style.setProperty("--lang-color", LANG_COLOR[p.lang]);
  $("#practiceChip").textContent = LANG_LABEL[p.lang] === "JavaScript" ? "JS" : LANG_LABEL[p.lang];
  const mine = p.id.startsWith("u-");

  $("#practiceContent").innerHTML = `
    <section class="section problem">
      <span class="section-kicker">PROBLEM · ${LANG_LABEL[p.lang]}</span>
      <h2>${p.title}${mine ? ' <span style="font-size:.6em;color:var(--ink-3)">✏️ 내 문제</span>' : ''}</h2>
      <p class="problem-goal">🎯 <strong>목표</strong> · ${p.goal || "—"}</p>
      <div class="note-box"><span class="note-tag">📋 미션</span><p>${p.mission || "—"}</p></div>
      ${p.hint ? `<p class="problem-hint">💡 <strong>힌트</strong> · ${p.hint}</p>` : ""}
      <p class="problem-tip">오른쪽 에디터에 직접 코드를 작성하면 아래 결과 창에 바로 나타납니다. 막히면 <strong>💡 정답 보기</strong>를 눌러 비교해 보세요!</p>
    </section>`;
  $("#practiceScroll").scrollTop = 0;

  // 저장해 둔 내 코드가 있으면 복원, 없으면 시작 코드
  const saved = myCode[p.id];
  peditors.html.value = saved ? (saved.html || "") : (p.starter.html || "");
  peditors.css.value = saved ? (saved.css || "") : (p.starter.css || "");
  peditors.js.value = saved ? (saved.js || "") : (p.starter.js || "");
  switchPTab(p.lang);
  runPracticePreview();
  buildPracticeList();
}
function runPracticePreview() {
  const srcdoc = `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8">
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}${peditors.css.value}</style></head>
<body>${peditors.html.value}<script>try{${peditors.js.value}}catch(e){document.body.insertAdjacentHTML("beforeend",'<pre style="color:#c00;font:13px monospace;padding:10px">⚠ '+e.message+'</pre>')}</script></body></html>`;
  $("#pPreviewFrame").srcdoc = srcdoc;
}
let pRunTimer = null;
function schedulePracticeRun(){ clearTimeout(pRunTimer); pRunTimer = setTimeout(runPracticePreview, 450); }
function switchPTab(tab) {
  document.querySelectorAll("#practiceTabs .etab").forEach(b => b.classList.toggle("is-active", b.dataset.ptab === tab));
  document.querySelectorAll("#view-practice .code-area").forEach(a => a.classList.toggle("is-active", a.dataset.ptab === tab));
}
function setupPractice() {
  $("#homeBtnP").addEventListener("click", () => {
    $("#view-practice").classList.remove("is-active");
    viewLanding.classList.add("is-active");
    updateMemoVisibility(false);
  });
  document.querySelectorAll("#practiceTabs .etab").forEach(b => b.addEventListener("click", () => switchPTab(b.dataset.ptab)));
  document.querySelectorAll("#practiceFilter .pf-btn").forEach(b => b.addEventListener("click", () => {
    pFilter = b.dataset.filter;
    document.querySelectorAll("#practiceFilter .pf-btn").forEach(x => x.classList.toggle("is-active", x === b));
    buildPracticeList();
    const first = filteredProblems()[0];
    if (first) loadProblem(first.id);
  }));
  Object.values(peditors).forEach(ta => ta.addEventListener("input", () => { schedulePracticeRun(); saveMyCode(); }));
  $("#pCopyBtn").addEventListener("click", () => copyCode($("#pCopyBtn"), peditors));
  $("#pResetBtn").addEventListener("click", () => {
    const p = findProblem(pCurrentId);
    if (!p) return;
    peditors.html.value = p.starter.html || "";
    peditors.css.value = p.starter.css || "";
    peditors.js.value = p.starter.js || "";
    runPracticePreview();
    saveMyCode();
  });
  $("#pMineBtn").addEventListener("click", () => {
    const mine = myCode[pCurrentId];
    const btn = $("#pMineBtn");
    if (!mine) {
      btn.textContent = "작성한 코드 없음";
      setTimeout(() => { btn.textContent = "✏️ 내 코드"; }, 1500);
      return;
    }
    peditors.html.value = mine.html || "";
    peditors.css.value = mine.css || "";
    peditors.js.value = mine.js || "";
    runPracticePreview();
    btn.textContent = "✓ 내 코드";
    setTimeout(() => { btn.textContent = "✏️ 내 코드"; }, 1500);
  });
  $("#pSolutionBtn").addEventListener("click", () => {
    const p = findProblem(pCurrentId);
    if (!p) return;
    saveMyCode(); // 정답 보기 전, 지금ᘜ지 쓴 내 코드 보관
    peditors.html.value = p.solution.html || "";
    peditors.css.value = p.solution.css || "";
    peditors.js.value = p.solution.js || "";
    runPracticePreview();
    const btn = $("#pSolutionBtn");
    btn.textContent = "✓ 정답 적용됨";
    setTimeout(() => { btn.textContent = "💡 정답 보기"; }, 1500);
  });
  setupProblemModal();
}

/* ---- 새 문제 만들기 ---- */
function setupProblemModal() {
  const modal = $("#problemModal");
  const open = () => { modal.classList.add("is-open"); };
  const close = () => { modal.classList.remove("is-open"); };
  $("#addProblemBtn").addEventListener("click", open);
  $("#problemModalClose").addEventListener("click", close);
  $("#problemCancel").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });

  $("#problemSave").addEventListener("click", () => {
    const title = $("#np-title").value.trim();
    if (!title) { $("#np-title").focus(); $("#np-title").style.borderColor = "#d9583f"; return; }
    const prob = {
      id: "u-" + Date.now(),
      lang: $("#np-lang").value,
      title,
      goal: $("#np-goal").value.trim(),
      mission: $("#np-mission").value.trim(),
      hint: $("#np-hint").value.trim(),
      starter: { html: $("#np-s-html").value, css: $("#np-s-css").value, js: $("#np-s-js").value },
      solution: { html: $("#np-a-html").value, css: $("#np-a-css").value, js: $("#np-a-js").value }
    };
    userProblems.push(prob);
    saveUserProblems();
    // 폼 초기화
    ["np-title","np-goal","np-mission","np-hint","np-s-html","np-s-css","np-s-js","np-a-html","np-a-css","np-a-js"].forEach(id => $("#"+id).value = "");
    $("#np-title").style.borderColor = "";
    close();
    // 새 문제로 필터 맞추고 이동
    if (pFilter !== "all" && pFilter !== prob.lang) {
      pFilter = "all";
      document.querySelectorAll("#practiceFilter .pf-btn").forEach(x => x.classList.toggle("is-active", x.dataset.filter === "all"));
    }
    buildPracticeList();
    loadProblem(prob.id);
  });
}

/* 8.7) 메모장 */
function setupMemo() {
  const pad = $("#memoPad");
  const head = $("#memoHead");
  const ta = $("#memoText");
  const toggle = $("#memoToggle");

  // 내용 복원
  ta.value = localStorage.getItem("codenote-memo-text") || "";
  // 위치 복원
  const pos = JSON.parse(localStorage.getItem("codenote-memo-pos") || "null");
  if (pos) { pad.style.left = pos.x + "px"; pad.style.top = pos.y + "px"; }
  // 열림 상태 복원 (단, 학습 페이지 진입 전까지는 숨김)
  if (localStorage.getItem("codenote-memo-open") === "1") { pad.classList.add("is-open"); toggle.classList.add("is-active"); }
  pad.classList.add("memo-hidden");

  // 토글
  toggle.addEventListener("click", () => {
    const open = pad.classList.toggle("is-open");
    toggle.classList.toggle("is-active", open);
    localStorage.setItem("codenote-memo-open", open ? "1" : "0");
  });
  $("#memoClose").addEventListener("click", () => {
    pad.classList.remove("is-open");
    toggle.classList.remove("is-active");
    localStorage.setItem("codenote-memo-open", "0");
  });

  // 내용 저장
  ta.addEventListener("input", () => {
    localStorage.setItem("codenote-memo-text", ta.value);
  });

  // 복사
  $("#memoCopy").addEventListener("click", () => {
    const btn = $("#memoCopy");
    const done = () => { btn.textContent = "✓"; btn.classList.add("is-ok"); setTimeout(() => { btn.textContent = "📋"; btn.classList.remove("is-ok"); }, 1200); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ta.value).then(done).catch(() => fallbackCopy(ta.value, done));
    else fallbackCopy(ta.value, done);
  });

  // 드래그 이동
  let dragging = false, offX = 0, offY = 0;
  const startDrag = (e) => {
    if (e.target.classList.contains("memo-btn")) return;
    dragging = true;
    const r = pad.getBoundingClientRect();
    const pt = e.touches ? e.touches[0] : e;
    offX = pt.clientX - r.left; offY = pt.clientY - r.top;
    document.body.style.userSelect = "none";
  };
  const onDrag = (e) => {
    if (!dragging) return;
    const pt = e.touches ? e.touches[0] : e;
    let x = pt.clientX - offX, y = pt.clientY - offY;
    x = Math.max(4, Math.min(window.innerWidth - pad.offsetWidth - 4, x));
    y = Math.max(4, Math.min(window.innerHeight - 44, y));
    pad.style.left = x + "px"; pad.style.top = y + "px";
  };
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.userSelect = "";
    const r = pad.getBoundingClientRect();
    localStorage.setItem("codenote-memo-pos", JSON.stringify({ x: Math.round(r.left), y: Math.round(r.top) }));
  };
  head.addEventListener("mousedown", startDrag);
  head.addEventListener("touchstart", startDrag, { passive: true });
  window.addEventListener("mousemove", onDrag);
  window.addEventListener("touchmove", onDrag, { passive: true });
  window.addEventListener("mouseup", endDrag);
  window.addEventListener("touchend", endDrag);
}

/* 9) 초기화 */
/* 랜딩 스크롤 스윙 애니메이션 */
function setupLandingAnimation() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const selectors = ['.story--brand', '.story--intent', '.story--how'];

  selectors.forEach((sel, i) => {
    const section = document.querySelector(sel);
    if (!section) return;
    const inner = section.querySelector('.story-inner');
    if (!inner) return;

    gsap.set(inner, { rotation: 30, transformOrigin: 'bottom left' });

    gsap.to(inner, {
      rotation: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scroller: viewLanding,
        start: 'top bottom',
        end: 'top 25%',
        scrub: true,
      },
    });
  });

  ScrollTrigger.refresh();
}

function init() {
  buildLanding();
  setupReveal();
  setupTweaks();
  setupLandingAnimation();

  $("#homeBtn").addEventListener("click", goHome);
  $("#copyBtn").addEventListener("click", () => copyCode($("#copyBtn"), editors));
  $("#resetBtn").addEventListener("click", () => {
    const c = COURSES[current];
    const activeLi = document.querySelector(".toc-item.is-active");
    const sec = c.sections.find(s => s.id === activeLi?.dataset.target) || c.sections[0];
    loadExample(sec);
  });
  $("#ctaTop").addEventListener("click", () => viewLanding.scrollTo({ top: 0, behavior: "smooth" }));
  setupPractice();
  setupMemo();

  // 리사이즈 핸들: 에디터·미리보기·메모장
  makeResizable($(".learn-right .editor-pane"), { minW: 280, minH: 140, maxW: () => $(".learn-right").clientWidth, maxH: () => ($(".learn-right").clientHeight || 800) - 156 });
  makeResizable($(".learn-right .preview-pane"), { minW: 280, minH: 140, maxW: () => $(".learn-right").clientWidth, maxH: () => ($(".learn-right").clientHeight || 800) - 156 });
  makeResizable($("#view-practice .editor-pane"), { minW: 280, minH: 140, maxW: () => document.querySelector("#view-practice .learn-right").clientWidth, maxH: () => (document.querySelector("#view-practice .learn-right").clientHeight || 800) - 156 });
  makeResizable($("#view-practice .preview-pane"), { minW: 280, minH: 140, maxW: () => document.querySelector("#view-practice .learn-right").clientWidth, maxH: () => (document.querySelector("#view-practice .learn-right").clientHeight || 800) - 156 });
  makeResizable($("#memoPad"), { minW: 220, minH: 180, maxW: () => window.innerWidth * 0.9, maxH: () => window.innerHeight * 0.85 });
  makeResizable($("#contentBox"), {
    minW: 280, minH: 220,
    widthTarget: () => document.querySelector(".view--learn .learn-left"),
    maxW: () => { const b = document.querySelector(".view--learn .learn-body"); return b ? b.clientWidth - 32 - 16 - 380 : 800; },
    maxH: () => (document.querySelector(".view--learn .learn-left") || {}).clientHeight || 800
  });
  makeResizable($("#practiceBox"), {
    minW: 280, minH: 220,
    widthTarget: () => document.querySelector("#view-practice .learn-left"),
    maxW: () => { const b = document.querySelector("#view-practice .learn-body"); return b ? b.clientWidth - 32 - 16 - 380 : 800; },
    maxH: () => (document.querySelector("#view-practice .learn-left") || {}).clientHeight || 800
  });

  document.querySelectorAll(".editor-tabs:not(#practiceTabs) .etab").forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  Object.values(editors).forEach(ta => ta.addEventListener("input", scheduleRun));

  let tick = false;
  contentScroll.addEventListener("scroll", () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => { tick = false; });
    updateActive();
  });
}
document.addEventListener("DOMContentLoaded", init);
