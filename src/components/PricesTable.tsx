import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Building a website",
    totalAmount: "40 $/hr",
  },
  {
    invoice: "E-commerce store",
    totalAmount: "40 $/hr",
  },
  {
    invoice: "Landing pages",
    totalAmount: "30 $/hr",
  },
  {
    invoice: "Graphic design (posts, logos, etc)",
    totalAmount: "10 $/hr",
  },
  {
    invoice: "Promotion video (30 s)",
    totalAmount: "30 $/hr",
  },
];
export function PricesTable() {
  return (
    <Table className=" text-xs xs:text-sm mt-12">
      <TableCaption>Prices Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Services</TableHead>
          <TableHead className="text-right">Max Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
