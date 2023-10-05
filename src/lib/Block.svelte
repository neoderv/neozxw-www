<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 500px;

        box-shadow: var(--shadow-1);

        padding: 10px;
        margin-top: 10px;
    }
</style>

<div class='main'>
    <slot />
</div>
