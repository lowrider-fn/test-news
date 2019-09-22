<template>
    <div class="field">
        <label class="field__label">
            {{ label }}
        </label>
        <textarea class="field__input"
                  :value="value"
                  :type="type"
                  :placeholder="placeholder"
                  @input="$emit('input',$event.target.value)"
        ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type   : String,
            default: 'text',
        },
        value: {
            type: [Number, String],
        },
        label: {
            type: [Number, String],
        },
        placeholder: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
