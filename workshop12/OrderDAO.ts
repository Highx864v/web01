import { BaseDAO } from './BaseDAO.ts';
import { ProductDAO } from './ProductDAO.ts';
import { Order } from './Order.ts';

export class OrderDAO extends BaseDAO {

    private productDAO: ProductDAO;
    
    constructor() {
        super();
        this.productDAO = new ProductDAO(this.db);
    }

    protected initTable(): void {
        this.db.exec(`CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            total_price REAL NOT NULL
        )`);
    }

    public createOrder(
        product: string,
        quantity: number
    ): Order {

        const productRow = this.db.prepare(`
            SELECT *
            FROM products
            WHERE name = ?
            ORDER BY id DESC
            LIMIT 1
        `).get(product) as {
            id: number;
            name: string;
            price: number;
            stock: number;
        } | undefined;

        if (!productRow) {
            throw new Error(`Product not found: ${product}`);
        }

        if (productRow.stock < quantity) {
            throw new Error('Insufficient Stock');
        }

        const transaction = this.db.transaction(() => {

            const totalPrice =
                productRow.price * quantity;

            const orderStmt = this.db.prepare(`
                INSERT INTO orders
                (product_name, quantity, total_price)
                VALUES (?, ?, ?)
            `);

            const result = orderStmt.run(
                productRow.name,
                quantity,
                totalPrice
            );

            this.productDAO.updateStock(
                productRow.id,
                productRow.stock - quantity
            );

            return new Order(
                Number(result.lastInsertRowid),
                productRow.name,
                quantity,
                totalPrice
            );
        });

        return transaction();
    }
}