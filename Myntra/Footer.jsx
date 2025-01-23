import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Online Shopping */}
          <div>
            <h3 className="font-bold mb-4">ONLINE SHOPPING</h3>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Men</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Women</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Kids</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home & Living</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Beauty</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Gift Cards</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Myntra Insider</a></li>
            </ul>
          </div>

          {/* Column 2: Customer Policies */}
          <div>
            <h3 className="font-bold mb-4">CUSTOMER POLICIES</h3>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">T&C</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Track Orders</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Cancellation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Grievance Officer</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="font-bold mb-4">USEFUL LINKS</h3>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Site Map</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Corporate Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Whitehat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Cleartrip</a></li>
            </ul>
          </div>

          {/* Column 4: Download App, Social Links, etc. */}
          <div>
            <div className="mb-4">
              <h3 className="font-bold mb-2">EXPERIENCE MYNTRA APP ON MOBILE</h3>
              <div className="flex space-x-4">
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-12"
                  />
                </a>
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/31/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2">KEEP IN TOUCH</h3>
              <div className="flex space-x-4">
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="h-6" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="h-6" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="YouTube" className="h-6" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="h-6" /></a>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center mb-2">
                <img src="https://img.icons8.com/ios-filled/50/000000/seal.png" alt="100% Original" className="h-6 mr-2"/>
                <p className="text-gray-600">100% ORIGINAL guarantee for all products at myntra.com</p>
              </div>
              <div className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/50/000000/return.png" alt="Return within 14 days" className="h-6 mr-2"/>
                <p className="text-gray-600">Return within 14 days of receiving your order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
