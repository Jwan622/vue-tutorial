<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>UserName: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from "../main";
    export default {
        props: {
            myName: {
                type: String,
            },
            resetFn: Function,
            userAge: Number,
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName); // this emits an event instead of using a callback. both are ways to talk to the parent component
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
               this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
