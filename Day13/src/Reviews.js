import React, { useState } from 'react'
import './review.css'
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
function Reviews() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      name: 'Susan Smith',
      job: 'WEB DEVELOPER',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'WEB DESIGNER',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'INTERN',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'THE BOSS',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ]
  )
  const [index, setIndex] = useState(0);
  const hanldeNext = () => {
    if (index === datas.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }
  const handlePrev = () => {
    if (index === 0) {

      setIndex((datas.length) - 1);
    }
    else {
      setIndex(index - 1);
    }
  }
  const hanldeRandom = () => {
    let randomValue = Math.floor(Math.random() * datas.length);
    if (randomValue === index) {
      randomValue = ((randomValue + 1) > (datas.length - 1)) ? 0 : randomValue + 1
    }
    setIndex(randomValue)
  }

  return (
    <div>

      <div className='h1 text-center mt-5 uu'>Our Reviews</div>
      <div className="card col-4 d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded"><br />
        <div><img src={datas[index].image} className="img" height="150px" width="150px" /></div><br />
        <div className='fw-bold text-center'>{datas[index].name}</div>
        <div className='job text-center'>{datas[index].job}</div><br />
        <div className='text-secondary text-center'>{datas[index].text}</div><br />
        <div className='text-center'>
          <span onClick={handlePrev}><FcPrevious size="20" /></span>
          <span onClick={hanldeNext}><FcNext size="20" /></span>
        </div>
        <button onClick={hanldeRandom} className="border-0 text-center hov">Surprise Me</button>
      </div>
    </div>
  )
}
export default Reviews;

