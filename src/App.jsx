import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo'
import ToEat from './Todo'
import Actor from "./Actor"
import Singer from "./Singer"
import Counter from './counter'
import Batsman from './Batsman'
import Bowler from './Bowler'
import Users from './Users'
import Friends from './Friends'
import Players from './Players'

import Library from './library'

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();
  const [count, setCount] = useState(0)

  // const time = 50;
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman shah', 'Jasim', 'Anwar', 'Rajjak']

  const books = [
    {id:1, name:"Physics", price: 250},
    {id:2, name:"Chemistry", price: 300},
    {id:3, name:"Biology", price: 350},
    {id:4, name:"Math", price: 450}
  ]


  const singers = [
    {id: 1, name:'Dr. Mahfuz', age: 68},
    {id: 2, name:'Tahsan', age: 45},
    {id: 3, name:'Shuvro Deb', age: 57}
  ]
  function handleClick(){
    alert('I am clicked')
  }
  const handleClick3 = () => {
    alert("clicked 3");
  }
  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(`click ${newNum}`);
  }

  // const [count, setCount] = useState(0)
  
  return (
    <>
    <Players></Players>
    <button onClick={handleClick}>click</button>
    <button onClick={function handleClick2(){
      alert("clicked 2")
    }}>Click 2</button>
    <button onClick={handleClick3}>click 3</button>
    <button onClick={() => alert("clicked 4")}>click 4</button>
    <button onClick={() => handleClick5(5)}>click 5</button>
    <Counter></Counter>
    <Suspense fallback = {<h2>Loading...</h2>}>
      <Users fetchUser ={fetchUsers}></Users>
    </Suspense>
    <Suspense fallback={<h3>Lorem ipsum dolor sit....</h3>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
    <Batsman></Batsman>
    <Bowler></Bowler>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Person></Person>
      <Person></Person>
      <Location></Location>
      <Developer name="Mozumder" tec="JS"></Developer>
      <Developer name="Rajon" tec="Java"></Developer>
      <Developer name="sabana" tec="Python"></Developer>
      <Device device="Phone" brand='Apple' price="450$"></Device>
      <Device device="Laptop" brand='Apple' price="650$"></Device>
      <Device device="IPad" brand='Apple' price="550$"></Device>

      <Player name='Hridoy' run='717' match='19'></Player>
      <Player name='Shakib' run='789' match='17'></Player>
      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Recap JS" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={true} time="100"></ToDo> */}

      {/* <ToEat eat="Apple" isHungry={true}></ToEat>
      <ToEat eat="Orange" isHungry={false}></ToEat> */}

      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      <Library books={books}></Library>

    </>
  )
}

function Developer(props){
  console.log(props);
  
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: "20px",
      marginTop:"5px"
    }}>
      <h3>Developer: {props.name}</h3>
      <h3>Technology: {props.tec}</h3>
    </div>
  )
}

function Device(props){
  return(
    <div style={{
      backgroundColor:"gray",
      color:"black",
      fontSize:'36px',
      fontWeight:"Extrabold",
      border: '5px solid orange',
      borderRadius: "20px",
      marginTop:"10px",
    }
    }>
      <p>Device: {props.device}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
    </div>
  )
}

function Player({name, run, match}) {
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Run: {run}</p>
      <p>Match: {match}</p>
    </div>
  )
}

function Person(){
  return (
    <p>I am a person</p>
  )
}

function Location(){
  return (
    <li>Dhaka</li>
  )
}
export default App
