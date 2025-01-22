export const AUTHTOKEN = "ecommerce_shop_authToken";
export const GLOBAL_REQUEST_TIMEOUT = 10000;

export const ROUTES = {
  HOME: {
    path: "/home",
    description: "Welcome to [Company Name]! Discover our wide range of products and exclusive offers, crafted to meet your needs.",
    keywords: "home, online shopping, best deals, [industry-specific keywords], [Company Name]",
    title: "Welcome to [Company Name] - Your One-Stop Online Shopping Destination",
    ogDescription: "Explore [Company Name] for the latest products and exclusive deals. Shop now and enjoy quality, convenience, and great value!",
    ogUrl: "https://www.[yourwebsite].com/home",
  },
  PRODUCTSSEARCH: {
    path: "/products-search",
    description: "Welcome to [Company Name]! Discover our wide range of products and exclusive offers, crafted to meet your needs.",
    keywords: "home, online shopping, best deals, [industry-specific keywords], [Company Name]",
    title: "Welcome to [Company Name] - Your One-Stop Online Shopping Destination",
    ogDescription: "Explore [Company Name] for the latest products and exclusive deals. Shop now and enjoy quality, convenience, and great value!",
    ogUrl: "https://www.[yourwebsite].com/home",
  },
};

export const APIROUTES = {
  //+------------------------------------------------------------------+
  //| Product Search                                          
  //+------------------------------------------------------------------+
  GETPRODUCTSBYCATEGORYANDPAGE: "/Shop/Page/GetProductsByCategoryAndPage",

  //+------------------------------------------------------------------+
  //| Home                                          
  //+------------------------------------------------------------------+
  GETHOMEPAGEASSETS: "/Shop/Page/GetHomePageAssets",
  GETHOMEPAGEPRODUCTSANDBRANDS: "/Shop/Page/GetHomePageProductsAndBrands",
}