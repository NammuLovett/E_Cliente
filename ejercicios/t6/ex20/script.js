let atributos = document.querySelector('input').attributes;
for (let atr of atributos) {
  console.log(`El atributo ${atr.name} tiene como valor:${atr.value}`);
}
