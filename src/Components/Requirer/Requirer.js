import React, { useState, useEffect, useContext } from 'react';
import 'mdbreact/dist/css/mdb.css';
import Select from 'react-select'
import citiesData from '../../Assets/cities.json'
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,

}
  from 'mdb-react-ui-kit';
import contextValue from '../../context/recipients/recipientContext'

function Requirer() {
  const context = useContext(contextValue);
  const { addRecipient } = context;
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipient(pname, page, pemail, pphone, paddress, pgender, bloodGroup,reqDate, selectedState, selectedCity);

  }


  const [bloodGroup, setBlood] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [stateOptions, setStateOptions] = useState([]);
  const [citiesOptions, setCitiesOption] = useState([]);
  const [pname, setName] = useState("");
  const [page, setAge] = useState();
  const [pemail, setEmail] = useState('');
  const [pgender, setGender] = useState('');
  const [pphone, setPhone] = useState();
  const [paddress, setAdd] = useState('');
  const [reqDate, setReqDate] = useState(Date);
  const bloodOption = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
  ];
  const [enteredOTP, setOtp] = useState();
  useEffect(() => {

    const states = citiesData.states.map(data => ({ value: data.state, label: data.state }));
    setStateOptions(states);
    if (!pphone) {
      setGet(true);
    }
    else if (pphone.length !== 10) {
      setGet(true);
    }
    else if (pphone.length === 10) {
      setGet(false);
    }

  }, [pphone, enteredOTP]);


  const handlegetOTP = async () => {
    setVer(false);
    const phone = `+91${pphone}`
    try {
      const response = await axios.post('http://localhost:5000/api/getOTP', { phone });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const handleVerify = async () => {
    const phone = `+91${pphone}`
    console.log(enteredOTP);
    try {
      const response = await axios.post('http://localhost:5000/api/verifyOtp', { phone, enteredOTP });
      console.log(response);
      console.log(response.data.success);
      if (response.data.success === true) {
        setSub(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleStateChange = (event) => {
    const selectedState = event.value;
    setSelectedState(selectedState);
    console.log(selectedState);
    const stateData = citiesData.states.find(state => state.state === selectedState);
    console.log("je");
    console.log(stateData);
    const citieData = stateData.cities.map(data => ({ value: data, label: data }));
    setCitiesOption(citieData);
    setSelectedCity(''); // Reset city selection when state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.value);
    console.log(event.value);
  };

  const handleReset = () => {
    window.location.reload();
  }

  const [get, setGet] = useState(true);
  const [ver, setVer] = useState(true);
  const [sub, setSub] = useState(true);

  const handlePhone = (event) => {
    setPhone(event.target.value);

  }
  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Enter Recipient's Details:</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' onChange={(event) => { setName(event.target.value) }} value={pname} required />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form2' type='number' onChange={(event) => { setAge(event.target.value) }} value={page} required />
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='email' onChange={(event) => { setEmail(event.target.value) }} value={pemail} required />

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='Female' label='Female' onClick={(event) => { setGender(event.target.value) }} inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='Male' label='Male' onClick={(event) => { setGender(event.target.value) }} inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='Other' label='Other' onClick={(event) => { setGender(event.target.value) }} inline />
                  </div>

                  <MDBRow>


                    <MDBCol md='6' label='Select City'>
                      <Select
                        onChange={handleStateChange}
                        placeholder="Select State"
                        className='mb-4'
                        size='lg'
                        options={stateOptions}
                      />
                    </MDBCol>


                    <MDBCol md='6'>
                      <Select
                        onChange={handleCityChange}
                        className='mb-4'
                        size='lg'
                        placeholder="Select City"
                        options={citiesOptions}
                      />
                    </MDBCol>
                    <MDBCol md='6'>
                      <Select
                        placeholder='Required Blood'
                        className='mb-4'
                        size='lg'
                        onChange={(event) => { setBlood(event.value) }}
                        options={bloodOption}
                      />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Blood Require Till Date' size='lg' id='form6' type='date' onChange={(event) => { setReqDate(event.target.value) }} value={reqDate} min={new Date().toISOString().split('T')[0]} max={new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]} required />
                    </MDBCol>

                  </MDBRow>
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Phone No.' size='lg' id='form4' type='number' value={pphone} onChange={handlePhone} />
                    </MDBCol>
                    <MDBCol md='6'>
                      <button type="button" class="btn btn-primary" size="lg" disabled={get === true ? true : false} onClick={handlegetOTP}>Get Otp</button>
                    </MDBCol>
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='OTP' size='lg' id='form4' type='number' value={enteredOTP} onChange={(event) => { setOtp(event.target.value) }} />

                    </MDBCol>
                    <MDBCol md='6'>
                      <button type="button" class="btn btn-primary" size="lg" onClick={handleVerify} disabled={ver === true ? true : false}>Verify</button>
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form5' type='text' value={paddress} onChange={(event) => { setAdd(event.target.value) }} />


                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg' onClick={handleReset}>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleSubmit} disabled={sub === true ? true : false}>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Requirer;