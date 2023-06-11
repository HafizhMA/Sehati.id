/* eslint-disable no-empty-function */
const Register = {
  async render() {
    return `
    <section class="authContainer">
    <div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="text">
                <h1>Create a new account</h1>
                <div class="textp w-50">
                    <p class="my-3 fw-light">Already registered? <a href=""
                            class="text-decoration-none text-white fw-bold"><strong>Login</strong></a>
                    </p>
                    <img class="logocontainer" src="./assets/logo.png" alt="logo" width="400px">
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="registerbox rounded-4">
                <div class="title-box text-center">
                    <h2 class="mb-5">Daftar Baru</h2>
                </div>
                <form>
                    <div class="mb-3 w-75 mx-auto">
                        <label for="exampleInputName" class="form-label">Nama Lengkap</label>
                        <input type="email" class="form-control rounded-5" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 w-75 mx-auto">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control rounded-5" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 w-75 mx-auto">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control rounded-5" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check w-75 mx-auto">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label ms-3" for="exampleCheck1">Saya setuju dengan syarat dan
                            ketentuan</label>
                    </div>
                    <div class="submitbox text-center">
                        <button type="submit" class="btn btn-success rounded-5 w-25">REGISTER</button>
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

export default Register;
