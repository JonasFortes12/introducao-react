

export default function ToDoList() {

    //Requisição para o Back-end
    const tasks = [
        {id: 1, text: 'Aprender React'}, //0
        {id: 2, text: 'Construir um projeto'}, //1
        {id: 3, text: 'Publicar no GitHub'},
        {id: 4, text: 'Publicar no LinkedIn'},
        {id: 5, text: 'Publicar no LinkedIn'},
        {id: 6, text: 'Publicar no LinkedIn'}
    ]

    return(
        <div>
            <h2>Lista de tarefas</h2>

            <ul>
                {
                    tasks.map((task)=>{
                       return(<li key={task.id}>{task.text}</li>) 
                    })
                }

            </ul>



        </div>
    )



}