import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useState } from 'react';
import styled from 'styled-components';
import { uiActions } from '../store/reducers/uiSlice';



function Form(){
  
    const [value, setValue] = useState('');
    const [pass, setPass]=useState('')
   
    const state = useSelector(state=> state.ui.isLoaded) 
    const dispatch = useDispatch()
  
    const emailValid = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const emailValid2 = emailValid.test(value) 
    const passValid = pass.trim().length > 5
    const provValid = passValid && emailValid2
  
    const a = emailValid2 ? 'nored' : 'red'
    const b = passValid ? 'nored' : 'red'
  
    if(provValid){
      dispatch(uiActions.valid())
    }
  
  
    const onSubmit = (event) => {
      event.preventDefault();
    
      dispatch(
        uiActions.toggle({	test: value,  pass: pass})
      );
      dispatch(uiActions.spiner())

        setTimeout(()=>{
            dispatch(uiActions.isValid())
            dispatch(uiActions.noSpiner())
            setValue("");
            setPass("")
        },2000)


        let obj = JSON.parse(localStorage.getItem("todos")) || [];
        const data = {
          pass,
          value
        }
        obj.push(data)

        localStorage.setItem('todos', JSON.stringify(obj))
                
     
      };

    return (
        <div>
        <Container>
        
        <label>Email</label>
        <input type='email' placeholder='Email' className={a} value={value} onChange={(event) => setValue(event.target.value)}></input>
        <label>Password</label>
        <input placeholder='Password' className={b} value={pass} onChange={(event) => setPass(event.target.value)}></input>
        <button disabled={!state} onClick={onSubmit}>Login</button>
        </Container>
        </div>
    )
}

const Container = styled.div`
  width: 640px;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px ;
 

  & input{
    width: 580px;
    margin-top: 10px;
    padding: 16px;
    background-color: rgb(207, 206, 226);
    border-radius: 10px;
    border: 1px solid blue;
  }
  & label {
    margin-top: 20px;
    color: black;
    font-size: 20px;
    font-weight: 700;
  }
  & button {
    width: 180px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    margin: 20px 0 20px 0;
    padding: 10px;
    background-color: beige;
    cursor: pointer;
  }
  .red{

    border: 2px solid rgb(218, 110, 91);
  }
  .red button{
    background-color: red;
  }

`

export default Form