import './ProductDescription.scss';

export default function ProductDescription() {
  return (
    <div className="layout__about-pet">
      <div className="product-description__name">
        <span>ИМЯ</span>
      </div>

      <div className="product-description__details"></div>

      <div className="product-description__photos">
        <img
          src="https://res.cloudinary.com/petrescue/image/upload/b_auto:predominant,c_pad,f_auto,h_648,w_648/g1awtmbs1vqnjvd5ba4p.png"
          alt=""
        />
      </div>
    </div>
  );
}
