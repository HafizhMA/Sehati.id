/* eslint-disable no-empty-function */
const Home = {
  async render() {
    return `
    <section id="hero" style="background: rgb(0, 152, 91); background: linear-gradient(162deg, rgba(0, 152, 91, 1) 0%, rgba(68, 106, 71, 1) 54%, rgba(195, 204, 196, 1) 100%);">
        <div class="container min-vh-100 d-flex align-items-center justify-content-between">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-6">
                    <div class="herotitle mb-5">
                        <h1>NUTRITION IS THE KEY TO UNLOCKING YOUR FULL POTENTIAL</h1>
                        <p>Empowering individuals to unlock their full potential through the power of nutrition</p>
                    </div>
                    <div class="herobutton d-flex align-items-center">
                        <button class="buttons">
                            <p class="pbutton">explore</p>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="./assets/gambarhero.png" alt="makanan">
                </div>
            </div>
        </div>
    </section>
    <section id="aboutus">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 mb-3">
                        <h2 class="mb-5">About <strong>Sehati.id</strong></h2>
                        <p>Kami hadir untuk memberikan solusi yang tepat bagi Anda dalam mengelola status gizi dan
                            mencapai gaya hidup sehat. Dengan dukungan ahli gizi terbaik di Indonesia, kami menyediakan
                            layanan konsultasi online yang personal dan rekomendasi diet yang sesuai dengan kebutuhan
                            Anda.</p>
                        <p> Temukan artikel-artikel informatif tentang gizi kesehatan, nutrisi, dan tips hidup sehat di
                            blog kami. Kami juga menyediakan kuis interaktif yang akan menguji pengetahuan Anda seputar
                            gizi dan membantu Anda memahami pentingnya pola makan yang seimbang.</p>
                        <!-- <button type="button" class="btn btn-outline-primary">Lorem ipsum dolor sit.</button> -->
                    </div>
                    <div class="col-lg-6 col-md-12 text-center">
                        <img src="./assets/logohijau.png" alt="logo" class="aboutuslogo">
                    </div>
                </div>
            </div>
        </section>

        <section id="teams">
        <div class="container">
            <div class="row text-center mb-3">
                <div class="col-12" style="color: #1C9509;">
                    <h3>Meet Our</h3>
                    <h2><strong>Sehati.id Team</strong></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/profile.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-text fw-bold">Deni</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/profile.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-text fw-bold">Aini</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/profile.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-text fw-bold">Hafizh</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/profile.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-text fw-bold">Alan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {},
};

export default Home;
