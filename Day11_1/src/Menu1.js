import React, { useState } from 'react';
import './menu.css';
import item1 from "./images/item-1.jpeg"
import item2 from "./images/item-2.jpeg"
import item3 from "./images/item-3.jpeg"
import item4 from "./images/item-4.jpeg"
import item5 from "./images/item-5.jpeg"
import item6 from "./images/item-6.jpeg"
import item7 from "./images/item-7.jpeg"
import item8 from "./images/item-8.jpeg"
import item9 from "./images/item-9.jpeg"

function Menu1() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: 'Buttermilk pancakes',
      category: 'Breakfast',
      price: 15.99,
      img: item1,
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      id: 2,
      title: 'Dinner double',
      category: 'Lunch',
      price: 13.99,
      img: item2,
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
      id: 3,
      title: 'Godzilla milkshake',
      category: 'Shakes',
      price: 6.99,
      img: item3,
      desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      id: 4,
      title: 'Country delight',
      category: 'Breakfast',
      price: 20.99,
      img: item4,
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
    },
    {
      id: 5,
      title: 'Egg attack',
      category: 'Lunch',
      price: 22.99,
      img: item5,
      desc: " Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
    },
    {
      id: 6,
      title: 'Oreo dream',
      category: 'Shakes',
      price: 18.99,
      img: item6,
      desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
      id: 7,
      title: 'Bacon overflow',
      category: 'Breakfast',
      price: 8.99,
      img: item7,
      desc: "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
      id: 8,
      title: 'American classic',
      category: 'Lunch',
      price: 12.99,
      img: item8,
      desc: "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
      id: 9,
      title: 'Quarantine buddy',
      category: 'Shakes',
      price: 16.99,
      img: item9,
      desc: "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
  ]
  )
  const [dataRender, setRenderData] = useState(datas);
  const category = datas.map(data => data.category)
  const uniqCate = [...new Set(category)]
  uniqCate.unshift('All')
  const handleTab = (d) => {
    if (d === 'All') {
      setRenderData(datas)
      return
    }
    const filteredData = datas.filter(data => data.category === d)
    setRenderData(filteredData)
  }


  return (
    <div>
      <h1 className='text-center'><u>Our Menu</u></h1>

      <div className='text-center mt-5'>{uniqCate.map((d, i) => <a href='#' className='text-warning px-4 text-decoration-none  ' onClick={() => handleTab(d)} key={i} >{d}</a>)}</div>
      <div className='container mt-5 px-5'>
        <div className='row'>
          {
            dataRender.map(data => <div className='d-flex col-6 ' key={data.id}>
              <div className='row container '>

                <img src={data.img} height="150" width='100' className='col-4 mb-5 imges' alt="img-responsive" />
                <div className='mb-1  col-8'>
                  <span className='fw fw-bold'>{data.title}</span>
                  <span className='ms-5 ps-5 text-warning fw-bold'>${data.price}</span>
                  <br />
                  <span className='text-secondary'><hr></hr>{data.desc}</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}
export default Menu1