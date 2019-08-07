import React, {Component} from 'react'
import Dialog from "./Dialog"

class SingUpDialog extends Component {
    constructor(props){
        super(props);
        this.state= {login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSingUp = this.handleSingUp.bind(this);
        }
        render(){
            return(
                <Dialog title="Marss Exploration Program" message="How shold we refer to you">
                    <input value={this.state.login} onChange={this.handleChange} />
                    <button onClick={this.handleSingUp}>Sing Up Me</button> 
                </Dialog>
            )
        }
        handleChange (e) {
            this.setState({login: e.target.value});
        }
        handleSingUp () {
            alert(`Welcome aboard, ${this.state.login}`)
        }
}
export default SingUpDialog