import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landing-page.css';



class LandingPage extends React.Component{


  render(){
    return(
      <section className="landing-page">
        <div className='image-container'>
          <img src='https://i2.wp.com/freepngimages.com/wp-content/uploads/2014/04/dog_and_cat_1_2.png?fit=472%2C261'
            alt='dog-cat-pic'
          />
        </div>
        <div className='landing-page-container'>
          <p>Welcome to Petful, here you can rescue a cat or a dog! You'll have to wait your turn however, and our animals are available on a FiFo manner. 
          </p>
          <Link to='/adoption'>Adopt Now!</Link>
        </div>
      </section>
    );
  }
}

export default LandingPage;