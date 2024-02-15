import { db } from '../src/utils/db.server';

type User = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
};

type Product = {
  name: string;
  description: string;
  price: number;
};

function getUsers(): Array<User> {
  return [
    {
      firstName: 'Mikhael',
      lastName: 'Zimmermann',
      email: 'mikhael@email.com',
      address: 'casa do caralho',
    },
    {
      firstName: 'Vini',
      lastName: 'Zimmermann',
      email: 'vinil@email.com',
      address: 'casa do baralho',
    },
  ];
}

function getProducts(): Array<Product> {
  return [
    {
      name: 'Plasma',
      description: 'Oculos xave',
      price: 2200,
    },
    {
      name: 'Romeo',
      description: 'Oculos xave',
      price: 3200,
    },
  ];
}

async function main() {
  await Promise.all(
    getUsers().map((u) =>
      db.user.create({
        data: {
          email: u.email,
          firstName: u.firstName,
          lastName: u.lastName,
          address: u.address,
        },
      })
    )
  );
  const user = await db.user.findFirst({
    where: {
      firstName: 'Mikhael',
    },
  });

  await Promise.all(
    getProducts().map((p) =>
      db.product.create({
        data: {
          name: p.name,
          description: p.description,
          price: p.price,
          userId: user!.id,
        },
      })
    )
  );
}

main()
  .then(() => db.$disconnect)
  .catch(async (e) => {
    console.error(e);
    db.$disconnect;
    process.exit(1);
  });
