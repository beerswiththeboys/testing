<script>
    import { onMount } from 'svelte';
    import { redirect } from '@sveltejs/kit';
    // import { localStore } from './localStorage';
    export let data;
    const {leagueName,
    leagueId,} = data;
    let leagues = [
        { id: 1, name: 'Legend League' },
        { id: 2, name: 'Big Beer Week' },
        { id: 3, name: 'League 3' }
    ];
    function saveLeague(league) {
       
       sessionStorage.setItem('selectedLeague', JSON.stringify(league));
        redirect(307, '/');
      
    }

  
</script>

<div class="container">
    <p>{leagueName}</p>
    {#each leagues as league}
        <div class="card" on:click={() => saveLeague(league)}>
            <h3>{league.name}</h3>
            <p>ID: {league.id}</p>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }

    .card {
        background-color: #0182c3;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .card:hover {
        background-color: #fff;
        border: 2px solid #0182c3;
    }

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #000;
    }

    p {
        font-size: 14px;
        color: #666;
    }
</style>