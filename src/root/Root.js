import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import LandingPage from '../routes/landing-page'
import Adoption from '../routes/adoption-page'
import Adopted from '../routes/adopted-page'

export default function Root() {
  return <section>
    <header>
      
    <nav>
      <NavLink to='/'> 
        <h1>Petful</h1>
      </NavLink>
      <NavLink to='/adoption'>Adopt a pet</NavLink>
      {/* <NavLink to='adopted'>Adopted pets</NavLink> */}
    </nav>
    </header>

    <main>
      <Route exact path='/' component={LandingPage} />
      <Route path='/adoption' component={Adoption} />
      {/* <Route path='/adopted' componenet={Adopted} /> */}
    </main>
  </section>
}

