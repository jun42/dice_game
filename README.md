# dice_game

# 프로젝트 명

주사위 게임

# 프로젝트 설명

번갈아 가면서 주사위를 던지는 게임입니다. 먼저 누적 점수 50점을 만들면 이깁니다.

주사위를 던졌을 때 숫자가 나오면 1,2는 본인 현재 점수 초기화 후 턴 변경, 3에서 6은 현재 점수에 나온 주사위 숫자를 더한다. 이후에 홀드 하고 현재 점수를 누적 점수에 더할지, 계속 주사위를 던질지 선택한다.

# 레퍼런스

https://pig-game-v2.netlify.app/

# 디렉토리 구조

- index.html

<body>
    <!-- html 코드는 여기에 입력하고 아래에 script.js 파일을 삽입합니다 -->
  <script src="script.js"></script>
</body>

- style.css
- script.js


후기:

### HTML구조가 많은 것을 결정한다.

기존에 클론코딩을 하면서 고려한 점은 '모양'을 카피하는 것이었다. 고민도 그 정도 수준이었다. 어떻게 배치할 것인가에 대한 고민. css를 고려한 HTML을 만든 것이었다. 하지만 단순한 게임일지라도 자바스크립트로 하나하나 DOM 조작을 하다보니 자바스크립트로 만들어지는 로직이  html구조에 종속적이라는 사실을 느낄 수 있었다.  

예를 들어, 플레이어의 차례가 바뀌면서 적용되는 css를 바꿔줘야 하는데, 나는 player클래스 요소를 받아서 classList에 player--turn 클래스를 toggle 하는 방식을 취했다. player 하위 요소에도 자연스럽게 적용되기를 기대한 것이다. 하지만 초기에 만든 html 구조는 current score와 버튼들을 분리된 nav로 묶었기에 적용되지 않았고 html 구조를 바꿨다. 초기에 바로 달려들지 않고 로직을 고려한 설계를 했으면 이런 실수를 줄일 수 있지 않았을까?


### OOP가 뭔진 잘 모르겠지만

하나하나 필요한 정보들을 자바스크립트로 만들다가 로직이 꼬였다. hold버튼을 계속 누르면 점수가 계속 올라가고, 턴도 잘 안넘어간다 어느 순간부터. 다 지우고 플레이어 정보를 객체로 만들어서 관리했다. 직관적이라서 관리하기가 너무 편했다. oop가 뭔진 잘 모르겠지만 추상화의 강력함이라는 것은 이런게 아닐까.

### BEM 방법론: 어떤 메모리를 쓸 것인가?

BEM 방법론. CSS를 표기하는 방식이다. first-block__first-element--modifier 처럼 표기한다. 처음 배우는 입장에서 이런 방식의 가장 큰 어려움은 귀찮다는 것이다. 이 프로젝트는 연습이고 과제고 왠지 나만 볼 것 같은데, 돌아만가면 되는 거 아닌가? 이름 짓기도 어렵다. 그래서 그냥 마음대로 이름을 지었다. 그리고 완성했고 잘 돌아갔다. 

이제 공부를 위해서 하나하나 이름을 바꿔주기 시작했다. 처음에는 역시 귀찮았다. 이건 단순 반복아닌가? 하지만 바뀌는 코드를 보면서 흥미로운 점을 하나 발견했다. 코드를 작성하고 읽으면서 계속 참조했던 것은 내 머릿속 어딘가에 자리잡은 전체 코드의 구조였다. 기억에 의존하고 부족한 부분은 다시 되돌아가서 html이름을 확인하고 다시 css로 돌아가서 맞나 확인하고. 이러한 방식의 반복. 

그런데 BEM으로 작성하면서 머릿속에 설계도가 눈앞에 구현된다고 느꼈다. 맞다. 이건 일종의 지도였다. 이걸 통해서 내 머리의 메모리를 조금 더 필요한 부분에 할당할 수 있다. 메모리 부족에 시달리는 나를 위한 외부 저장소. 그리고 협업을 한다면 이런 종류의 방법론은 필수가 아닐까라는 생각이 든다. 

물론 협업의 대상은 미래의 나를 포함한다.

​

### 더 알아볼것

완벽한 설계는 존재하지 않겠지만, 어떻게 할까..?

리팩토링. 

JavaScript 스코프와 실행컨텍스트
