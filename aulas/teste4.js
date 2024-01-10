class Cursos{
    static cursos=["javaScript","HTML","CSS", "Ardumuo","C++","C#"]

    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getTodosCursos=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCurso=()=>{
        this.Cursos=[]
    }
}

export default Cursos
