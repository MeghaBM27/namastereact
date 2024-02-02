import { useRouteError } from "react-router-dom";


const Error =()=>{
    const err =useRouteError();
    console.log(useRouteError(),"error details")
    return(
        <div>
            <h2>oops!!!</h2>
            <h1>{err.data}</h1>
        </div>
    )
}

export default Error;