import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { title, price, description, image } = product;
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product_img" />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductCard;
