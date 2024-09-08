const postcategory = document.querySelector(".cat-options");
const categoryOptions = postcategory.querySelectorAll("p");
const categoryContents = document.querySelectorAll(".category-content");

categoryOptions.forEach((categoryOption) => {
  categoryOption.addEventListener("click", () => {
    categoryOptions.forEach((p) => p.classList.remove("underline"));
    categoryOption.classList.add("underline");

    // show diff sections
    const selectedCategory = categoryOption.getAttribute("data-category");

    categoryContents.forEach((content) => content.classList.remove("active"));
    document
      .getElementById(`category-${selectedCategory}`)
      .classList.add("active");
  });
});
