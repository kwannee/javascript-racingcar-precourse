<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임 기능 목록</h1>

## 🎯 구현 기능 목록

- [x] index.html에 id값 설정
- [x] Car 객체를 정의한다.
- [x] 유저가 자동차 이름 입력 창에 이름을 입력하고 확인 버튼을 누르면 자동차 이름들을 입력 받는다.
  - [x] 이름이 5자 이하이면 alert을 띄워 다시 입력할 수 있게 한다.
- [x] 입력 받은 자동차 이름들로 Car 객체 생성하고 저장하기
- [x] 유저가 레이싱 횟수 입력 창에 숫자를 입력하고 확인 버튼을 누르면 레이싱 횟수를 입력 받는다.
  - [x] 자동차 이름을 입력 받지 않은 경우라면 alert을 띄워 자동차 이름을 입력 받도록 한다.
  - [x] 숫자가 아닐 경우 alert을 띄워 다시 입력할 수 있게 한다.
- [x] 유저가 레이싱 입력 확인 버튼을 누르면 입련된 레이싱 횟수만큼 레이싱을 한다.
- [x] 매 레이싱마다의 결과를 저장한다.
- [x] 레이싱이 끝나면 결과를 출력한다.
- [x] 레이싱이 끝나면 최종 우승자를 찾는다.
- [x] 최종 우승자를 <span id="racing-winners">에 담아서 출력한다.

```
.
src
┣ controllers
┃ ┗ MainController.js
┣ models
┃ ┣ Car.js
┃ ┗ CarsModel.js
┣ utils
┃ ┣ constants.js
┃ ┣ dom.js
┃ ┗ validation.js
┣ views
┃ ┣ CarNameFormView.js
┃ ┣ RacingCountFormView.js
┃ ┣ ResultView.js
┃ ┣ WinnerView.js
┃ ┗ View.js
┗ index.js

```
