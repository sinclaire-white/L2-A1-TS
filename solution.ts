function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((u) => u.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailavle: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailavle ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

type NumOrStrArray = (number | string)[];

function getUniqueValues(
  arr1: NumOrStrArray,
  arr2: NumOrStrArray
): NumOrStrArray {
  const result: NumOrStrArray = [];

  arr1.forEach((val) => {
    let exists = false;

    result.forEach((r) => {
      if (r === val) {
        exists = true;
      }
    });
    if (!exists) {
      result.push(val);
    }
  });

  arr2.forEach((val) => {
    let exists = false;

    result.forEach((r) => {
      if (r === val) {
        exists = true;
      }
    });
    if (!exists) {
      result.push(val);
    }
  });
  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const total = products
    .map((p) => {
      const basePrice = p.price * p.quantity;

      if (p.discount) {
        const discountAmount = (basePrice * p.discount) / 100;
        return basePrice - discountAmount;
      }

      return basePrice;
    })
    .reduce((sum, val) => sum + val, 0);

  return total;
}

