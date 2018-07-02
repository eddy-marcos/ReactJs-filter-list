import React from 'react';

class Users extends React.Component {

passUserInput(val){
this.props.getUserinput(val);
}

  render(){
    const { error, isRunning, users, userInput } = this.props.state;

    const filteredUsers = users.filter(user => (
      user.name.first.indexOf(userInput) !== -1 ||
      user.name.last.indexOf(userInput) !== -1 ))

         if (error){
            return <div>error:{error.message}</div>
          }
           else if(!isRunning){
            return <div>Loading...</div>
              }
             else {
               return (
                 <div>
                   <div>
                     <div>
                       <input className="search-box" type="text"
                         placeholder="Search by User Name or Last Name..."
                         onChange={(e) => this.passUserInput(e.target.value)}/>
                       </div>

                       {
                         filteredUsers.map( (user, index) => (
                           <div className="user" key={index}>
                             <span id="text">{ `Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</span>
                             <div><img src={user.picture.medium} alt="user"/></div>
                           </div>
                         ))
                       }
                     </div>
                   </div>
               ); //return
    }//else

}

} //class

 export default Users;
