import { uiActions } from "../store/reducers/uiSlice"
import { useDispatch, useSelector } from "react-redux/es/exports"
import styled from "styled-components"


function ButComp(){
    const dispatch = useDispatch()

    function subHand(){
        dispatch(uiActions.noValid())
        dispatch(uiActions.spiner())

        setTimeout(()=>{
            dispatch(uiActions.noIsValid())
            dispatch(uiActions.noSpiner())
        },2000)
    }

    return <Cont>
        <button onClick={subHand}>GO OUT</button>
    </Cont>
}

const Cont = styled.div`
    background-color: yellow;

    & button{
        width: 200px;
        background-color: brown;
        color: white;
        font-size: 24px;
        padding: 10px;
        margin: 40px 0px 40px 0px;
        cursor: pointer;
    }
`
export default ButComp