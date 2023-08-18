import { Button, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
    const imgUrl = "https://img.freepik.com/free-photo/two-young-girls-wearing-casual-shirts-posing-with-palms-together-smiling_176532-10501.jpg?w=1480&t=st=1692194621~exp=1692195221~hmac=28094848746b6ef524c22bac59d5a2f301af9ee2c137ae9d70042ffb027b7234"
    const imgUrl2 = "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    const imgUrl3 = "https://plus.unsplash.com/premium_photo-1690559307519-2ff130f363f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHdpdGglMjBzdW5nbGFzc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    const imgUrl4 = "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGd1eSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    const imgUrl5 = "https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?size=626&ext=jpg&ga=GA1.2.1065906416.1691861692&semt=sph";
    const imgUrl6 = "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGFuZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    const imgUrl7 = "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGFuZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    const imgUrl8 = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBhbmQlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    const imgUrl9 = "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWUlMjBhbmQlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    const imgUrl10 = "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxob21lJTIwYW5kJTIwZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    return (
        <div className='insideHome'>
            <section className='homeSection'>

                <div className="homeDiv1">
                    <div className="homeText">
                        <Typography variant='h3'>UrbanBazaar</Typography>
                        <Typography variant='h5'>You deserve the best products</Typography>

                    </div>
                    <div className="homeDiv2">

                    </div>

                </div>

                <img src={imgUrl} className='homeImg'></img>
            </section>
            <section className='homeSection2'>
                <div className="overlay">
                    <Typography variant='h3'>Electronics at Best Prices</Typography>
                    <Link to='/allProducts'>
                        <Button variant='contained' color='primary'
                            sx={{ backgroundColor: "#08d4a4", margin: "2.2vw", fontSize: "1vw", paddingRight: "2vw", paddingLeft: "2vw", paddingTop: "1vw", paddingBottom: "1vw", borderRadius: "1.5vw", position: "absolute", top: "275px", left: "42vw" }}>
                            Shop Now
                        </Button>
                    </Link>
                </div>

            </section>
            <section className='fashion'>
                <img className='fashionGuyImg' src={imgUrl4} />
                <img className='fashionImg' src={imgUrl3} />
                <div className="fashionHeadingandDesc">
                    <Typography variant='h2' className='fashionHeading'> Fashion just a touch away</Typography>
                    <Typography variant='h5'>Experience fashion at its most convenient. With a simple touch, explore a world of trendy possibilities on UrbanBazaar, bringing your style desires to life</Typography>
                    <Link to='/allProducts'>
                        <Button variant='contained' color='primary'
                            sx={{ backgroundColor: "#08d4a4", margin: "2.2vw",marginLeft:"3vw" ,fontSize: "1vw", paddingRight: "2vw", paddingLeft: "2vw", paddingTop: "1vw", paddingBottom: "1vw", borderRadius: "1.5vw"}}>
                            Shop Now
                        </Button>
                    </Link>
                </div>
            </section>

            <section className='homeDecor'>
                <Typography variant='h3'>Furniture at Lowest Prices</Typography>
                <div className='homeandFurniture'>
                    <img src={imgUrl6} />
                    <img src={imgUrl7} />
                    <img src={imgUrl8} />
                    <img src={imgUrl9} />
                    <img src={imgUrl10} />
                    {
                        /**use product cards and not just images */
                    }
                </div>
            </section>
        </div>
    )
}

export default Home
