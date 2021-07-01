import React, { ChangeEvent } from 'react';
import './MemeGenerator.css'


type MyState = {
    topText: string,
    bottomText: string,
    randomImg: string,
    allMemeImgs: {id:string,name:string,url:string,width:number,height:number,box_count:number}[]; // like this
};

class MemeGenerator extends React.Component<{}, MyState>{
    
        state:MyState={
            
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        };
        handleChangeTop=(event:ChangeEvent<HTMLInputElement>):void=>{
            
           
            this.setState({topText: event.target.value});
        }
        handleChangeBot=(event:ChangeEvent<HTMLInputElement>):void=>{
            this.setState({bottomText: event.target.value});
        }
        handleSubmit=(event:React.SyntheticEvent):void=>{
            event.preventDefault()
            const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
            const randMemeImg = this.state.allMemeImgs[randNum].url
            this.setState({randomImg:randMemeImg})
        }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                
                this.setState({ allMemeImgs: memes })
            })
    }

        render()

         {
            return(
                <div>
                    <form className="meme-form">
                        <input name='topText' type='text' placeholder='Top Text' value={this.state.topText} onChange={(e)=>this.handleChangeTop(e)}/>
                        
                        <input name='bottomText' type='text' placeholder='Bottom Text' value={this.state.bottomText} onChange={(e)=>this.handleChangeBot(e)}/>
                        
                        <button onClick={this.handleSubmit}>Gen</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.randomImg} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>                   
                </div>
            )
        }
    
}
export default MemeGenerator