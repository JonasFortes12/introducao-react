

const Welcome = ({nome}) => {
    const weekday = new Date().toLocaleDateString('pt-BR', {weekday: 'long'})
    return(
        <div>
            <h2>Bem-vindo, {nome} !</h2>
            <p>Hoje é {weekday}</p>
        </div>
    )
}

export default Welcome