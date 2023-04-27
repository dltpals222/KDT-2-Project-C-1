import { program } from "commander";

const app = program.command("kdt");
app.action(() => {
  console.log("내가 만든 명령어!");
});

const app2 = program.command("add <a> <b>");
app2.action((a, b) => {
  const result = Number(a) + Number(b);
  console.log(`${a}+${b} = ${result}`);
});

const app3 = program.command("yachae <a>");

app3.action((a) => {
  const tmpArray = ["가지", "오이", "애호박", "바나나", "당근"];
  if (a - 1 > tmpArray.length) {
    console.log(
      `${a}번째 인덱스는 없습니다. 배열은 ${tmpArray.length}개가 최대입니다.`
    );
  } else {
    for (let i = 0; i < tmpArray.length; i++) {
      if (tmpArray[i] === tmpArray[Number(a - 1)]) {
        console.log(tmpArray.length);
        console.log(`선택한 번호의 야채는? ${tmpArray[i]}`);
      }
    }
  }
});

const app4 = program.command("num <a> <b>");
app4.action((a, b) => {
  console.log(`입력된 값은 ${a} ${b}`);
});
app4.option(-a, --add);

program.parse(process.argv);
