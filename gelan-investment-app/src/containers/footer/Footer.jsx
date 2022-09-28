import './footer-style.css'

const Footer = () => {
    return (
        <footer className="footer">
  	        <div className="footer-container">
  	 	        <div className="footer-box">
  	 		        <div className="footer-elements">
  	 			        <h4>Information</h4>
  	 			        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
  	 		        </div>

  	 		        <div className="footer-elements">
  	 			        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Investment Process</a></li>
                        </ul>
  	 		        </div>

                    <div className="footer-elements footer-social-elements">
                        <h4>Social Media</h4>
                        <div className="footer-social-links">
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>
  	 	        </div>
  	        </div>
        </footer>
    )
}

export default Footer