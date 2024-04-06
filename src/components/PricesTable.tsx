import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "Landing pages",
        paymentStatus: "$30",
        totalAmount: "$80",
        paymentMethod: "$125",
    },
    {
        invoice: "Logo design",
        paymentStatus: "$10",
        totalAmount: "$25",
        paymentMethod: "$175",
    },
    {
        invoice: "Promotion video (short)",
        paymentStatus: "$10",
        totalAmount: "$30",
        paymentMethod: "$70",
    },
    {
        invoice: "Social media content (30 days)",
        paymentStatus: "-",
        totalAmount: "$130",
        paymentMethod: "$250",
    },
    {
        invoice: "E-commerce store",
        paymentStatus: "-",
        totalAmount: "$80",
        paymentMethod: "$100",
    },
    {
        invoice: "Website conception",
        paymentStatus: "$80",
        totalAmount: "$120",
        paymentMethod: "$300",
    },
    {
        invoice: "Graphic design (1 item)",
        paymentStatus: "$5",
        totalAmount: "$30",
        paymentMethod: "$80",
    },
    {
        invoice: "Short video editing",
        paymentStatus: "$5",
        totalAmount: "$20",
        paymentMethod: "-",
    },
]

export function PricesTable() {
    return (
        <Table className=' text-xs xs:text-sm mt-12' >
            <TableCaption>Prices Table</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >Services</TableHead>
                    <TableHead>Min Price</TableHead>
                    <TableHead>Average</TableHead>
                    <TableHead className='text-right'>Max Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
