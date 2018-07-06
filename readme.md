# Valid Shopify Domain
Ensure the provided .myshopify.com domain is valid meaning...
- It ends with .myshopify.com
- Has a store name that is longer than 4 characters and shorter than 60 charcters
- Does not contain characters other than letters (a-z), numbers (0-9), dots, and hyphens.

## Install
```
npm i -S valid-shopify-domain
```

## Usage
```js
import validShopifyDomain from 'valid-shopify-domain';

validShopifyDomain('store.myshopify.com'); // outputs: store.myshopify.com

validShopifyDomain('store.myshpfy.com'); // throws: The provided domain did not end in .myshopify.com

validShopifyDomain('.myshopify.com'); // throws: You only provided ".myshopify.com" as the domain, a valid store name is required

validShopifyDomain('shp.myshopify.com'); // throws: The store name portion of the domain must be atleast 4 characters

validShopifyDomain('1111111111111111111111111111111111111111111111111111111111111.myshopify.com'); // throws: The provided domain contains too many characters (74 max)

validShopifyDomain('my!store.myshopify.com'); // throws: The provided domain must not contain characters other than letters (a-z), numbers (0-9), dots, and hyphens
```