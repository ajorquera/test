<script>
  import Ad from "./components/Ad.svelte";
  import Header from "./components/Header.svelte";
  import Quiz from "./components/Quiz.svelte";
  import ScrollOverflow from "./components/ScrollOverflow.svelte";
  
  export let data;
  let currentQuestion = 0;
  let numbCorrectAnswers = 0;
  let totalQuestions = data.questions.length;
  let question = data.questions[currentQuestion];
  let isQuizAnswered = false;
  let isQuizAnsweredCorrectly = false;
  let isQuizFinished = false;
  const onAnswer = (e) => {
    const {isCorrect} = e.detail;
    isQuizAnswered = true;

    if(isCorrect) {
      numbCorrectAnswers++;
    }

    isQuizAnsweredCorrectly = isCorrect
  }

  const onNext = () => {
    
    if(!isQuizFinished) {
      currentQuestion++;
      isQuizAnswered = false;
      question = data.questions[currentQuestion];
    }
    isQuizFinished = (currentQuestion + 1) >= data.questions.length;
  }
</script>

<div class="container">
  <ScrollOverflow maxHeight="350" active={!isQuizAnswered}>
    <Header title={data.quizTitle} description={question.question} />
    <Quiz on:click={onAnswer} {currentQuestion} {numbCorrectAnswers} {totalQuestions} answers={question.answers} correctAnswer={question.correctAnswer} />
    {#if isQuizAnswered}
    <span style="color: white;background-color: var(--{isQuizAnsweredCorrectly?'green':'red'});">{isQuizAnsweredCorrectly ? question.messageForCorrectAnswer : question.messageForIncorrectAnswer}</span>
    <p>{question.explanation}</p>
    {#if !isQuizFinished}
      <button on:click={onNext} class="button">Next</button>
    {/if}
    {/if}
  </ScrollOverflow>
  {#if !isQuizAnswered}
    <Ad />
  {/if}
</div>

<style>
  .button {
    background-color: var(--dark-gray);
    color: var(--white);
    width: 80%;
    margin-top: 30px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 600px;
  }

  :global(:root){
    --black: #000000ff;
    --green: #6be736;
    --red: #ff0000ff;
    --dark-gray: #595959ff;
    --light-gray: #eeeeeeff;
    --white: white;
  }
</style>
