"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ensure the provided domain is valid:
 * - Ends with .myshopify.com
 * - Has a store name that is longer than 4 characters and shorter than 60 charcters
 * - Does not contain characters other than letters (a-z), numbers (0-9), dots, and hyphens.
 * @param domain a .myshopify.com domain
 * @returns The domain if valid
 * @throws If invalid
 */
var validShopifyDomain = function (domain) {
    if (domain.slice(-14) !== '.myshopify.com') {
        throw new Error('The provided domain did not end in .myshopify.com');
    }
    if (domain.length < 15) {
        throw new Error('You only provided ".myshopify.com" as the domain, a valid store name is required');
    }
    if (domain.length < 18) {
        throw new Error('The store name portion of the domain must be atleast 4 characters');
    }
    if (domain.length > 74) {
        throw new Error('The provided domain contains too many characters (74 max)');
    }
    if (!/^[a-z0-9.-]*$/g.test(domain)) {
        throw new Error('The provided domain must not contain characters other than letters (a-z), numbers (0-9), dots, and hyphens');
    }
    return domain;
};
exports.default = validShopifyDomain;
