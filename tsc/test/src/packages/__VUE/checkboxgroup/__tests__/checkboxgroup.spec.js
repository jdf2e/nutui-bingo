import { mount } from '@vue/test-utils';
import Checkboxgroup from '../index.vue';
test('prop label', () => {
    const wrapper = mount(Checkboxgroup, {
        props: {
            disabled: true
        }
    });
    expect(wrapper.html()).toMatchSnapshot();
});
