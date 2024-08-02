import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const HeroesStyle = {
  backgroundColor: 'black',
  color: 'gold',
  margin: '10px',
  borderRadius: '10px',
  boxShadow: '5px 5px 10px gold',
  padding: '10px 10px',
}
const HeroesStyle1 = {
  backgroundColor: 'navy',
  color: 'white',
  margin: '5px',
  borderRadius: '10px',
  boxShadow: '5px 5px 10px white',
  padding: '10px 10px',
}
function App() {
  const [vuas, setVuas] = useState([5]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setVuas(data))
  },[]) 
  const heroes = [
    {
      name: 'Muhammadur Rasulullah (Peach be Upon Him)',
      title: 'The Messanger of Allah (SWT)'
    },
    {
      name: 'Abu Bakar (R.)',
      title: 'The Siddik'
    },
    {
      name: 'Omar Ibn Khattab (R.)',
      title: 'Faruq'
    },
    {
      name: 'Usman Ibn Affan (R.)',
      title: 'Goni'
    },
    {
      name: 'Ali Ibn Abu Talib (R.)',
      title: 'Asadullah'
    },
    {
      name: 'Khalid Bin Walid (R.)',
      title: 'Saifullah'
    }
  ]; 
  const heroesName = heroes.map(name => name.name);
  // console.log(heroesName);
  const heroesTitle = heroes.map(title => title.title);
  return (
    <div className="App">
      <header className="App-header">        
        <p style={HeroesStyle}>Bismillahir Rahmanir Rahim</p>
        <p style={HeroesStyle}>Lists Of My Heroes: {heroesName.length} </p>       
        {
          heroes.map(hero => (
            <div style={HeroesStyle1}>
            <ul>
              <li>
                <h2>Name: {hero.name}</h2>              
                <h2>{hero.title}</h2>
                <button>See Details</button>
              </li>
            </ul>
          </div>
          ))
        }
        {
          heroes.map(hero => <MyHeroes1 hero = {hero}></MyHeroes1>)
        }     
        <MyHeroes name="Muhammadur Rasulullah (Peach be Upon Him)" key = "1" title="Messanger Of Allah (SWT)"></MyHeroes>
        <MyHeroes name="Abu Bakar (R.)" key = "2" title = "Siddik"></MyHeroes>
        <MyHeroes name="Omar Ibn Khattab (R.)" key = "3" title = "Faruk"></MyHeroes>
        <MyHeroes name="Ali Ibn Abu Talib (R.)" key = "4" title = "Asadullah"></MyHeroes>
        <MyHeroes name="Usman Ibn Affan (R.)" key = "5" title = "Goni"></MyHeroes>
        <h4 style={HeroesStyle}>Vuas Lists</h4>
        {
          vuas.map(vua => <Vuas name = {vua.name} key={vua.id} email = {vua.email}></Vuas>)
        } 
      </header>
    </div>
  )
}
function Vuas(props) {
  // console.log(props.name)
  return (
    <div style={HeroesStyle1}>
      <ul>
        <li>
          <h2>Name: {props.name}</h2>              
          <h2>Email: {props.email}</h2>
          {/* <button onClick={() => setCount(count+1)}>Increase</button><br/>
          <button onClick={() => setCount(count-1)}>Decrease</button> */}
          {/* <h1>Count: {count}</h1> */}
        </li>
      </ul>
    </div>
  )
}
function MyHeroes(props) {
  return (
    <div>
      <h1 style={HeroesStyle}>Name: {props.name + ", " + props.title}</h1>
    </div>
  )
}
function MyHeroes1(props) {
  const [count, setCount] = useState(10);  
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const handleDecrease = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }
  // console.log(props);
  // console.log(props.hero);
  const {name, title} = props.hero;
  // console.log(name, title)
  return (
    <div style={HeroesStyle1}>
      <ul>
        <li>
          <h2>Name:{name}</h2>              
          <h2>{title}</h2>
          <button onClick={() => setCount(count+1)}>Increase</button><br/>
          <button onClick={() => setCount(count-1)}>Decrease</button>
          <h1>Count: {count}</h1>
        </li>
      </ul>
    </div>
  )
}
export default App;
