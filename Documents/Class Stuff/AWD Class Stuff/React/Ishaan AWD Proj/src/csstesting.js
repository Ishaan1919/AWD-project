// import './App.css';
import './index.css'

function CssTesting() {
    return (
     <>
      <h1>Hello World!</h1>
      <div className='d1' style={{color:"lightblue",textAlign:"center",fontSize:"200%",fontFamily:"fantasy"}}>
        This is an example of inline css using style tag
      </div>
      <br></br><br></br>
      <div className='d2'>
        This is an example of external css using index.css
      </div>
     </>
    );
  }
  
  export default CssTesting;
  
  