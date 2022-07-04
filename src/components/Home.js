import { React, useState } from 'react'
import styled from "styled-components";
import { BiWorld } from "react-icons/bi";
import { FaCity, FaSearchLocation } from "react-icons/fa";
import { TbWorld } from "react-icons/tb"
import { GiWorld } from "react-icons/gi";
import { GrOrganization, GrCurrency } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import useFetch from "./useFetch";
import { FaMapMarkerAlt } from "react-icons/fa";
function Home() {

    const [input, setInput] = useState('');
    const [datas, error] = useFetch(`https://ipapi.co/${input}/json/`, input);

    return (
        <Wrapper>
            <div className="header-container">
                <h1><FaSearchLocation />IpfinderCo</h1>
                <div className="header-box">
                    {error ? <h5>Invalid Ip</h5> : ''}
                    <div className="form" onSubmit={(e) => e.preventDefault()}>

                        <form>
                            <input type="text" className="input" value={input} placeholder="Enter Ip" onChange={(e) => setInput(e.target.value)} />
                            <input type="submit" value="Submit" className="submit" />

                        </form>
                    </div>
                </div>
                <div className="header-box-content">

                    <div className="data">
                        <div className="icon">
                            <TbWorld />
                        </div>
                        <h4>Ip Address</h4>
                        <p>{datas.ip}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <FaCity />
                        </div>
                        <h4>City</h4>
                        <p>{datas.city}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <BiWorld />
                        </div>
                        <h4>Country</h4>
                        <p>{datas.country_name}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <GiWorld />
                        </div>
                        <h4>Region</h4>
                        <p>{datas.region}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <GrOrganization />
                        </div>
                        <h4>organization</h4>
                        <p>{datas.org}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <BsFillPeopleFill />
                        </div>
                        <h4>population</h4>
                        <p>{datas.country_population}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <GrCurrency />
                        </div>
                        <h4>Currency</h4>
                        <p>{datas.currency}</p>
                    </div>
                    <div className="data">
                        <div className="icon">
                            <FaMapMarkerAlt />
                        </div>
                        <h4>Lat and Long</h4>
                        <p>{datas.latitude},{datas.longitude}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}





const Wrapper = styled.section`

h4{
    font-size:17px;
}

.header-container {
    padding:50px;
}

.header-box {
    padding:40px;
}
.header-container{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}


@media screen and (max-width:768px){
  .header-box-content{
    display:flex;
    flex-direction:column;
  }
}
.header-box-content{
  display:flex;
  justify-content:center;
  align-items:center;
}
.data{
    padding:30px
}

.input{
    padding:10px;
    Width:300px;
    border:2px solid black;
 
}
.submit{
    padding:10px;
    background-color:black;
    color:white
}
.icon{
    font-size:27px;
}
p{
    font-size:14px;
}
h5{
 color:red
}
`;




export default Home