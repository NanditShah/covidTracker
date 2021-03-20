import { Component } from 'react';
import React from 'react'
import {Cards , Countrypicker , Chart} from "./Components"
import styles from './App.module.css'
import {fetchData} from './API'
class App extends React.Component{

  state ={
    data:{},
    country : ""
  }
 async componentDidMount(){
    const fetchedData = await fetchData()
    console.log(fetchedData);
    this.setState({
      data:fetchedData
    }
    )
  }

  handleChange = async (country) => {
    const fetchedData = await fetchData(country)
    console.log(fetchedData);
    console.log(country);
    this.setState({
      data : fetchedData,
      country : country
    })
  }

  render(){
    const { data,country } = this.state;
    return(
      <div className = {styles.container}>
        <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" />
        <Cards data = {data} />
        <Countrypicker handleChange = { this.handleChange }/>
        <Chart data = {data} country = {country} />
      </div>
    )
  }
}

export default App;
