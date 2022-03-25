import React from 'react';
import ReactDOM from 'react-dom';
class Loginform extends React.Component{
 render(){
   return (
   <div class="row">
     <div class="col-md-8 offset-md-2">
       <form>
         <div class="form-group">
           <h1 style={{color:"Blue",textAlign:"center"}}>Login</h1>
           <label class="skills" for="subject">Username</label>
           <input type="text" id="username" class="form-control" required/>
         </div>
         <div>
         <label class="skills" for="Body">Password</label>
           <input type="password" id="pwd" class="form-control" required/>

         </div>
         <br/>
         <input type="submit" value="login" id="navigation" class="btn btn-primary"/>
       </form>
     </div>
     
   </div>
   );
 }
}

ReactDOM.render(<Loginform />,document.getElementById('root'));
