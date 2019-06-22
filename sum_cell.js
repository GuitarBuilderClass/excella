function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += Number(arr[i].value);
    }
    return total
}

function sumValues(n, m) {
    /*
    (n行, m列)の要素が変更されたとき、n行目の合計値とm行目の合計値および合計が動的に変更される
     */
    const rowClass = "row-" + n;
    const colClass = "col-" + m;

    let rowValues = document.getElementsByClassName(rowClass);
    document.getElementById("sum-" + rowClass).innerText = sum(rowValues);

    let colValues = document.getElementsByClassName(colClass);
    document.getElementById("sum-" + colClass).innerText = sum(colValues);

    // TODO: row, col と処理をまとめるリファクタリング
    // inputタグとdivタグでは配列の構成が違うため、.value ではなく.innerText で値を取得している
    let totalValue = document.getElementsByClassName("sum-col");
    let total = 0;
    for (let i = 0; i < totalValue.length; i++) {
        total += Number(totalValue[i].innerText);
    }
    document.getElementById("total").innerText = total;
}
