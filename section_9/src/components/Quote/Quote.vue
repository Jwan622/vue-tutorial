<template>
    <div>
			<div class="title">
				<slot name="title"></slot>
				<!--the above is a way to name the slot-->
				<span style="color: #ccc"><slot name="subtitle"> The Subtitle </slot></span>
			</div>
			<hr>
			<div>
				<slot></slot>
				<!--this is a default slot without a name-->
			</div>
    </div>
</template>

<script>
</script>

<style scoped>
	div {
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}

	h2 {
		color: red;
		/*this is done here because the slot is actually compiled as part of the child.*/
	}

	.title {
		font-style: italic;
	}
</style>

