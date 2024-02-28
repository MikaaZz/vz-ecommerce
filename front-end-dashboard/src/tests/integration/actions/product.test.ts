const productsUrl = `http://localhost:8000/api/products`;

test('GET list of products from DB, should return 200', async () => {
  const res = await fetch(productsUrl, {
    method: 'GET',
  });
  expect(res.status).toBe(200);
  const data = await res.json();
});
