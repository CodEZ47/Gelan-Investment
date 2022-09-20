import './footer-style.css'

const Footer = () => {
    return (
        <footer class="footer">
  	        <div class="footer-container">
  	 	        <div class="footer-box">
  	 		        <div class="footer-elements">
  	 			        <h4>Information</h4>
  	 			        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
  	 		        </div>

  	 		        <div class="footer-elements">
  	 			        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Investment Process</a></li>
                        </ul>
  	 		        </div>

                    <div class="footer-elements footer-social-elements">
                        <h4>Social Media</h4>
                        <div class="footer-social-links">
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