
function Counter(){

    let quatity = 10;

    function upQuantity(){
        quatity += 1;
        document.getElementById('counter-box').innerHTML = quatity;
    }

    return (
        <>
            <h1 id="counter-box">{quatity}</h1>
            <button onClick={upQuantity}>
                Aumentar
            </button>
        </>
    )
}

export default Counter;