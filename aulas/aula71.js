const btn_imp = document.getElementById("btn_imp");

btn_imp.addEventListener("click", (evt) => {
    const conteudo = document.getElementById('tabela').innerHTML;

    let estilo = "<style>";
    estilo += "table {width: 100%; font-family: 'Calibri', sans-serif; font-size: 25px;}"
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;}"
    estilo += "</style>";

    const win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>CBF Cursos</title>');
    win.document.write(estilo);
    win.document.write('</head><body>');
    win.document.write(conteudo);
    win.document.write('</body></html>');
    
    win.print();
});
