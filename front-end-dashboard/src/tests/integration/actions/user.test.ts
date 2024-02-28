const userUrl = `http://localhost:8000/api/users`;

test('GET list of Users from DB, should return 200', async () => {
  const res = await fetch(userUrl, {
    method: 'GET',
  });
  expect(res.status).toBe(200);
  const data = await res.json();
});
