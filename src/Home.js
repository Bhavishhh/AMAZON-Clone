import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://tse2.mm.bing.net/th?id=OIP.l_WqgtxaN75tRFsRIrWQ0gHaEK&pid=Api&P=0&h=180' alt=''/>

            <div className='home_row'>
                <Product
                title="Philips Bulb"
                price={30.00}
                image="https://images.homedepot-static.com/productImages/2b5a8037-8bae-491f-ac28-243a2c984ff1/svn/philips-cfl-bulbs-414060-64_600.jpg"
                rating={3}
                 />
                 <Product
                title="Sports Shoes"
                price={55.00}
                image="https://thumbs.dreamstime.com/b/close-up-elegant-gray-sport-shoes-adult-man-photographed-white-background-men-s-sport-shoes-isolated-white-background-117753644.jpg"
                rating={5}
                 />
            </div>

            <div className='home_row'>
            <Product
                title="Portable Speaker"
                price={65.00}
                image="https://www.bassheadspeakers.com/wp-content/uploads/2020/03/Best-Portable-Bluetooth-Speakers-1.jpg"
                rating={1}
                 />
                 <Product
                title="Smart Watch"
                price={28.00}
                image="https://i5.walmartimages.com/asr/91feafa3-7a3a-4bb9-9be2-cb1d1c088007.31c659f0164b07ddf86bbf8cb82a8807.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                rating={4}
                 />
                 <Product
                title="Iphone 6s"
                price={115.00}
                image="https://cdn.mos.cms.futurecdn.net/MCKeSsp4YTG7bgSwQpZC3e-1200-80.jpg"
                rating={2}
                 />
            </div>

            <div className='home_row'>
            <Product
                title="Laptop Intel Core i7"
                price={500.00}
                image="https://www.pixelstalk.net/wp-content/uploads/2016/05/Images-laptop-wallpapers.jpg"
                rating={5}
                 />
            </div>

        </div>
    </div>
  )
}

export default Home