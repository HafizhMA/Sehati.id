/* eslint-disable no-empty-function */

const Login = {
  async render() {
    return `
    <section class="authContainer">
    <div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="text">
                <h1>LOGIN</h1>
                <div class="textp w-50">
                    <p class="my-3 fw-light">Sign In To Continue</p>
                </div>
                <img class="logocontainer" src="./assets/logo.png" alt="logo" width="400px">
            </div>
        </div>
        <div class="col-lg-6">
            <div class="registerbox rounded-4">
                <div class="title-box text-center">
                    <h2 class="mb-5">Sign In</h2>
                </div>
                <form>
                    <div class="mb-3 w-75 mx-auto">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control rounded-5" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 w-75 mx-auto">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control rounded-5" id="exampleInputPassword1">
                    </div>
                    <div class="submitbox text-center">
                        <h5><a href="" class="text-decoration-none text-black">lupa kata sandi?</a></h5>
                        <button type="submit" class="btn btn-success rounded-5 w-25">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    </section>
    `;
  },

  async afterRender() {},
};

export default Login;
