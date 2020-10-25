<template>
    <div>
        user
        <h1>{{ user.name }}</h1>
    </div>
</template>
<script>
export default {
    props: {
        user: Object,
    },
}
</script>