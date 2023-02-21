import React from 'react';
import './home.css'
import Product from './product.jsx'

function Home() {

    return (
        <div className="home">

            
            <div className="home-container">
                <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg" alt="" />

                <div className="home-row">
                    <Product
                        title='The lean StartUp' price='29.99' id={1} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                    />
                    <Product
                        title='Bajaj-Mixer Grinder Set' price='14.25' id={2} rating={5} image='https://images.philips.com/is/image/philipsconsumer/ff8bff586627461bbaa2ad1401311f10?wid=420&hei=360&$jpglarge$'
                    />
                </div>
                <div className="home-row">
                    <Product
                        title='RayBan - Exclusive Sunglasses' price='25.33' id={3} rating={4} image='https://images.ray-ban.com/is/image/RayBan/805289126577__STD__shad__qt.png?impolicy=RB_Product&width=Param&bgc=%23f2f2f2'
                    />
                    <Product
                        title='Zebronics - ZEB MAX NINJA' price='40.00' id={4} rating={5} image='https://m.media-amazon.com/images/I/71z9tM+n5wL._SL1500_.jpg'
                    />

                    <Product
                        title='F.R.I.E.N.D.S. - Frame' price='68.58' id={5} rating={5} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt29DlkHp0F86jbId8AOfJGnu7Ja02O2Wwpg&usqp=CAU'
                    />
                </div>
                <div className="home-row">
                    <Product
                        title='MI - LED TV' price='129.99' id={6} rating={3} image='https://m.media-amazon.com/images/I/61V7cDH8AAS._AC_UY327_FMwebp_QL65_.jpg'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;