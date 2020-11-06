import React from 'react';
// import './users.css';

class Users extends React.Component{

  renderUsers(){

    const usersList = this.props.users.map((user, i) => {
      return(
        <div key={i} className={`user ${i === 0 && 'active-user'}`}>{user.name}</div>
      );
    });

    return usersList;
  }


  render(){

    if(this.props.users.length > 0){
      return (
        <section>
          <h4>Only people at the front of the line can adopt! It looks like your name is Homelander, please wait your turn</h4>
          <div className='usersList'>{this.renderUsers()}</div>
        </section>
      );
    }

    else{
      return (
        <>
        </>
      );
    }
    
  }
}

export default Users;