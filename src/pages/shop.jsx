import React, { useState } from 'react';
import Product from '../components/Product';
import Title from '../components/Title';
import { storeProducts,bagtypes } from '../utils/data';

export default function Shop() {
  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState('category');
  const [products] = useState(storeProducts);



  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(30);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [verified, setVerified] = useState('');
  const [make, setMake] = useState('');
  const [condition, setCondition] = useState('');



  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    setFilter('');
  };

  const filteredProducts = products.filter((product) =>
    product[filterType].toLowerCase().includes(filter.toLowerCase())
  );



   const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  const handleTypeSelection = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleBrandSelection = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleColorSelection = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((selectedColor) => selectedColor !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Trigger useEffect when searchQuery changes
  };

  return (
    <>
    <div className='container mt-5'>
      <Title name='our' title='products' />
      <div className='row'>
        <div className='col-md-3'>
          {/* Filter section */}
        



          <form className="search-form" onSubmit={handleSearch}>
            <div className="input-group p-3 shadow-lg">
              <input
                className="search-input"
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
              />
              <button className="search-button" type="submit">
                <img src='/img/search.png' alt='Search' />
              </button>
            </div>

            <div className="input-group mt-4 p-3 shadow-lg">
              <div className="custom-row-input row">
              <div className="col-6">
                <input
                  className="custom-input"
                  id="min-price"
                  type="text"
                  placeholder="Min Price"
                  value={minPrice}
                  style={{ maxWidth: '100%' }}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                </div>
                <div className="col-6">
                <input
                  className="custom-input"
                  id="max-price"
                  type="text"
                  placeholder="Max Price"
                  value={maxPrice}
                  style={{ maxWidth: '100%' }}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              </div>
           
            </div>




 <div className="input-group mt-4 p-3 shadow-lg">
  <div className="row">
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="sellerType"
        onChange={(e) => setVerified('')}
        value="all"
      />
      <label className="custom-radio-label">Gender</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="sellerType"
        onChange={(e) => setVerified('Verified sellers')}
        value="Verified sellers"
      />
      <label className="custom-radio-label">Women's</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        onChange={(e) => setVerified('Unverified sellers')}
        name="sellerType"
        value="Unverified sellers"
      />
      <label className="custom-radio-label">Men's</label>
    </div>

        <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        onChange={(e) => setVerified('Unverified sellers')}
        name="sellerType"
        value="Unverified sellers"
      />
      <label className="custom-radio-label">Unisex</label>
    </div>
  </div>
</div>





<div className="input-group mt-4 p-3 shadow-lg" style={{ maxHeight: '200px', overflowY: 'auto' }}>
  <div className="row">
    <div className="custom-input-row">
      <input
        className="search-input"
        type="text"
        name="make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Find Make"
      />
      <button className="search-button" type="submit">
        <img src='/img/search.png' alt='Search' />
      </button>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="make"
        onChange={() => setMake('')}
      />
      <label className="custom-radio-label">Show all</label>
    </div>
   {bagtypes.map((option, index) => (
      <div className="custom-input-row" key={index}>
        <input
          className="custom-radio"
          type="radio"
          name="make"
          onChange={(e) => setMake(option)}
          value={option}
        />
        <label className="custom-radio-label">{option}</label>
      </div>
    ))}
  </div>
</div>







 <div className="input-group mt-4 p-3 shadow-lg">
  <div className="row">
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="condition"
        onChange={(e) => setCondition('')}
     
      />
      <label className="custom-radio-label">Show all</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        name="condition"
        onChange={(e) => setCondition('Brand New')}
        value="Brand New"
      />
      <label className="custom-radio-label">Brand New</label>
    </div>
    <div className="custom-input-row">
      <input
        className="custom-radio"
        type="radio"
        onChange={(e) => setCondition('Foreign Used')}
        name="condition"
        value="Foreign Used"
      />
      <label className="custom-radio-label">Used</label>
    </div>

  </div>
</div>













































          </form>
       



        </div>
        <div className='col-md-9'>
          {/* Gallery section */}




                <div className="row" >
        {filteredProducts.map(product => (
                        <div className="product-wrapper mt-2 col-4">
      <div className="card" style={{ background: "white",color:"black" }}>
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            info={product.info}
            img={product.img}
            price={product.price}
            inCart={product.inCart}
          />
              </div>

        </div>
        ))}
      </div>

        </div>
      </div>
    </div>
    </>
  );
}
