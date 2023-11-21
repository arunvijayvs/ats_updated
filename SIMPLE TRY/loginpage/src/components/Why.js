import React from "react";
import './Why.css';
import { Container } from "@mui/material";
export default function Sample()
{
    return(
        <div>
            <Container id='con'>
                <div id ='ques'>
                    <br></br>
                    <br></br>
                    <h1>Why Hiresmart?</h1>
                    <hr></hr>
                    <br></br>
                    <div id='txt'>
                   <b>From years of collaborating closely with recruitment teams, we have figured that rarely does "one-size-fits-all"</b> 
                   <br></br>
                   <br></br>
                   While larger enterprises need process compliance and standardization, start-ups are keen to have more flexibility. So, when we were deliberating on building a product for fast growth organizations, we decided to re-invent the complete software, not just build a truncated smaller product. Our minimalistic software cuts through the clutter and helps you reach your goals faster.
                   </div>
                    <br></br>
                   <div id='img'>
                    <div id='img1'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLADnRq_DvsXfe4nSlTAIcNJLo32goh9Q3w&usqp=CAU' Height='200px' ></img>
                    <br></br>
                    <br></br>
                    <p id='para'>
                    <b>Gain Competitive Edge</b><br></br>

Not just reduce some of your hiring pains
</p>
                    </div>
                    <div>
                    <img id='img2' src='https://i.pinimg.com/564x/66/cf/14/66cf14cf8000dc1c154560f935597b63.jpg' height='200px'></img>
                   <br></br>
                   <br></br>
                    <p id='para'><b>Smooth Adoption </b><br></br>
By recruitment as well as non-recruitment stakeholders
</p>
                    </div>
                    <div>
                    <img src='https://i.pinimg.com/736x/94/4a/c5/944ac5aac84ecba556d9db01f6aba9bf.jpg' Height='200px'></img>
                    <br></br>
                    <br></br>
                    <p><b id='para'>Best Practices</b>
<br></br>
Implement the latest recru best practices</p>
                    </div>

                   </div>
                </div>

            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}