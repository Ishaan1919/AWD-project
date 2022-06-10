function Hook(){
    const [count, setcount] = useState(1);
    const [color, setcolor] = useState("red");
    const changeCount = () => {
    setcount (count + 1) ;
    };
    return (
    <div className="App">
    <header className="App-header">
    <p>Hello world from App. js</p>
    <button onClick={changeCount}>Click me</button>
    <h2>ount: {count}</h2>
    <h2>favorite color is {color}</h2>
    <button onClick={() => setcolor ("blue" )}>Blue</button>
    <button onClick={() => setcolor ("yellow")}>Yellow</button>
    <button onclick={() => setcolor ("green") } >Green</button>
    <button onclick={() => setcolor ("red")} >Red</button>
    </header>
    </div>
    );
    }
    export default Hook;