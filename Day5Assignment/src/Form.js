import React, {Component} from 'react';

class Form extends Component{ 
    
  render(){
    return(
      
        <div>
        <h1>Contact Us</h1>
        <form>
            
            <table>
                <thead>
                    <tr>
                        <td>
                            First Name
                        </td>
                        <td>
                            Last Name
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box9" size="50"/>
                        </td>
                        <td>
                            <input type='text' id="box10" size="50"/>
                        </td>
                    </tr>
                </tbody>
                <br/>   
            </table>
            <table>
                <thead>
                    <tr>
                        <td>
                            E-mail
                        </td>
                        <td>
                            Buisness Phone
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box9"  size="50"/>
                        </td>
                        <td>
                            <input type='text' id="box10"  size="50"/>
                        </td>

                    </tr>
                </tbody>
                <br/>
            </table>
            <table>
                <thead>
                    <tr>
                        <td>
                            Company Name
                        </td>
                        <td>
                            Job Title
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box9"  size="50"/>
                        </td>
                        <td>
                            <input type='text' id="box10"  size="50"/>
                        </td>
                    </tr>
                </tbody>
                <br/>
            </table>

            <table>
                <thead>
                    <tr>
                        <td>
                            Street
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box11" size="106"/>
                        </td>
                    </tr>
                </tbody>
                <br/>
            </table>
            
            <table>
                <thead>
                    <tr>
                        <td>
                            City
                        </td>
                        <td>
                            State/Province
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box7" size="50"/>
                        </td>
                        <td>
                            <input type='text' id="box8" size="50"/>
                        </td>
                    </tr>
                </tbody>
                <br/>
            </table>
            
            <table>
                <thead>
                    <tr>
                        <td>
                            ZIP\Postal Code
                        </td>
                        <td>
                            Country\Region
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box9"  size="50"/>
                        </td>
                        <td>
                            <input type='text' id="box10" size="50"/>
                        </td>
                    </tr>
                </tbody>
                <br/>
            </table>
            
            <table>
                <thead>
                    <tr>
                        <td>
                            Topic
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' id="box11" size="106"/>
                        </td>
                    </tr>
                </tbody>
                <br/>
            </table>
            

        </form>
    </div>
    )
  }
}
export default Form;