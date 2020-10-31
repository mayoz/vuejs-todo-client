import { mount } from '@vue/test-utils';
import TodoItem from '@/components/TodoItem.vue';

describe('TodoItem', () => {
  it('should toggle when click text', async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = mount(TodoItem, {
      propsData: {
        item: {
          id: 1001, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
      },
      mocks: {
        $store: mockStore,
      },
    });

    await wrapper.find('span').trigger('click');

    expect(mockStore.dispatch).toHaveBeenCalledWith('toggleItem', 1001);
  });

  it('should delete when click button', async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = mount(TodoItem, {
      propsData: {
        item: {
          id: 1001, text: 'foo', completed: true, created_at: '2020-10-30 00:00:00',
        },
      },
      mocks: {
        $store: mockStore,
      },
    });

    await wrapper.find('button').trigger('click');

    expect(mockStore.dispatch).toHaveBeenCalledWith('destroyItem', 1001);
  });
});
