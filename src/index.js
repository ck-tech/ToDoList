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
  completeButton.addEventListener("click", () => {
    // クリックされた完了ボタンの親要素（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了したTODOに追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      alert("戻す");
    });
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div);
  });

  // buttom (削除) タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // クリックされた削除ボタンの親要素（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
