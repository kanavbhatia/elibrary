<template>
    <div>
        <figure>
            <img src='https://openlibrary.org/static/images/openlibrary-logo-tighter.svg'>
        </figure>
            <div><h1>Login below using google</h1></div>
        <div id ='sign_in' class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        <!-- <button onclick="signOut">Sign out</button> -->
    </div>
</template>

<script>
// eslint-disable-next-line 
/* eslint-disable */
/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/
export default {
    name: 'login',
}
</script>

<style scoped>
figure{
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%
}
h1{
    text-align: center
}
</style>
<style >
.g-signin2{
    padding-top: 30px !important;
}
.abcRioButtonBlue{
    margin-left: 40% !important;
    margin-right: 40% !important;
    width: 20% !important;
}
.abcRioButton{
        margin-left: 40% !important;
    margin-right: 40% !important;
    width: 20% !important;
}
.abcRioButtonIcon{
    width: 20% !important;
    /* padding: 0px !important; */
}
.abcRioButtonSvg{
    width: 100% !important;
}

</style>
