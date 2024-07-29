function tabuada() {
  let num = Number(document.querySelector("input#txtnum").value);
  let tab = document.querySelector("select#txtres");

  if (num == "") {
    alert("[ERRO] Digite um número!");
    return;
  }
  tab.innerHTML = "";
  for (let mult = 1; mult <= 10; mult++) {
    let item = document.createElement("option");
    item.text = `${num} X ${mult} = ${mult * num}`;
    item.value = `tab${c}`;
    tab.appendChild(item);
  }
}
