<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is: {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :my-name="name"
                                 @nameWasReset="name = $event"
                                 :resetFn="resetName"
                                 :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age = $event" :setAgeFn="setAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: "default name  from parent Max",
                age: 28,
            };
        },
        methods: {
            changeName() {
                this.name = "name was Changed to Anna";
            },
            resetName() {
                this.name = "Max from reset name in parent"
            },
            setAge() {
                this.age = 29; //this is a callback to change age whereas ageWasEdited using hte @ sign which is v-on, is using the event emitted mehtod
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
