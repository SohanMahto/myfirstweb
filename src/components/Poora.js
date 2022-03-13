import React, { useState } from 'react'
import '../App.css';

export default function Poora(props) {
    const [text, setText] = useState('')
    let Style = {

    }
    if (props.mode === "dark") {
        Style = {
            backgroundColor: "#5f6266"
        }
    }
    else {
        Style = {
            backgroundColor: "white"
        }


    }
    const changefunc = (event) => {
        setText(event.target.value)
        console.log("chal rha hai change")
    }
    const upchange = () => {
        console.log("up chal rha hai change")
        setText(text.toUpperCase())
        if(text.length===0){
            props.showmsg("Kuch Likh to Shi !")

        }
        else{

            props.showmsg("Converted to UpperCase Successfully !")
        }
    }
    const lochange = () => {
        console.log("up chal rha hai change")
        // setText(text.toUpperCase())
        setText(text.toLowerCase())
        if(text.length===0){
            props.showmsg("Kuch Likh to Shi !")

        }
        else{

            props.showmsg("Converted to LowerCase Successfully !")
        }
    }
    const cleartxt = () => {

        // setText(text.toUpperCase())
        setText("")
        if(text.length===0){
            props.showmsg("Kuch Likh to Shi !")

        }
        else{

            props.showmsg("Text Cleared Successfully !")
        }
    }
    const spacetxt = () => {

        // setText(text.toUpperCase())
        let newtxt = text.split(/[ ]+/);
        setText(newtxt.join(" "))
        // console.log("chal rha hu")
        if(text.length===0){
            props.showmsg("Kuch Likh to Shi !")

        }
        else{

            props.showmsg(" Extra Spaces Removed Successfully !")
        }

    }
    const copytxt = () => {
        console.log("hi bro")
        let text = document.getElementById("textg");
        // text.select();


        navigator.clipboard.writeText(text.value)
        if(text.length===0){
            props.showmsg("Kuch Likh to Shi !")

        }
        else{

            props.showmsg("Text Copied Successfully !")
        }
    }

    return (
        <div className='body' style={Style}>

            <h1 className="container">{props.heading}</h1>
            <div className="mb-3 container" style={Style}>
                <textarea className=" areatext" id='textg' placeholder='Enter Your Text Here' value={text} onChange={changefunc} rows="8"></textarea>
                <button className="buttons btn-primary btn " onClick={upchange} >Convert To Uppercase <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                </svg></button>
                <button className="buttons btn-primary btn " onClick={lochange} >Convert To Lowercase <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                </svg></button>
                <button className="buttons btn-primary btn " onClick={copytxt} > <span>Copy Text</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg><i className="bi bi-trash"></i></button>
                <button className="buttons btn-primary btn " onClick={spacetxt} > <span>Remove Extra Spaces</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg><i className="bi bi-trash"></i></button>
                <button className="buttons btn-primary btn " onClick={cleartxt} >Clear Text <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg><i className="bi bi-trash"></i></button>

            </div>
            <div className="container"> <h1>Your Text Summary</h1>

                <p>Your Text has --
                    {text.length} <strong>Characters </strong>And {text.split(" ").length}<strong>Words</strong></p>
            </div>


        </div>
    )
}
