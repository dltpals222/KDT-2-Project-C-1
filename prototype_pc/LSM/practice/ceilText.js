const selectOptionArr = {
  parent: "dSOp",
  title: ["재료", "기피재료", "국가 카테고리", "나머지"],
  dOA: [
    ["고블린의 심장", "고양이의 털", "벼락맞은 복숭아 나뭇가지", "용의 꼬리"],
    ["오거의 털", "가고일의 꼬리", "바위골렘의 핵"],
    ["한식", "일식", "중식", "양식"],
    ["실험", "그냥", "입력", "해보는", "거다", "추가", "사항", "넣어", "보자"],
  ],
};

const a = Math.ceil(selectOptionArr.title.length / 2);

console.log(a);
