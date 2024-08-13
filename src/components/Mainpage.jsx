import React from 'react';
import './Mainpage.css'
import menulogo from '../images/menulogo.png';

import images from '../images/work.png';
import wrkimages from '../images/work2.png';
import wrkimages3 from '../images/work3.png';

import logop1 from '../images/logop1.jpg';
import logop2 from '../images/logop2.jpg';
import logop3 from '../images/logop3.jpg';
import logop4 from '../images/logop4.jpg';
import logop5 from '../images/logop5.jpg';

import laptop from '../images/laptop.jpg';
import planettu from '../images/planettu.jpg';
import seetings from "../images/logocreator01.png";

import Weather from '../weather/index'
import { useState } from "react";





const Mainpage = () => {
  const [inputValue, setInputValue] = useState('Bengaluru')
  const [location, setLocation] = useState('Bengaluru')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLocation(inputValue)

  }

  return (
    <div>

      <div className="comp-page" >
        <div >
          <form onSubmit={handleFormSubmit}>
            <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <button type="submit">Update Location</button>
          </form>

          <Weather location={location} />
        </div>

        <div className='centername'>
          <div id='menu'>
            <img src={menulogo} alt="hi" className='three' />
          </div>
          <section id="logo">
            <span className="logo">LOGO</span> <span className="branding">BRANDING</span>

          </section>
          <section id="logodes"><pre>   Begin your own kind of logo creation for</pre><pre>       help designers understand what you want to achieve with your new logo</pre> </section>
          <section id="logodes2">Launch your brand with expertly crafted business cards, eye-catching social media graphics, distinctive app icons, professional letterheads, and more.</section>
          <button className="custom-button">Create my logo</button>
        </div>
      </div>

      <div className='proj2'>
        <div >
          <div>

          </div>
        </div>
      </div>


      <div id="cc" className="ccs" data-ride="c">
        <div className="c-inner">
          <div className="ccpiter">
            <img className="abc" src={images} alt="First slide" />
          </div>
          <div className="c-item">
            <img className="" src={wrkimages} alt="Second slide" />
          </div>
          <div className="c-item">
            <img className="" src={wrkimages3} alt="Third slide" />
          </div>
        </div>
        <a className="c-control-prev" href="#cc" role="button" data-slide="prev">
          <span className="ccpi" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="ccn" href="#cc" role="button" data-slide="next">
          <span className="cci" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="logos">
        <table border="">
          <tbody>
            <tr>
              <td>
                <img src={logop1} style={{ width: '7.063em' }} alt="Logo 1" className="logos__img" />
              </td>
              <td>
                <img src={logop2} style={{ width: '4.625em' }} alt="Logo 2" className="logos__img" />
              </td>
              <td>
                <img src={logop3} style={{ width: '4.875em' }} alt="Logo 3" className="logos__img" />
              </td>
              <td>
                <img src={logop4} style={{ width: '7.563em' }} alt="Logo 4" className="logos__img" />
              </td>
              <td>
                <img src={logop5} style={{ width: '7.063em' }} alt="Logo 5" className="logos__img" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>




      <div>
        <section id="midbox">
          <section id="box">
            <div id="create">
              Effortlessly Build a Stunning Brand on a Budget.</div>
            <div id="create2">Kickstart your business with an array of ready-made design assets at your disposal.</div>



            <section className="list">
              <ul>
                <li>Tailored Logo Creations</li>
                <li>Icons for Social Media</li>
                <li>Business Card Layouts</li>
                <li>Dynamic Animations</li>
                <li>Letterhead Designs</li>
                <li>Templates for Social Media Posts</li>
                <li>Presentation Slide Decks</li>
                <li>Brand Identity Manuals</li>

              </ul>
            </section>
          </section>
        </section>


        <div>

          <section id="box2">

            <img src={laptop} className='imgbox1' alt="oi" />
          </section>
        </div>

        <div>
          <section id="box3">
            <img src={planettu} className='imgbox2' alt="op" />
          </section>
        </div>
      </div>

      <button className="button2">View sample assets.</button>


      <div className="box4">
        <div className="sidebox">
          <div className="sidebox-title">The one logo maker that offers free customization.</div>
          <div className="sidebox-note">We offer personalized logo customization with every package purchase.</div>
        </div>
      </div>

      <div className="mblpage">
        <div className="mblpagelist">

          <div className="mblpagelistitem mblpageitemp1">

            <h3>ustomer</h3>


            <div className="mblpagelistitem-note">
              Kindly position the icon within a hexagon, update the text color to green, and eliminate the tagline.        </div>
          </div>

          <div className="mblpagelistitem mblpagelistitem2">

            <h3>priya</h3>

            <div className="mblpagelistitem-note">
              <div className="mblpagelistitem-extra">

                <div className="mmblpagelistitem-txt">
                  Absolutely, I'll make the change.
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div id='patch1'>
            <div id='patch2'>
            </div>
          </div>
          
      <div className="inst">
        <div className="instb">
          <div className="instm">
            <div className="instt">Think it,Customize it,and Use it.  </div>
            <div className="inst__note">Right in your browser, no designer or software needed</div>
          </div>
          <div className="instv">
            <div className="instv-box">
              <img src={seetings} alt="img" className="instv-img" />
            </div>
            <div className="instv-note">
              <div className="inst1">
                <div className="instv-title">Download the logo in multiple formats</div>
                <div className="instv-text">such as SVG, EPS, PNG, and PDF.</div>
              </div>
              <div className="inst2">
                <div className="instv-title">Adjust text and image size</div>
                <div className="instv-text">Perfectly sized for web and print</div>
              </div>
              <div className="inst3">
                <div className="instv-title">Easily edit and customize</div>
                <div className="instv-text">Double click to edit text</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='Customer2'>

        <div className='Customer'>

          {/* <div id='smallbox'>
            <div id='smallbox2'> */}


        </div>
      </div>

      <div class="features">
        <div class="features__box">
          <div class="features__list">
            <div class="features__item features__item--s1">
              <div class="features__item-cover"></div>
              <div class="features__item-box">
                <div class="features__item-title">No more designer anxiety</div>
                <div class="features__item-note">Get your logo instantly, not in weeks.</div>
              </div>
            </div>
            <div class="features__item features__item--s2">
              <div class="features__item-cover"></div>
              <div class="features__item-box">
                <div class="features__item-title">Need a tweak to your design?</div>
                <div class="features__item-note">We’ll do it for you, absolutely free</div>
              </div>
            </div>
            <div class="features__item features__item--s3">
              <div class="features__item-cover"></div>
              <div class="features__item-box">
                <div class="features__item-title">No monthly charges</div>
                <div class="features__item-note">Pay once, get access to our branding tools forever.</div>
              </div>
            </div>
            <div class="features__item features__item--s4">
              <div class="features__item-cover"></div>
              <div class="features__item-box">
                <div class="features__item-title">Full copyright included</div>
                <div class="features__item-note">For use in commercial and personal projects</div>
              </div>
            </div>
            <div class="features__item features__item--s5">
              <div class="features__item-cover"></div>
              <div class="features__item-box">
                <div class="features__item-title">Unlimited revisions</div>
                <div class="features__item-note">Modify your logo at any time, even after purchase</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Mainpage;