import test from 'ava';
import validShopifyDomain from '../dist';

test('Providing a valid domain returns the domain', t => {
	t.is(validShopifyDomain('store.myshopify.com'), 'store.myshopify.com');
	t.is(validShopifyDomain('store.store.myshopify.com'), 'store.store.myshopify.com');
	t.is(validShopifyDomain('store-store.myshopify.com'), 'store-store.myshopify.com');
	t.is(validShopifyDomain('store-123.myshopify.com'), 'store-123.myshopify.com');
});

test('Providing a domain that does not end in .myshopify.com throws an error', t => {
	const domain = 'store.myshpfy.com';
	const message = 'The provided domain did not end in .myshopify.com';
	t.throws(() => validShopifyDomain(domain), message);
});

test('Only providing .myshopify.com with no store name throws an error', t => {
	const domain = '.myshopify.com';
	const message = 'You only provided ".myshopify.com" as the domain, a valid store name is required';
	t.throws(() => validShopifyDomain(domain), message);
});

test('Providing a store name that is too short causes an error', t => {
	const domain = 'shp.myshopify.com';
	const message = 'The store name portion of the domain must be atleast 4 characters';
	t.throws(() => validShopifyDomain(domain), message);
});

test('Providing a domain with too many characters throws an error', t => {
	let domain = '1111111111111111111111111111111111111111111111111111111111111.myshopify.com';
	const message = 'The provided domain contains too many characters (74 max)';
	t.throws(() => validShopifyDomain(domain), message);
});

test('Providing a domain with invalid characters causes an error', t => {
	const message = 'The provided domain must not contain characters other than letters (a-z), numbers (0-9), dots, and hyphens';
	t.throws(() => validShopifyDomain('the awesome store.myshopify.com'), message);
	t.throws(() => validShopifyDomain('my!store.myshopify.com'), message);
	t.throws(() => validShopifyDomain('my*store.myshopify.com'), message);
	t.throws(() => validShopifyDomain('_store.myshopify.com'), message);
});