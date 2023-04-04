import React from 'react'

const Footer1 = () => {
  return (
    <div>
         <footer>
       <div className="footer-p">
        <p style={{fontSize:"15px"}}>Nigeria</p>
       </div>


        <div className="main">
            <div className="main1">
                <a href="#" className="main-a">About</a>
                <a href="#" className="main-a">Advertising</a>
                <a href="#" className="main-a">Business</a>
                <a href="#" className="main-a">How Search works</a>
            </div>

            <div className="main2">
                <i className="fa-solid fa-leaf"></i>
                <a href="#" className="main-a">Carbon neutral since 2007</a>
            </div>

            <div className="main3">
                <a href="#"className="main-a">Privacy</a>
                <a href="#" className="main-a">Terms</a>
                <a href="#" className="main-a">Settings</a>
            </div>
        </div>

       </footer>
    </div>
  )
}

export default Footer1