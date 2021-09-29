<template>
    <nav>
        <ul>
            <li>
                HOME
            </li>
            <li>
                ABOUT
            </li>
            <li id="savebtn" @click="savecntnt">
                SAVE DOCUMENT
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'topMenu',
        props: {
            savecntnt: Function
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        margin-top: 2rem;
    }

    #savebtn {
        border: 1px solid black;
        border-radius: 0.5rem;
        padding: 0.2rem 1rem;
    }

    #savebtn:hover {
        background: rgb(143, 146, 146);
        color: black;
    }
</style>
