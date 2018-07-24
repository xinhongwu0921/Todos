import React from "react";
import './css/addItem.css'
class AppItem extends React.Component{
    /*constructor(){
        super();
        this.state={
            input:''
        }
    }*/
    HandleAdd=(e)=>{
        //阻止默认事件表单跳转
        e.preventDefault()
        // console.log(this.state.input);
        // console.log(this.inputNode.value);
        //告诉父组件内容改变了
        this.props.onInputChange(this.inputNode.value)
        this.inputNode.value=''
    }
    /* HandleChange=(e)=>{
         let input=e.target.value
         this.setState({
             input:input
         })
         console.log(input);
     }*/
    render(){
        return (
            <form className='add-item' onSubmit={this.HandleAdd}>
                <input type="text" required="required" ref={(input)=>this.inputNode=input} />
                <input type="submit"  value="添加"/>
            </form>
        )
    }
}
export default AppItem;