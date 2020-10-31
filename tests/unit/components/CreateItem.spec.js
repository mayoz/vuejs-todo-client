import { mount } from '@vue/test-utils';
import CreateItem from '@/components/CreateItem.vue';

describe('CreateItem', () => {
  it('should prevent button when input is empty', async () => {
    const wrapper = mount(CreateItem);

    await wrapper.find('input').setValue('');
    expect(wrapper.find('button').attributes('disabled')).toBe('disabled');
    await wrapper.find('input').setValue('test');
    expect(wrapper.find('button').attributes('disabled')).toBe(undefined);
  });

  it('should create a new item', async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = mount(CreateItem, {
      mocks: {
        $store: mockStore,
      },
    });
    const data = 'buy some milks';

    await wrapper.find('input').setValue(data);
    await wrapper.find('button').trigger('click');

    expect(mockStore.dispatch).toHaveBeenCalledWith('storeItem', data);
  });
});
