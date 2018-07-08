/**
 * Ensure the provided .myshopify.com domain is valid:
 * - Ends with .myshopify.com
 * - Has a store name that is greater than or equal to 4 characters and less than or equal to 60 charcters
 * - Does not contain characters other than letters (a-z), numbers (0-9), dots, and hyphens.
 * @param domain a .myshopify.com domain
 * @returns The domain if valid
 * @throws If invalid
 */
declare const validShopifyDomain: (domain: string) => string;
export = validShopifyDomain;
