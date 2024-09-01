import Buyable from './Buyable';

export default class Cart {
	private _items: Buyable[] = [];


	add(item: Buyable): void {
		this._items.push(item);
	}


	get items(): Buyable[] {
		return [...this._items];
	}


	totalCost(): number {
		return this._items.reduce((total, item) => total + item.price, 0);
	}


	totalCostWithDiscount(discount: number): number {
		const total = this.totalCost();
		return total - (total * (discount / 100));
	}


	removeItem(id: number): void {
		this._items = this._items.filter(item => item.id !== id);
	}
}