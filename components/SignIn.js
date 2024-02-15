function SignIn() {
    return (
        <>
            <form class="container rounded-top rounded-bottom mt-5">

                <form>
                    <p className='mt-2'>Sign In</p>
                </form>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className='emailError'></div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className='passwordError'></div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                <br></br>
                <div className="signup mt-2">
                    <div>No account? <a class="signup" href="/signUp"> Sign up</a></div>
                </div>
            </form>

        </>
    );
}

export default SignIn;