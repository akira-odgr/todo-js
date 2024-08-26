import "./style.scss";

const addButton = document.getElementById("add-button");
const incompleteList = document.getElementById("incomplete-list");
document.getElementById("add-text").value = "";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
    const li = document.createElement("li");
    const div1 = document.createElement("div");
    div1.className = "list-row";

    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");
        div1.innerHTML = ""; // div1内の全要素を削除
        div1.appendChild(p); // pタグを再追加
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            backButton.closest("li").remove();
        });
        div1.appendChild(backButton);
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li");
        incompleteList.removeChild(deleteTarget);
    });

    const div2 = document.createElement("div");
    div2.appendChild(completeButton);
    div2.appendChild(deleteButton);

    div1.appendChild(p);
    div1.appendChild(div2);
    li.appendChild(div1);

    incompleteList.appendChild(li);
};

addButton.addEventListener("click", onClickAdd);
