import React, {Component} from 'react';

class EventPractice extends Component{
    state ={
        messege:'',
        username:''
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    handleChange(e){
        this.setState({
           
            [e.target.name]:e.target.value
        });
    }
    handleClick(){
        alert(this.state.username + ':'+this.state.messege);
        this.setState({
            messege:'',username:''
        });
    }
    handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.handleClick();
        }
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' name ='username' value={this.state.username} placeholder='유저네임' onChange={this.handleChange}></input>
                <input type='text' name='messege' value={this.state.messege} placeholder='아무거나 입력하세요' onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice;