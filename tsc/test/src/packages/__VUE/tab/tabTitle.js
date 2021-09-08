import { h } from 'vue';
export default {
    setup(props) {
        return () => h(`view`, {}, props.slots);
    },
    props: {
        slots: Object
    }
};
