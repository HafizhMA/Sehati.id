/* eslint-disable no-empty-function */
const Forum = {
  async render() {
    return `
    <section id="question">
        <div class="container-lg">

            <div class="text-center">
                <h2 style="color: #1C9509;">Question</h2>
            </div>
            <div class="row justify-content-center my-3">
                <div class="col-lg-10 bg-white rounded-3" style="padding: 40px;">
                    <form>
                        <label for="subject" class="form-label fw-bold">CARI DAN PILIH TOPIK</label>
                        <div class="mb-4 input-group">
                            <select class="form-select" id="subject">
                                <option value="diet" selected>diet</option>
                                <option value="makanan">makanan</option>
                                <option value="olahraga">olahraga</option>
                            </select>
                        </div>
                        <label for="judul" class="form-label fw-bold">JUDUL</label>
                        <div class="mb-4 input-group">
                            <input type="text" id="judul" class="form-control" />
                        </div>
                        <label for="" class="form-label fw-bold">DETAIL PERTANYAAN</label>
                        <div class="mb-4form-floating">
                            <textarea class="form-control" id="query" style="height: 140px"
                                placeholder="query"></textarea>
                        </div>
                        <div class="mb-4 text-end mt-3">
                            <button type="submit" class="btn" style="padding: 10px 20px;">Cancel</button>
                            <button type="submit" class="btn"
                                style="color: white; background-color: #1C9509; padding: 10px 20px;">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {},
};

export default Forum;
