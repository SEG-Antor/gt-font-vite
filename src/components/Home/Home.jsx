import { Link } from "react-router-dom";
import BootstrapCarousel from "../BootstrapCarousel/BootstrapCarousel";
import "./Home.css"

import SingleProduct from "../SingleProduct/SingleProduct";
import Comments from "../Comments/Comments";

const Home = () => {
    return (
        <main>
            <BootstrapCarousel></BootstrapCarousel>

            <div className='logos'>
                <div>
                    <img src="/logos/warrenty.png" alt='warrenty' />
                    <span> 1 Year Warrenty</span>
                </div>

                <div>
                    <img src="/logos/giftcard.png" alt='giftcard' />
                    <span> GT Gift Card</span>
                </div>

                <div>
                    <img src="/logos/fastdelivery.png" alt='fastdelivery' />
                    <span> Fast Delivery</span>
                </div>

                <div>
                    <img src="/logos/trustedseller.png" alt='trustedseller' />
                    <span> Trusted Seller</span>
                </div>

                <div>
                    <img src="/logos/klarna.png" alt='klarna' />
                    <span> Payment Plan</span>
                </div>

                <div>
                    <img src="/logos/return.png" alt='return' />
                    <span> 30 Days Return</span>
                </div>
            </div>

            <div className='pre-and-refub'>
                <Link to="preowned"> PRE-OWNED</Link>
                <Link to="refubrished"> REFUBRISHED</Link>
            </div>


            <div className='products'>
                <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8-red.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8-green.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8-green.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8-red.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
            </div>

            <button className='see-more'> See More</button>

            <div className='adds'>
                <img src='/adds/add1.png' alt='product add' />
                <img src='/adds/add2.png' alt='product add' />
                <img src='/adds/add3.png' alt='product add' />
                <img src='/adds/add4.png' alt='product add' />
            </div>

            <Link to="preowned">
                <img className='sub-banner' src="/staticImages/third-banner.png" alt="second banner" />
            </Link>

            <div className='products'>
                <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8-red.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8-green.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
                <SingleProduct image="/iphone8.png" description="iPhone 8 64 GB Unlocked"></SingleProduct>
            </div>

            <Comments></Comments>

        </main>
    );
};

export default Home;