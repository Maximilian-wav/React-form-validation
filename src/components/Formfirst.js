/* This is the initial Proof of Concept and getting comfortable with React.
I attempted to build a form and list out the requirements needed for a password
Upon clicking submit, the webpage will spit out the result to you.
I added the preventDefault to stop the page from refreshing with blankfields
*/


import React, { Component } from 'react'



class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
           password: ''
        }
    }
handlePasswordCreate = (event) => { 
this.setState({
    password: event.target.value
})
}

handleSubmit = event => {
    alert(`${this.state.password}`)
event.preventDefault()
}

    render (){
        const { password} = this.state
        return (
          <form onSubmit={this.handleSubmit}>
              <div>
              <h1>Please enter your Password</h1>
                  <label>password</label>
                  <input type='text' value={password} 
                  onChange={this.handlePasswordCreate} 
                  />
              </div>
              <div>
                  <h4>Password requirements: <br></br>
                  – A length of at least 6 <br></br>
                  – At least 1 number<br></br>
                  – At least 1 capital letter<br></br>
                  – No successive characters
                  </h4>
              </div>
<button type="submit">Submit</button>
          </form>
        )
    }
}
export default Form