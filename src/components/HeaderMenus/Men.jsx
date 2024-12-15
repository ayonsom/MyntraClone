import React from "react";

const Men = () => {
  const Topwear = [
    { name: "T-Shirts", url: "https://www.myntra.com/men-tshirts" },
    { name: "Casual Shirts", url: "https://www.myntra.com/men-casual-shirts" },
    { name: "Formal Shirts", url: "https://www.myntra.com/men-formal-shirts" },
    { name: "Sweatshirts", url: "https://www.myntra.com/men-sweatshirts" },
    { name: "Sweaters", url: "https://www.myntra.com/men-sweaters" },
    { name: "Jackets", url: "https://www.myntra.com/men-jackets" },
    { name: "Blazers & Coats", url: "https://www.myntra.com/men-blazers-coats" },
    { name: "Suits", url: "https://www.myntra.com/men-suits" },
    { name: "Rain Jackets", url: "https://www.myntra.com/men-rain-jackets" },
  ];

  const listItemStyle = {
    listStyleType: "none",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    // paddingBottom:'7px'
    marginBottom : "10px"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    transition: "font-weight 0.3s, color 0.3s", // Smooth transition effect
  };

  const hoverStyle = {
    fontWeight: "bold",
    color: "#333", // Darker color
  };

  return (
    <div style={{border:'1px solid red', width:'130px'}}>
      <a style={{textDecoration:"none",color:'#ee5f73'}} href="https://www.myntra.com/men-topwear"><h4 style={{ marginLeft:'4px'}}>Topwear</h4></a>
      <ul style={{ listStyleType: "none", padding: '5px' }}>
        {Topwear.map((item, index) => (
          <li 
            key={index}
            style={listItemStyle}
            onMouseEnter={(e) => {
              e.target.style.fontWeight = hoverStyle.fontWeight;
              e.target.style.color = hoverStyle.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.fontWeight = "normal";
              e.target.style.color = "inherit";
            }}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              {item.name}
            </a>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Men;
