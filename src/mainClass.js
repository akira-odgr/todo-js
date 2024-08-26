import "./style.scss";

class TodoApp {
    constructor() {
        this.incompleteList = document.getElementById("incomplete-list");
        this.completeList = document.getElementById("complete-list");
        this.addButton = document.getElementById("add-button");
        this.addButton.addEventListener("click", () => this.onClickAdd());
        document.getElementById("add-text").value = "";
    }

    onClickAdd() {
        const inputText = document.getElementById("add-text").value;
        document.getElementById("add-text").value = "";
        this.createIncompleteTodo(inputText);
    }

    createButton(text, onClick) {
        const button = document.createElement("button");
        button.innerText = text;
        button.addEventListener("click", onClick);
        return button;
    }

    createIncompleteTodo(todo) {
        const li = document.createElement("li");
        const div1 = document.createElement("div");
        div1.className = "list-row";

        const p = document.createElement("p");
        p.className = "todo-item";
        p.innerText = todo;

        const completeButton = this.createButton("完了", () =>
            this.completeTask(li, p)
        );

        const deleteButton = this.createButton("削除", () =>
            this.deleteTask(li)
        );

        const div2 = document.createElement("div");
        div2.appendChild(completeButton);
        div2.appendChild(deleteButton);

        div1.appendChild(p);
        div1.appendChild(div2);
        li.appendChild(div1);

        this.incompleteList.appendChild(li);
    }

    completeTask(li, p) {
        const div1 = li.querySelector(".list-row");
        div1.innerHTML = ""; // div1内の全要素を削除
        div1.appendChild(p); // pタグを再追加

        const backButton = this.createButton("戻す", () =>
            this.undoTask(li, p.innerText)
        );
        div1.appendChild(backButton);

        this.completeList.appendChild(li);
    }

    deleteTask(li) {
        this.incompleteList.removeChild(li);
    }

    undoTask(li, todoText) {
        this.createIncompleteTodo(todoText);
        this.completeList.removeChild(li);
    }
}

const todoApp = new TodoApp();
