import React from 'react';
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from 'react-icons/bs';
import footerBg from "./Asset/footer/footer-bg.jpg";
import logo2 from "./Asset/footer/logo-two.png";


const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>

            <footer
                className="footer  bottom-0 absolute lg:mt-10 mt-5  p-10 text-white bg-base-200 "
                style={{ background: `url(${footerBg})`, backgroundSize: 'cover', color: 'white', backgroundRepeat: "no-repeat", position: "relative", backgroundPosition: "center", zIndex: '5', padding: "70px 0", opacity: '0.9' }}
            >
                <div >
                    <img src={logo2} alt="" />
                    <span className='py-3 w-80'>Our robotic Manufacture always try to give our customers unique and high quality product.we always provide our best service</span>
                    <div>
                        <div className='grid grid-flow-col gap-4 mx-auto justify-between items-center'>

                            <a className='text-2xl bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsFacebook /></a>
                            <a className='text-2xl bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsTwitter /></a>
                            <a className='text-2xl bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsPinterest /></a>
                            <a className='text-2xl bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-orange-500' href='http://www.google.com'><BsLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-2xl font-bold">Get In Touch</span>
                    <p><strong>Phone</strong>  <br /><span>0888555</span></p>
                    <p><strong>Email</strong> <br /><span>rifatjahan823@gmail.com</span></p>
                    <p><strong>Address</strong> <br /><span>3254-425 NW-2nd Ave, Miami USA</span></p>
                </div>
                <div>
                    <span className="text-2xl font-bold">Useful Links</span>
                    <a className="link link-hover" href='/'>Home</a>
                    <a className="link link-hover" href='/'>About</a>
                    <a className="link link-hover" href='/'>Service </a>
                    <a className="link link-hover" href='/'>Blog </a>
                </div>
                <div>
                    <span className="text-2xl font-bold">Newsletter</span>
                    <div className="form-control w-80">
                        <p>We support to customize minor request as javascript conflict, css issue, etc. Enjoy the ultimate web design themes. Every layout is super flexible, amazingly powerful and visual by nature.</p>

                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* 2nd footer */}

            <footer className="footer bottom-0 absolute footer-center p-4 bg-slate-700 text-white">
                <div>
                    <p>Copyright &copy; {getYear()} - Robtic.Rifat Jahan for Robotic Manufacturers</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;