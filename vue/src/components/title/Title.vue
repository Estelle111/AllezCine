<template>
    <h3 id="title">{{ text }}</h3>
</template>

<script>


export default {
	name: 'Title',
	props: ['text'],
}
</script>

<style>
	#title {
		font-weight: bold;
	}
</style>