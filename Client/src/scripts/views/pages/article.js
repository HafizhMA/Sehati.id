/* eslint-disable no-empty-function */
const Article = {
  async render() {
    return `
    <section id="artikel">
        <div class="container">
            <div class="judulartikel mb-3">
                <h3>ARTIKEL</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/artikel1.png" class="card-img-top" alt="..." height="300px">
                        <!-- <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/artikel2.png" class="card-img-top" alt="..." height="300px">
                        <!-- <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card">
                        <img src="./assets/artikel3.png" class="card-img-top" alt="..." height="300px">
                        <!-- <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {},
};

export default Article;
