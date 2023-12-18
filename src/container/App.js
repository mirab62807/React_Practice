import React, {Component} from "react";
import CardList from "../component/CardList";
// import { robots } from "./robots";
import SearchBox from '../component/SearchBox';
import Scroll from '../component/scroll';



class App extends Component {
    constructor(){
        super();
        this.state={
            robots: [],
            SearchField:'',

        };
        console.log('constructor');
    };


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then( response =>{
           return  response.json()
        }).then(
            users =>{
                this.setState({robots: users})
            }
        )
        
        console.log('componentDidMount')
    }


    onSearchChange = (event) =>{

        this.setState({SearchField: event.target.value});
        console.log(event.target.value)
        
    };


    render(){
        const {robots, SearchField} = this.state;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(SearchField.toLowerCase());
            
        })
        console.log('render')
    return(
        <div className="tc">
            <h1>ROBOFRIENDS</h1>
            <SearchBox SearchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} />

            </Scroll>
             
        </div>
    );
    };
};

export default App;
