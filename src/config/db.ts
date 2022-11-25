import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'warn', 'error'],
  errorFormat: 'pretty',
});

const movieDB = () => {
  try {
    prisma.$connect();
    console.log('Database Connected !');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const userDB = () => {
  try {
    prisma.$connect();
    console.log('Database Connected !');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { prisma, movieDB ,userDB};