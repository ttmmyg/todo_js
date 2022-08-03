const onClickAdd = () => {
    const inputText = document.getElementById('add-txt').value;
    document.getElementById('add-txt').value = "";

    createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {

    //div生成
    const div = document.createElement('div');
    div.className = 'list-low';

    //li生成
    const li = document.createElement('li');
    li.innerText = text;
    
    //button（完了）タグ生成
    const completeBtn = document.createElement('button');
    completeBtn.innerText = '完了';
    completeBtn.addEventListener('click', () => {

        //押された完了ボタンの親タグ(div)を未完了リストから削除
        deleteFromIncompleteList(completeBtn.parentNode);

        //完了したリストに追加する要素
        const addTarget = completeBtn.parentNode;

        //TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;

        //div以下を初期化
        addTarget.textContent = null;

        //liタグの生成
        const li = document.createElement('li');
        li.innerText = text;
        
        //buttonタグの生成
        const backBtn = document.createElement('button');
        backBtn.innerText = '戻す';
        backBtn.addEventListener('click', () => {

            //押された戻すボタンの親タグ(div)を完了リストから削除
            const deleteTarget = backBtn.parentNode;
            document.getElementById('complete-list').removeChild(deleteTarget);

            //テキストを取得
            const text = backBtn.parentNode.firstChild.innerText;
            createIncompleteList(text);
            

        });

        //divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backBtn);

        //完了リストに追加
        document.getElementById('complete-list').appendChild(addTarget);

    });


    //button（削除）タグ生成
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '削除';
    deleteBtn.addEventListener('click', () => {

        //押された削除ボタンの親タグ(div)を未完了リストから削除
        deleteFromIncompleteList(deleteBtn.parentNode);

    });


    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    //未完了リスト追加
    document.getElementById('incomplete-list').appendChild(div);
}

document.getElementById('add-btn').addEventListener('click', () => { onClickAdd() });