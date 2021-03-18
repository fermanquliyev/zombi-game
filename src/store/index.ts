import { createStore } from "vuex";

export default createStore({
  state: {
    uiState: "start",
    characterChoices: ["baker", "mechanic", "artist"],
    selectedCharacter: "",
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: `What's your dog's name?`,
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: `What's your favorite hobby?`,
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: `What's your favorite color?`,
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    pickCharacter(state, character) {
      state.selectedCharacter = character;
    },
    updateUiState(state, uiState) {
      state.uiState = uiState;
    },
    giveAnswer(state, character) {
      if (character === state.selectedCharacter) {
        state.score += 13;
      } else {
        state.score -= 13;
      }
      if (state.questionIndex < state.questions.length - 1) {
        state.questionIndex++;
      } else {
        Math.sign(state.score) > 0
          ? (state.uiState = "won")
          : (state.uiState = "lost");
      }
    },
    resetGame(state) {
      state.uiState = "start";
      state.selectedCharacter = "";
      state.questionIndex = 0;
      state.score = 0;
    },
  },
  actions: {},
  modules: {},
});
