import "./styles.css";
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttom (完了) タグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // buttom (削除) タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //alert(inputText);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
