<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
			  <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="setAgeFn">Edit Age using callback</button>
    </div>
</template>

<script>
    export default {
        props: {
            userAge: Number,
            setAgeFn: Function,
        },
        methods: {
            editAge() {
                this.userAge = 33;
                this.$emit('ageWasEdited', 35); // this is neat because when we emit this event to the parent once, it'll rerender the parent and this child will rerender with 35, but a second time it will not work because the parent won't rerender a second time so the age stays at 33 on the second time.
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
