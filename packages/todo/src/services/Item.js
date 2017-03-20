import { CRUDServiceContainer } from 'octobus-crud';
import { Store } from 'octobus-mongodb-store';
import itemSchema from '../schemas/item';

class Item extends CRUDServiceContainer {
  constructor(options) {
    super(
      new Store({
        db: options.mongoDb,
        refManager: options.refManager,
        collectionName: 'TodoItem',
      }),
      itemSchema,
    );
  }
}

export default Item;