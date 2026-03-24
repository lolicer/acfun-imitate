<script setup lang="ts">
import { computed } from 'vue'
import { ElInput } from 'element-plus'

defineOptions({
    name: 'CommentEditor'
})

const props = withDefaults(
    defineProps<{
        modelValue: string
        placeholder?: string
        maxlength?: number
        buttonText: string
        disabled?: boolean
        minHeight?: string
    }>(),
    {
        placeholder: '',
        maxlength: 1000,
        disabled: false,
        minHeight: '72px'
    }
)

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
    (event: 'submit'): void
}>()

const valueProxy = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
})
</script>

<template>
    <div class="comment-editor">
        <ElInput
            v-model="valueProxy"
            type="textarea"
            resize="none"
            class="editor-textarea"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :autosize="{ minRows: 3 }"
            :input-style="{ minHeight: minHeight }"
        />
        <div class="editor-actions">
            <span class="editor-tip">
                {{ valueProxy.length }}/{{ maxlength }}
            </span>
            <button
                class="editor-submit-btn"
                type="button"
                :disabled="disabled"
                @click="emit('submit')"
            >
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.comment-editor {
    padding: 12px;
    border: 1px solid var(--color-gray-3);
    border-radius: 8px;
}

.editor-textarea {
    width: 100%;
    --el-input-border-color: transparent;
    --el-input-hover-border-color: transparent;
    --el-input-focus-border-color: transparent;
    --el-input-focus-border: 0;
    --el-input-border: 0;
}

.editor-actions {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.editor-tip {
    color: var(--color-gray-1);
    font-size: 13px;
}

.editor-submit-btn {
    border: none;
    border-radius: 18px;
    padding: 8px 14px;
    font-size: 13px;
    cursor: pointer;
    color: white;
    background-color: var(--color-acfun);
}

.editor-submit-btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>
