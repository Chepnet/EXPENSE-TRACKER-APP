 function LoginForm(props)
 {
    const shoot= (a) =>{
        <h1>I am here on test ground</h1>
        alert(a)
    }
    return(
        <div>
            <img src="" alt="Company logo" />
            <form action="">
                <label htmlFor="Firstname ">Enter your name     </label>
            <input type="text" value={props.name} /><br/>
            <label htmlFor="Email Address">Email Address    </label>
            <input type="text" value={props.email}/>
            <button onClick={test()} >LOGIN</button>
            <button onClick={()=>shoot("Goal!!!")}>TAKE THE SHOT</button>
            <h3>I am {props.name}</h3>
            </form>
        </div>
    )
 }
 function test()
 {
    
 }
 export default LoginForm