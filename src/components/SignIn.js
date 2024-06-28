import React from "react";

function SignIn() {

    return(
      <div>
        <div>
          <h1><br></br>Sign In</h1>
          </div>
        <div class="container d-flex justify-content-center" >
        <form>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" placeholder="example@example.com" style={{paddingRight:100}}/>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="********" style={{paddingRight:100}}/>
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
    </div>
    </div>
    );
};
export default SignIn;