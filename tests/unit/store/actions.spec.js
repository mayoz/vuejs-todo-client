import store from '@/store';
import * as types from '@/store/mutation-types';

jest.mock('@/api', () => ({
  fetch: jest.fn(() => Promise.resolve(['foo'])),
  store: jest.fn(() => Promise.resolve(['bar'])),
  toggle: jest.fn(() => Promise.resolve({})),
  destroy: jest.fn(() => Promise.resolve({})),
}));

describe('actions', () => {
  it('fetchItems', async () => {
    const commit = jest.fn();

    await store.actions.fetchItems({ commit });

    expect(commit).toHaveBeenCalledWith(types.SET_ITEMS, ['foo']);
  });

  it('storeItem', async () => {
    const commit = jest.fn();

    await store.actions.storeItem({ commit }, 'foo');

    expect(commit).toHaveBeenCalledWith(types.ADD_ITEM, ['bar']);
  });

  it('toggleItem', async () => {
    const commit = jest.fn();
    const id = 1;

    await store.actions.toggleItem({ commit }, id);

    expect(commit).toHaveBeenCalledWith(types.TOGGLE_ITEM, id);
  });

  it('destroyItem', async () => {
    const commit = jest.fn();
    const id = 1;

    await store.actions.destroyItem({ commit }, id);

    expect(commit).toHaveBeenCalledWith(types.REMOVE_ITEM, id);
  });
});
