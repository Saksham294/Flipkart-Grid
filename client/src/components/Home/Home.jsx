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
                    <Typography variant='h3'>Electronics at best prices</Typography>
                    <Link to='/allProducts'>
                        <Button variant='contained' color='primary'
                            sx={{ backgroundColor: "#08d4a4", margin: "2.2vw", fontSize: "1vw", paddingRight: "2vw", paddingLeft: "2vw", paddingTop: "1vw", paddingBottom: "1vw", borderRadius: "1.5vw", position: "absolute", top: "250px", left: "40vw" }}>
                            Shop Now
                        </Button>
                    </Link>
                </div>

            </section>
            <Typography variant='h2' className='fashionHeading'> Fashion at your fingertips...</Typography>
            <img className='fashionGuyImg' src={imgUrl4} />

            <img className='fashionImg' src={imgUrl3} />

        </div>
    )
}

export default Home
