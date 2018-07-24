import React from "react"
import {Link} from 'react-router-dom'
import "./css/about.css"
class AboutPanul extends React.Component{

    render() {
        return (
            <div className='about-panel'>
                <h3 className='about-title'>{this.props.title}</h3>
                {this.props.subTitle}
                <p className='add-item'>{this.props.desc}</p>
                {this.props.children}
            </div>
        );
    }

}
class About extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className='about'>
                <Link to="/">记事本</Link>
                <AboutPanul
                    title='自我介绍'
                    desc='我是来自xxx的应届毕业生，我。。。。。。。。。。。'
                />
                <AboutPanul
                    title='兴趣爱好'
                    desc='我是来自xxx的应届毕业生，我喜欢。。。。。。。。。。。'
                >
                    <input type="text" ref={(input)=>this.inputNode=input}/>
                        <button onClick={()=>alert(this.inputNode.value)}>点评</button>

                </AboutPanul>
                <AboutPanul
                    title='工作经历'
                    subTitle={<h4>经历丰富，行业跨度大</h4>}
                    desc='我是来自xxx的应届毕业生，我干过。。。。。。。。。。。'
                />
            </div>
        )
    }
}
export default About;