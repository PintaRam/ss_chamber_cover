window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    
    const name = params.get('name');
    let image = params.get('image'); // e.g., "Imagess/frp12.png"
    
    if (image && !image.startsWith('../')) {
        image = '../' + image; // Fix path because HTML folder
    }

    const price = params.get('price');
    const mrp = params.get('mrp');
    const discount = params.get('discount');
    const delivery = params.get('delivery');

    // Product descriptions
    const descriptions = {
        "Laksh FRP Manhole Cover - 28X28 5 Ton": "Heavy-duty FRP manhole cover suitable for industrial areas. Durable, corrosion-resistant, and easy to install.",
        "Stainless Steel Recessed SS Manhole cover - 24X24 3mm": "Premium stainless steel recessed manhole cover with high strength and corrosion resistance. Ideal for commercial use.",
        "Laksh Influence SS chamber Cover - 24X24 3MM": "Elegant SS chamber cover designed for durability and aesthetics. Perfect for residential and commercial setups.",
        "Stainless Steel Access SS Sump cover - 24X24 3mm 202": "Reliable stainless steel sump cover with excellent corrosion resistance and long-lasting durability.",
        "Stainless Steel Chequered SS Manhole cover - 24X24 3mm 304": "Stylish chequered design with anti-slip surface, providing both safety and strength.",
        "Laksh FRP Manhole Cover - 18X18 5 Ton": "Compact FRP manhole cover designed for light-duty applications, corrosion-resistant and easy to handle.",
        "Laksh FRP Gully Cover - 24X24 5 Ton": "High-quality FRP gully cover with excellent strength and durability for urban drainage systems.",
        "Stainless Steel Recessed SS Chamber cover - 24X24 5mm 304": "Heavy-duty recessed chamber cover made from premium stainless steel for high-traffic areas.",
        "Laksh FRP Manhole Cover - 28X28 10 Ton": "Extra-strong FRP manhole cover capable of handling 10-ton loads, ideal for industrial environments.",
        "FRP Manhole cover 25Ton": "Industrial-grade FRP manhole cover for extreme load-bearing requirements with long-term durability.",
        "SS Access Manhole cover - 24X24 3mm": "Standard stainless steel access cover with high resistance to corrosion and wear.",
        "SS Laksh Influence Manhole cover - 24X24 3MM": "Premium design with reinforced structure for long-lasting performance.",
        "FRP Manhole cover 5Ton": "Light-duty FRP cover for residential and commercial installations, corrosion-resistant and easy to install.",
        "FRP Manhole cover 10Ton": "Mid-duty FRP cover suitable for moderate load areas with excellent durability.",
        "FRP Gully cover 5Ton": "Specialized FRP gully cover for urban drainage, lightweight yet strong and corrosion-resistant.",
        "SS Chequered Manhole cover - 24X24 3mm": "Anti-slip stainless steel cover with a chequered surface for safety and style.",
        "SS Recessed Manhole cover - 24X24 5mm": "Durable recessed cover made for industrial and commercial use, highly resistant to wear.",
        "Laksh FRP Manhole Cover - 30X30 5 Ton": "Large FRP manhole cover for industrial sites, easy to handle and corrosion-resistant.",
        "Stainless Steel Access SS Chamber Cover - 27X27 3mm": "High-quality stainless steel access cover with excellent load-bearing capacity.",
        "Laksh Influence FRP Chamber Cover - 24X24 5 Ton": "Premium FRP chamber cover with reinforced structure for safety and durability."
    };

    const description = descriptions[name] || "Detailed description not available for this product.";

    // Set product details on page
    document.getElementById('product-name').textContent = name || 'Product Name';
    document.getElementById('product-image').src = image || '../Imagess/default.png';
    document.getElementById('product-image').alt = name || 'Product Image';
    document.getElementById('product-price').textContent = price ? `₹${price}` : '₹0';
    document.getElementById('product-mrp').textContent = mrp ? `₹${mrp}` : '₹0';
    document.getElementById('product-discount').textContent = discount || '0% OFF';
    document.getElementById('product-delivery').textContent = delivery || 'Delivery Info';
    document.getElementById('product-description').textContent = description;

    // WhatsApp Buy Now button
    const buyBtn = document.getElementById('buy-now-btn');
    buyBtn.addEventListener('click', () => {
        const phoneNumber = "916361706908"; // WhatsApp number with country code
        const message = `Hello! I'm interested in buying this product:%0A
*Product Name:* ${name}%0A
*Price:* ₹${price}%0A
*MRP:* ₹${mrp}%0A
*Discount:* ${discount}%0A
*Delivery:* ${delivery}%0A
*Description:* ${description}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    });
});
