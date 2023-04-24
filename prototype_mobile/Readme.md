#프로토타입-모바일 버전 제작 규칙
1. 모든 태그는 div로 설정
2. 폴더, 파일 snake 방식
3. 변수, 함수 camel 방식
4. id, class 케밥방식(K-pop아님)
5. id의 bth은 마지막에 붙이기(xxxXxxXxxBtn id명 (예시))
6. prototype -m의 하위 폴더는 page별 추가생성.
7. 파일 이름 
    a. root 폴더 : prototype_mobile
        i. common : 공통 레이아웃(헤더)
        ii. recipe_list : 레시피 리스트
        iii. recipe_write : 레시피 등록
        iv. recipe_view : 레시피 뷰
     b. index.html : 메인 페이지
     c. app.js : 정적 라우팅서버
8. 제작과정에서 함수를 모듈화시켜, 별도의 파일로 관리시 모듈파일은 root/module로 저장 할 것
