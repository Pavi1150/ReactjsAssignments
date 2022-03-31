import React, { useState } from 'react';
import './formbox.css';

function FormboxbootF() {


    const [nop, setNop] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [onSubmitted, setOnSubmitted] = useState(false);


    const handleSubmit = (e) => {
        if (!nop) {
            alert('Number of Passenger is mandatory')
            return
        }
        if (!age) {
            alert('Age is mandatory')
            return
        }

        if (!source) {
            alert('Select Source')
            return
        }
        if (!destination) {
            alert('Select Destination')
            return
        }
        setOnSubmitted({ onSubmitted: true })

    }


    return (
        <div>
            {!onSubmitted && (
                <div>
                    <center>
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        Name of Passenger
                                    </td>
                                    <td>
                                        <input type='text' value={nop}
                                            onChange={(e) => setNop(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>
                                        <input type='text' value={age}
                                            onChange={(e) => setAge(e.target.value)} />
                                    </td>
                                </tr>
                                <div>

                                    <tr>
                                        <td>Gender</td>
                                        &nbsp;
                                        <td>

                                            <input type="radio" name="samename" value="Male" onClick={(e) => setGender(e.target.value)} />Male


                                            &nbsp;
                                            <input type="radio" name="samename" value="Female" onClick={(e) => setGender(e.target.value)} />Female
                                        </td>
                                    </tr>

                                </div>
                                <tr>
                                    <td>Source</td>
                                    <td>
                                        <select value={source} onChange={(e) => setSource(e.target.value)}>

                                            <option value="Select">--Select--</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                            <option value="Chennai">Chennai</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Destination</td>
                                    <td>
                                        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                                            <option value="Select">--Select--</option>
                                            <option value="Kolkata">Kolkata</option>
                                            <option value="Simla">Simla</option>
                                            <option value="Delhi">Delhi</option>
                                        </select>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <div>
                            <label><input type={"checkbox"} value={isChecked} onChange={() => setIsChecked(!isChecked)} />I Agreed all terms and conditions</label>
                        </div>
                        <br />
                        <button type="submit" className="button1" onClick={handleSubmit}>Submit</button>
                    </center>
                </div>)}
            <br />
            <br />
            {onSubmitted && <div class="details">
                <h4>_________________________________________________________________</h4>
                <h3>Name of Passenger:  <span className="l1">{nop}</span></h3>
                <h3>Age:    <span className="l1">{age}</span></h3>
                <h3>Gender: <span className="l1">{gender}</span></h3>
                <h3>Travelling from <span className="l1">{source}</span> to <span className="l1">{destination}</span></h3>
                <h3><span className="l1">{isChecked ? "Yes" : "No"}</span>, I Agreed all terms and conditions</h3>
                <h4>_________________________________________________________________</h4>
            </div>
            }

        </div>
    )

}
export default FormboxbootF