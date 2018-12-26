import IEntityState from '../models/IEntityState';

export default class EntityUtility {

    public static add<T>(list: T[], propertyName: string, existingEntity: IEntityState<T> = null): IEntityState<T> {
        const blankEntity: IEntityState<T> = {
            ids: [],
            entities: {},
            length: 0,
            ...existingEntity,
        };

        return list.reduce((entity: IEntityState<T>, currentItem: T) => {
            const propertyValueForId: string | number = currentItem[propertyName];

            entity.ids = entity.ids.includes(propertyValueForId) ? entity.ids : [...entity.ids, propertyValueForId];
            entity.entities[propertyValueForId] = currentItem;
            entity.length = entity.ids.length;

            return entity;
        }, blankEntity);
    }

}
