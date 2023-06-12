const createRecipeDetailTemplate = (nutrition, recipe) => `
    <div class="container detail-makanan-container p-5">
        <div class="row mb-5">
            <div class="col-lg-6">
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
            </div>
            <div class="col-lg-6">
                <h2>${recipe.strMeal}</h2>
            </div>
        </div>
        <div class="gizi-perporsi">
            <h5>Gizi per porsi:</h5>
            <ul>
                <li>Kalori: ${nutrition[0].calories || '-'} </li>
                <li>Karbohidrat: ${nutrition[0].carbohydrates_total_g || '-'}</li>
                <li>Protein: ${nutrition[0].protein_g || '-'}</li>
                <li>Lemak: ${nutrition[0].fat_total_g || '-'}</li>
                <li>Serat: ${nutrition[0].fiber_g || '-'}</li>
            </ul>
        </div>
    </div>
`;

const createRecipeCategoryTemplate = (recipe) => `
<div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-3">
<div class="card card-makanan rounded-5">
    <img src="${recipe.strMealThumb}" class="card-img-top" alt="${recipe.strMeal}">
    <div class="card-body">
        <h5 class="card-title text-center"><a href="/#/detail/${recipe.idMeal}" class="text-decoration-none text-secondary fw-bold categoryTitle">${recipe.strMeal}</a></h5>
    </div>
</div>
</div>
`;

const createAllCategoryTemplate = (recipe) => `
<div class="col-lg-3 col-md-6 col-sm-12 justify-content-center mb-3">
<div class="card card-makanan rounded-5">
    <img src="${recipe.strCategoryThumb}" class="card-img-top" alt="${recipe.strCategory}">
    <div class="card-body">
        <h5 class="card-title text-center"><a href="/#/category/${recipe.strCategory}" class="text-decoration-none text-secondary fw-bold categoryTitle">${recipe.strCategory}</a></h5>
        <!-- <p class="card-text overflow-hidden">${recipe.strCategoryDescription}</p> -->
    </div>
</div>
</div>
`;

export {
  createRecipeDetailTemplate,
  createRecipeCategoryTemplate,
  createAllCategoryTemplate,
};
