function SignUp() {
    return (
        <>
            <form class="container rounded-top rounded-bottom mt-5">

                <form>
                    <p className='mt-2'>Sign up form</p>
                    <div class="row mt-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                    </div>
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

                <div class="form-group">
                    <input type="password" class="form-control mt-2" id="exampleInputPassword2" placeholder="Confirm" />
                </div>
                <div className='passwordError'></div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>

            </form>

        </>
    );
}

export default SignUp;