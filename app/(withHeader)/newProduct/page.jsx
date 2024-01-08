"use client";

export default function AddNewProduct() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const price = parseFloat(formData.get("price"));
    console.log(typeof price);
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");
    const productDetails = {
      title: name,
      price,
      description,
      imageUrl,
      userId: "sjqGyTuY3YOLtJguenpgZUewQdy1",
    };
    const response = await fetch("https://plant-e-store-e642f-default-rtdb.firebaseio.com/products.json", { method: "POST", body: JSON.stringify(productDetails) });
    console.log("response: ", response);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-xs mx-auto sm:max-w-xl mt-4">
      <label htmlFor="imageUrl">Image Url</label>
      <input type="text" id="imageUrl" name="imageUrl" placeholder="https://google.com/image1" required />
      <label htmlFor="name">Product Name</label>
      <input type="text" placeholder="Plant Name" id="name" name="name" required /> <br />
      <label htmlFor="price">Product Price</label>
      <input type="number" placeholder="$9.99" id="price" name="price" required /> <br />
      <label htmlFor="description">Product Description</label>
      <textarea name="description" id="description" rows="10" placeholder="what is this product" required></textarea> <br />
      <input type="submit" value="Add Product" className="bg-green-300 cursor-pointer font-bold text-green-800" />
    </form>
  );
}
