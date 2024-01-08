import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductCard({productName, productDescription, productPrice}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{productDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>${productPrice}</p>
      </CardContent>
      <CardFooter>
        <button className="bg-green-400 rounded-md px-6 py-2">Buy Now</button>
      </CardFooter>
    </Card>
  );
}
