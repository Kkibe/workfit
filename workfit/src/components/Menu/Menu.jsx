import React from 'react'
import './Menu.css';
import Image1 from '../../assets/Workfit.png';
import Image2 from '../../assets/a.jpg';
import Image3 from '../../assets/react.png';
import Image4 from '../../assets/a.jpg';
import Image5 from '../../assets/beef.jpg';
import Image6 from '../../assets/drink.jpg';
import {FaRegPlayCircle, FaShareAlt, FaStar } from "react-icons/fa";

export default function Menu() {
  const dishes = [
    {
      id: 1,
      title: "tasty food",
      price: 550,
      image: Image1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 2,
      title: "delicious food",
      price: 550,
      image: Image2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 3,
      title: "delicious food",
      price: 550,
      image: Image3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 4,
      title: "tasty food",
      price: 550,
      image: Image4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 5,
      title: "delicious food",
      price: 550,
      image: Image5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
    {
      id: 6,
      title: "delicious food",
      price: 550,
      image: Image6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      stars: 4.5,
      
    },
  ];
    const Item = ({data}) => {
      return(
        <div className="box">
            <div className="image">
                <img src={data.image} alt="" />
                <a href="#" className='icon'><FaShareAlt /></a>
                <FaRegPlayCircle className='button'/>
            </div>
            <div className="content">
                <div className="stars">
                    <FaStar className='star'/>
                    <span>5.2K</span>
                    <div className="duration">6 min</div>
                </div>
                <h3>{data.title}</h3>
                <p>
                  <div className="hash">special</div>
                  <div className="hash">menu</div>
                  <div className="hash">dinner</div>
                  <div className="hash">calorie-free</div>
                </p>
                <span className="views">100k Views . 2w ago</span>
            </div>
        </div>)
    }
  return (
    <section className='menu' id='menu'>
        <h3 className="sub-heading">our menu</h3>
        <h1 className="heading">today's specialty</h1>
        <div className="box-container">
          {
            dishes && dishes.map(item => {
              return <Item data={{...item}} key={item.id} />
            })
          }
        </div>
    </section>
  )
}
