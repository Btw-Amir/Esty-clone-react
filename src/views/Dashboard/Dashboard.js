import React, { useState } from 'react'
import './dashboard.css'
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Navbar/Navbar'
export default function Dashboard() {
  const [data,setData]=useState( [
    {
      catogory:"Personalized Gift",
      img:'https://i.etsystatic.com/25792760/r/il/5da611/3405911484/il_300x300.3405911484_go20.jpg'
    },
    {
      catogory:"DIY & Crafts",
      img:'https://i.etsystatic.com/20442851/c/2000/2000/500/…/a99d85/2952846478/il_300x300.2952846478_jtqc.jpg'
    },   
    {
      catogory:"For Kids & Babies",
      img:'https://i.etsystatic.com/14340206/r/il/34b534/5662388029/il_300x300.5662388029_1aa2.jpg'
    },
    {
      catogory:"Jewellery",
      img:'https://i.etsystatic.com/5824932/c/1538/1538/355/2…/1dd019/1884746319/il_300x300.1884746319_o3sd.jpg'
    },   {
      catogory:"Wedding & Engagement",
      img:'https://i.etsystatic.com/17207134/c/769/769/197/59…/913c7a/3121451996/il_300x300.3121451996_695g.jpg'
    },   {
      catogory:"On Sale",
      img:'https://i.etsystatic.com/22152147/c/1801/1801/7/10…/b7f3da/2734648803/il_300x300.2734648803_s88b.jpg'
    }

  ])
  const [shop, setshop]=useState([
    {
      src:"https://i.etsystatic.com/5204269/c/888/706/201/265/il/462ec1/1000393416/il_680x540.1000393416_qf5c.jpg",
      text:'Jewellery'
    },
    {
      src:'https://i.etsystatic.com/11326925/c/1512/1201/0/310/il/582a10/3704219961/il_680x540.3704219961_ckr2.jpg',
      text:'Home & Living'
    },
    {
      src:'https://i.etsystatic.com/9986723/r/il/c489a7/3784663223/il_680x540.3784663223_eum8.jpg',
      text:'Art & Collectibles'
    },
    {
      src:'https://i.etsystatic.com/21475936/c/2000/1589/0/1341/il/63335d/4055185948/il_680x540.4055185948_gpg6.jpg',
      text:'Clothing'
    },
    {
      src:'https://i.etsystatic.com/27025196/c/2025/1611/0/0/il/d7ed4a/4993068433/il_680x540.4993068433_99hf.jpg',
      text:'Baby'
    },
    {
      src:'https://i.etsystatic.com/5863761/c/1923/1527/16/743/il/8cbd6c/1390117214/il_680x540.1390117214_f338.jpg',
      text:'Weddings'
    },
    {
      src:'https://i.etsystatic.com/5694172/r/il/b56e39/480340698/il_680x540.480340698_4y6r.jpg',
      text:'Craft Supplies & Tools'
    },
    {
      src:'https://i.etsystatic.com/14367613/r/il/132de7/4895345185/il_680x540.4895345185_abr9.jpg',
      text:'Accessories'
    },
    {
      src:'https://i.etsystatic.com/11544420/c/2777/2207/118/35/il/c420f3/5339022152/il_680x540.5339022152_oz9w.jpg',
      text:'Bags & Purse'
    },
    {
      src:'https://i.etsystatic.com/5681268/r/il/1a172e/1340668142/il_680x540.1340668142_gl4u.jpg',
      text:'Electronic & Accessories'
    },
    {
      src:'https://i.etsystatic.com/5186425/r/il/21ee8b/1955410074/il_680x540.1955410074_9cbf.jpg',
      text:'Books, Flims & Music'
    },
    {
      src:'https://i.etsystatic.com/10929740/r/il/7910c0/1010913032/il_680x540.1010913032_gzsb.jpg',
      text:'Bath & Beauty'
    }

  ])
  console.log(setData,setshop)
  return (
    <div>
        <Nav/>
<div className='center-text'>
  <p>Find things you'll love. Support independent sellers. Only on Etsy.</p>
</div>
<div className='Catogories'>
{data.map(function(items){
 return<div className='catogory'>
<img src={items.img} alt='img' />
<p>{items.catogory}</p>
  </div>
})}
</div>
<div className='center-text'>
  <p>Shop by Category
</p>
</div>
<div className='Shop'>
  {shop.map(function(items){
    return <div className='Shop-cat'>
      <img src={items.src}alt='dd'/>
      <p>{items.text}</p>
    </div>
  })}
</div>
<div className='center-btn'>
  <button className='btn'><b>Show more (5)</b></button>
</div>

        <Footer/>
    </div>
  )
}












