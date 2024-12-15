import React from 'react'
import './PopularSearches.css'

const data = {
  "Makeup" : 'https://www.myntra.com/makeup',
  "Dresses For Girls" : 'https://www.myntra.com/girls-dresses',
  "T Shirts" : 'https://www.myntra.com/girls-dresses',
  "Sandals" : 'https://www.myntra.com/sandals',
  "Headphones" : 'https://www.myntra.com/headphones',
  "Babydolls" :'https://www.myntra.com/babydolls',
  "Blazers For Men" : 'https://www.myntra.com/men-blazers',
  "Handbags" : 'https://www.myntra.com/handbags',
  "Ladies Watches" : 'https://www.myntra.com/women-watches',
  "Bags" : 'https://www.myntra.com/women-watches',
  "Sport Shoes" : 'https://www.myntra.com/sports-shoes',
  "Reebok Shoes" : 'https://www.myntra.com/reebok-shoes',
  "Puma Shoes" : 'https://www.myntra.com/puma-shoes',
  "Boxer" : 'https://www.myntra.com/men-boxers',
  "Wallets" : 'https://www.myntra.com/wallets',
  "Tops" : 'https://www.myntra.com/women-shirts-tops-tees',
  "Earrings" : 'https://www.myntra.com/earrings',
  "Fastrack Watches":'https://www.myntra.com/fastrack-watches',
  "Kurtis" : "https://www.myntra.com/women-kurtas-kurtis-suits",
  "Nike" : 'https://www.myntra.com/nike',
  "Smart Watches" : 'https://www.myntra.com/smart-watches',
  "Titan Watches" : 'https://www.myntra.com/titan-watches',
  "Designer Blouse" : 'https://www.myntra.com/saree-blouse',
  "Gowns" : 'https://www.myntra.com/gown',
  "Rings" : 'https://www.myntra.com/rings',
  "Cricket Shoes" : 'https://www.myntra.com/cricket-shoes',
  "Forever 21" : 'https://www.myntra.com/forever-21',
  "Eye Makeup" : 'https://www.myntra.com/eye-makeup',
  "Photo Frames" : 'https://www.myntra.com/photo-frames',
  "Punjabi Suits" : 'https://www.myntra.com/punjabi-suits',
  "Bikini" : 'https://www.myntra.com/bikini',
  "Myntra Fashion Show" : 'https://www.myntra.com/shop/myntra-fashion-superstar',
  "Lipstick" : 'https://www.myntra.com/lipstick',
  "Saree" : 'https://www.myntra.com/saree',
  "Watches" : 'https://www.myntra.com/watches',
  "Dresses" : 'https://www.myntra.com/dresses',
  "Lehenga" : "https://www.myntra.com/lehengas",
  "Nike Shoes" : 'https://www.myntra.com/nike-shoes',
  "Goggles" : 'https://www.myntra.com/goggles',
  "Bras" : 'https://www.myntra.com/bra',
  "Suit" : 'https://www.myntra.com/men-suits',
  "Chinos" : 'https://www.myntra.com/chinos',
  "Shoes" : 'https://www.myntra.com/shoes',
  "Adidas Shoes" : 'https://www.myntra.com/adidas-shoes',
  "Woodland Shoes" : 'https://www.myntra.com/woodland-shoes',
  "Jewellery" : 'https://www.myntra.com/jewellery',
  "Designers Sarees" : 'https://www.myntra.com/designer-saree'
}

const PopularSearches = () => {
  return (
    <>
      <div className='footer'>
          <div className='popular-searches-heading'>
              <div><h4>POPULAR SEARCHES</h4></div>
              <div ></div>     
          </div>     
      </div>
      <div className='search-terms'>
          {Object.keys(data).map((key) => (
          // <p key={key}>
          //   {key}: {data[key]}
          // </p>
          <>
            <span></span>
            <a style={{textDecoration:'none', color:'grey'}} href={data[key]}>{key}</a> 
            <span style={{color:'grey'}}>{"\u00A0"}|{"\u00A0"}</span>
          </>
        ))}
      </div>
    </>
  )
}

export default PopularSearches
