
function Todo ({title, title2, title3, title4, isDone}) {
    return (
        <div>
         <h1 className="h1">{title}</h1>
         <h2 className="h2">{title2}</h2>
         <h3 className="h3">{title3}</h3>
         <h4 className="h4">{title4}</h4>
         <p>{isDone}</p>
        </div>
    )
    
}

export default Todo;