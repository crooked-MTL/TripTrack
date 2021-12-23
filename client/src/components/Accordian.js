import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {FiChevronRight} from "react-icons/fi"
import Preferences from './Preferences';
import { DateRangePicker } from 'rsuite';
import SearchBar from './SearchBar';

const Accordian = () => {

    const [toggle, setToggle] = useState(false);
    const [heightElement, setHeightElement]=useState();
    const refHeight = useRef();
    const [startDate, setStartDate] = useState(new Date().toISOString().substr(0,10));
    const [finishDate, setFinishDate] = useState(new Date().toISOString().substr(0,10));

    useEffect(()=>{
        setHeightElement(`${refHeight.current.scrollHeight}px`)
    }, [])

const toggleState = () => {
    setToggle(!toggle)
}

const toggleStartDate = (event) => {
    console.log(event.target.value);
    setStartDate(event.target.value)
}
const toggleEndDate = (event) => {
    console.log(event.target.value);
    setFinishDate(event.target.value)
}
const toggleCity = (event) => {
    console.log(event.target.value);
}
const panTo = React.useCallback(({lat,lng})=>{
    mapRef.current.panTo({lat,lng});
    mapRef.current.setZoom(10);
    }, [])

    const mapRef=React.useRef();
    return (
        <AccordianDiv>
        
            <AccordianVisible onClick={toggleState}>

                <FiChevronRight style={{transform: toggle ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .2s ease-in-out" }} />
            </AccordianVisible>   
        
        {toggle ? 
        <>
        <Animated ref={refHeight} style={{height:`${heightElement}`}}>

            <form onSubmit={toggleStartDate}>

                <SearchBar panTo={panTo}/>

                <input type="date" value={startDate} style={{fontSize:"18px"}} onChange={toggleStartDate}></input> 

                <input type="date" value={finishDate} style={{fontSize:"18px"}} onChange={toggleEndDate}></input>           

            </form>
            
        </Animated> 

        <Animated ref={refHeight} style={{height:`${heightElement}`}}>
            <input placeholder={"Hotel Address"} type="text" style={{fontSize:"18px"}}></input>
        </Animated> 
        
        <Animated ref={refHeight} style={{height:`${heightElement}`}}>
            <Preferences />
        </Animated> 
        
        </>
        : 
        <AccordianToggle ref={refHeight} style={{height:"0px"}}>
            <p>Lorem Ipsumd Lorem Ipsumd Lorem Ipsumd Lorem Ipsumd  </p>
        </AccordianToggle>        
        }
        
        </AccordianDiv>
    );
};

const AccordianDiv=styled.div`
margin: 0 auto;
border-radius: 3px;
background: #f1f1f1;
`;

const AccordianVisible=styled.button`
background: var(--color-highlight-aqua);
border-bottom: 4px solid var(--color-banner-blue);
border-top:none;
width: 100%;
color:#fff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 7px 15px;
`;

const AccordianToggle=styled.div`
height:0px;
font-size: 18px;
opacity: 0;
transition: opacity .3s ease-in-out, height .3s .3s ease-in-out;
color: #333;
`;

const Animated=styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
min-height: 150px;
font-size: 18px;
opacity: 1;
transition: height .3s ease-in-out, opacity .3s .3s ease-in-out;
color: #333;
border-bottom: 4px solid var(--color-banner-blue);
`;

export default Accordian;