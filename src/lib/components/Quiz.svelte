<style>
  .container {
    background-color: var(--light-gray);
    padding: 10px;
  }

  .counter-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .answers-container {   
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .button-is-correct {
    background-color: var(--green);
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  export let answers;
  export let correctAnswer;
  export let numbCorrectAnswers;
  export let currentQuestion;
  export let totalQuestions;

  let isCorrect = false;
  let answered = false;
  const dispatch = createEventDispatcher();

  const onClick = (answer) => {
    answered = answer;
    isCorrect = answer === answers[correctAnswer];
    dispatch('click', {answer, isCorrect});
  }

  $: answered = currentQuestion === -1;

</script>

<div class="container">
  <div class="counter-container">
    <small>{currentQuestion + 1} of {totalQuestions}</small>
    <small>Correct {numbCorrectAnswers}</small>
  </div>

  <div class="answers-container">
    {#if answered}
      <button disabled style="color: white;background-color: var(--{isCorrect ? 'green': 'red'});">{answered}</button>
    {:else}
      {#each answers as answer}
        <button on:click={() => onClick(answer)}>{answer}</button>
      {/each}
    {/if}
  </div>
</div>