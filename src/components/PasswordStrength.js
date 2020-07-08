import React from "react";
import "./PasswordStrength.css";

// Construction the regular expressions:
/* In this case we are going to go with creating agradient for the password:
a STRONG password MUST contain:
+lowercase and uppercase letter X
+number X
+symbol X
+longer than 6 characters X
+no successive characters (pending)


a MEDIUM password : 
May have lowercase & uppercase OR lowercase & number OR uppercase and number X
 while being ATLEAST 6 characters long X
**medium passwords should not have successive characters

*/
/*
https://regex101.com/
Regex successive groupings
(a-z{2})
(a-z{!<2})
(a-z)+

(?:([\w\d*?!:;])\1?(?!\1))+$

Parsing error: Legacy octal literals are not allowed in strict mode


^(?=.{8,20}$)(?=[^A-Za-z]*[A-Za-z])(?=[^0-9]*[0-9])(?:([\w\d*?!:;])\1?(?!\1))+$

^(?!.*([A-Za-z0-9])\1{2})(?=.*[a-z])(?=.*\d)[A-Za-z0-9]+$
*/

//const strongRegex = new RegExp(`^((?!.*([A-Za-z0-9])\1{2})(?=.*[a-z])(?=.*\d)[A-Za-z0-9]+$`);

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{6,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

class PasswordStrength extends React.Component {

    constructor() {
        super();
        this.state = {
            backgroundColor: "#4285F4"
        }
        this.analyze = this.analyze.bind(this);
    }
/*
now for the actual if statements to change background color in relation to the strength
and the requirements being met
weak password: red
medium password: orange
strong password: green
*/


    analyze(event) {
        if(strongRegex.test(event.target.value)) {
            this.setState({ backgroundColor: "#0F9D58" })
        } else if(mediumRegex.test(event.target.value)) {
            this.setState({ backgroundColor: "#F4B400" });
        } else {
            this.setState({ backgroundColor: "#DB4437" });
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.backgroundColor }}>
                <h1><label for="password">please enter password: </label></h1>
                <p><input type="text" name="password" onChange={this.analyze} /></p>
                <p>Password requirements: <br></br>
            – A length of at least 6 <br></br>
            – At least 1 number<br></br>
            – At least 1 capital letter<br></br>
            – No successive characters
            </p>
            </div>
            
        );
    }

}

export default PasswordStrength;
