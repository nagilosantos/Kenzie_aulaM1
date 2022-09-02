let aluno1 = (prompt("digite o Nome do Aluno"));
if(aluno1.length >= 5){
    let materia1 = "Matematica"; //(prompt(`digite a matéria de ${aluno1}`));
    let presenca1 = ((prompt(`digite a presença de ${aluno1} para ${materia1}`)));
    let nota1 = ((prompt(`digite a nota de ${aluno1} para ${materia1}`)));
    if(parseInt(presenca1) <= 0 || parseFloat(nota1) <= 0){
        console.log("Reprovado")
        alert(`${aluno1} reprovado direto`);
    } else if (parseInt(presenca1) > 10 || parseFloat(nota1) > 10) {
        alert(`Dados invalidos`);
    }
    let materia2 = "Historia";//(prompt(`digite a matéria de ${aluno1}`));
    let presenca2 = ((prompt(`digite a presença de ${aluno1} para ${materia2}`)));
    let nota2 = ((prompt(`digite a nota de ${aluno1} para ${materia2}`)));
    if(parseInt(presenca2) <= 0 || parseFloat(nota2) <= 0){
        console.log("Reprovado")
        alert(`${aluno1} reprovado direto`);
    } else if (parseInt(presenca2) > 10 || parseFloat(nota2) > 10) {
        alert(`Dados invalidos`);

    }
    let materia3 = "Portugues"//(prompt(`digite a matéria de ${aluno1}`));
    let presenca3 = ((prompt(`digite a presença de ${aluno1} para ${materia3}`)));
    let nota3 = ((prompt(`digite a nota de ${aluno1} para ${materia3}`)));
    if(parseInt(presenca3) <= 0 || parseFloat(nota3) <= 0){
        console.log("Reprovado")
        alert(`${aluno1} reprovado direto`);
    } else if (parseInt(presenca3) > 10 || parseFloat(nota3) > 10) {
        alert(`Dados invalidos`);
    }
    let materia4 = "Informatica";//(prompt(`digite a matéria de ${aluno1}`));
    let presenca4 = ((prompt(`digite a presença de ${aluno1} para ${materia4}`)));
    let nota4 = ((prompt(`digite a nota de ${aluno1} para ${materia4}`)));
    if(parseInt(presenca4) <= 0 || parseFloat(nota4) <= 0){
        console.log("Reprovado");
        alert(`${aluno1} reprovado direto`);
    } else if (parseInt(presenca4) > 10 || parseFloat(nota4) > 10) {
        alert(`Dados invalidos`);
    }
    
    let resultadoMediaNota = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota4) + parseFloat(nota3))/4;
    let resultadoMediaPresenca = (parseInt(presenca1) + parseInt(presenca2) + parseInt(presenca3) +parseInt(presenca4))/4;

    if(resultadoMediaNota >= 8 && resultadoMediaPresenca >= 6) {
        alert(`A nota do aluno ${aluno1} é de ${resultadoMediaNota} e sua presença de ${resultadoMediaPresenca}: Aluno Aprovado!`);
    }else{
       alert(`A nota do aluno ${aluno1} é de ${resultadoMediaNota} e sua presença de ${resultadoMediaPresenca}: Aluno reprovado!`); 
    }
}else{
    alert("Nome Precisa Conter 5 letras!")
}


//let materia = (prompt(`digite a matéria do ${aluno}`));
//let presença = (pasetInt(prompt(`digite a presença do ${aluno}`)));


