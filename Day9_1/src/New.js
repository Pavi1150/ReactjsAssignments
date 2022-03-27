import React, {Component} from 'react';

class Design extends Component{
state={
    designs:[
      {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      },
      {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      },
      {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      },
      {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      },
      {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      },
    ]
    

  }
  render()
  {
    return (
        <div>
        <Design>{this.state.designs.length}designs</Design>
        </div>
  )
}
}
  export default Design;

//   import React, {Component} from 'react';
// import './web2.css'

// class Web2 extends Component{
//     state={
//         datas:[
//             {
//               id: 1,
//               title: 'Do I have to allow the use of cookies?',
//               info:
//                 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
//             },
//             {
//               id: 2,
//               title: 'How do I change my My Page password?',
//               info:
//                 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
//             },
//             {
//               id: 3,
//               title: 'What is BankID?',
//               info:
//                 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
//             },
//             {
//               id: 4,
//               title: 'Whose birth number can I use?',
//               info:
//                 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
//             },
//             {
//               id: 5,
//               title: 'When do I recieve a password ordered by letter?',
//               info:
//                 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
//             },
//           ]
          
//     }
//     render(){
//         return(
            
//             <div>
//                 <div>{this.state.datas.map(data=><div key={data.id}>
//                 <div class="border">
//                 <div class="row">
//                     <div class="col">
//                         <h4>Questions And Answers About Login</h4>
//                     </div>
//                     <div class="col">
//                         <h4>{data.title}</h4>
//                     </div>
//                     </div>

//                 </div>
//             </div>)}
            
//             </div>
//             </div>
//         )
        
//         }

//         }
//         export default Web2