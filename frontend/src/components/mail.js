const mail =()=>{
    const [formState,setFormState]=useState({});

const changeHandler = (event)=>{
    setFormState({...formState,[event.target.name]: event.target.value});
}

    return(
        <div>
            <h1>Sample Email</h1>
            <form>
                Name : <input type="text" name = "name" value="" onChange={changeHandler}/> 
                <br></br>
                Email :<input type="email" name = "email" value="" onChange={changeHandler}/>
                <input type="Submit" value="Send Email"/>
            </form>
        </div>
    );
};

export default mail;