import React,{Component} from 'react';
// import './Home.css';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import Header from '../../Components/sections/section-header/section';


class Home extends Component{
    state={
        lat:0,
        long:0
    }

    
    render(){
        return(
            <div >
            <Header data={this.props.data}>
            <Toolbar count={this.props.count}/>
            </Header>
            </div>
        );
    }
   

}

export default Home;