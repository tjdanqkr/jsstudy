import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    // prop 고정값 ,state 는 변화됨 
    // prop 이라고 무조건 고정은아님 
    static defaultProps={
        name : 'ㅋㅋ'
    }
    static propTypes={
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    state={
        number:0
    }
    render(){
        return(
            <div>
                안녕하세요, 제 이름은 {this.props.name } 입니다.<br></br>
                저의 나이는 {this.props.age} 입니다.<br></br>
                숫자: {this.state.number}<br/>
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }
                }>더하기</button>
            </div>
        );
    }

}
/*
MyComponent.defaultProps={
    name : '기본이름'
}
*//*
MyComponent.propTypes={
    name: PropTypes.string
}*/
export default MyComponent;