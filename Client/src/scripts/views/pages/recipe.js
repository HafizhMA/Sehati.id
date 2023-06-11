/* eslint-disable no-empty-function */
// import * from '../../../public/assets/herobg2.png'
const Recipe = {
  async render() {
    return `
    <section id="heroRecipe" class="min-vh-100 d-flex align-items-center justify-content-center">
        <div class="container">
            <form class="d-flex justify-content-center" role="search">
                <input class="form-control me-4 w-75" type="search" placeholder="Search" aria-label="Search">
                <button class="btn text-white" type="submit" style="background-color: #00985B; padding: 10px 20px;">
                    <h5>Search</h5>
                </button>
            </form>
        </div>
    </section>
    <section id="recipecard">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-3">
                        <div class="card card-makanan rounded-5">
                            <img src="../Client/src/public/assets/recipe.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">HAMBURGER</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-3">
                        <div class="card card-makanan rounded-5">
                            <img src="../Client/src/public/assets/recipe2.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">FRIED CHICKEN</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-3">
                        <div class="card card-makanan rounded-5">
                            <img src="../Client/src/public/assets/recipe3.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">PASTA</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-3">
                        <div class="card card-makanan rounded-5">
                            <img src="../Client/src/public/assets/recipe4.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">SALAD</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="detail-makanan">
        <div class="container detail-makanan-container p-5">
            <div class="row mb-5">
                <div class="col-lg-6">
                    <img src="../Client/src/public/assets/recipe2kotak.png" alt="">
                </div>
                <div class="col-lg-6">
                    <h2>FRIED CHICKEN</h2>
                    <P>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos.
                        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos.</P>
                </div>
            </div>
            <div class="gizi-perporsi">
                <h5>Gizi per porsi:</h5>
                <ul>
                    <li>Kalori: 280-350 kkal</li>
                    <li>Karbohidrat: 0-5 gram</li>
                    <li>Protein: 25-30 gram</li>
                    <li>Lemak: 18-25 gram</li>
                    <li>Serat: 0 gram</li>
                </ul>
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {},
};

export default Recipe;
