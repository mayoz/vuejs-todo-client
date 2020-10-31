import store from '@/store';
import * as types from '@/store/mutation-types';

describe('mutations', () => {
  it('SET_ITEMS', () => {
    const state = {
      items: [],
    };
    const items = [
      {
        id: 1, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
      },
      {
        id: 2, text: 'bar', completed: true, created_at: '2020-10-30 00:00:00',
      },
    ];

    store.mutations[types.SET_ITEMS](state, items);

    expect(state).toEqual({
      items: [
        {
          id: 1, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
        {
          id: 2, text: 'bar', completed: true, created_at: '2020-10-30 00:00:00',
        },
      ],
    });
  });

  it('ADD_ITEM', () => {
    const state = {
      items: [
        {
          id: 1, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
      ],
    };
    const item = {
      id: 2, text: 'bar', completed: true, created_at: '2020-10-30 00:00:00',
    };

    store.mutations[types.ADD_ITEM](state, item);

    expect(state).toEqual({
      items: [
        {
          id: 1, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
        {
          id: 2, text: 'bar', completed: true, created_at: '2020-10-30 00:00:00',
        },
      ],
    });
  });

  it('TOGGLE_ITEM', () => {
    const state = {
      items: [
        {
          id: 1, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
      ],
    };

    store.mutations[types.TOGGLE_ITEM](state, 1);

    expect(state).toEqual({
      items: [
        {
          id: 1, text: 'foo', completed: false, created_at: '2020-10-30 00:00:00',
        },
      ],
    });
  });

  it('REMOVE_ITEM', () => {
    const state = {
      items: [
        {
          id: 1, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
        {
          id: 2, text: 'bar', completed: true, created_at: '2020-10-30 00:00:00',
        },
      ],
    };

    store.mutations[types.REMOVE_ITEM](state, 1);

    expect(state).toEqual({
      items: [
        {
          id: 2, text: 'bar', completed: true, created_at: '2020-10-30 00:00:00',
        },
      ],
    });
  });
});
