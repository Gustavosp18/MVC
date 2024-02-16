document.getElementById('calculoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const catetoA = parseFloat(document.getElementById('catetoA').value);
    const catetoB = parseFloat(document.getElementById('catetoB').value);
    const resultado = Math.sqrt(catetoA ** 2 + catetoB ** 2);
    window.location.href = `resultado.html?resultado=${resultado}`;
});