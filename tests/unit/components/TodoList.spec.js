import { mount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList', () => {
  it('should show not found message', async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = await mount(TodoList, {
      computed: {
        items: () => [],
      },
      mocks: {
        $store: mockStore,
      },
    });

    expect(mockStore.dispatch).toHaveBeenCalledWith('fetchItems');
    expect(wrapper.text()).toContain('No found any items');
  });

  it('should delete when click button', async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = await mount(TodoList, {
      computed: {
        items: () => [
          {
            id: 1001, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
          },
        ],
      },
      mocks: {
        $store: mockStore,
      },
    });

    expect(mockStore.dispatch).toHaveBeenCalledWith('fetchItems');
    expect(wrapper.text()).toContain('foo');
  });
});
