const pinyin = require("pinyin");

export const state = ()=>({
    currentTest: false, // ID of the currently ongoing test
    testData: false, // object containing name + vocab
    currentProblem: false, // current problem { question, answer, type }
    testProgress: false // current test's progress by flashcard - { stage, progress { [c-e][c-e] } }
})

export const mutations = {
    switchTest(state, {testID, test}){
        // clear everything
        state.currentTest = false;
        state.testData = false;
        state.currentProblem = false;
        state.testProgress = false;
        // reassign
        state.currentTest = testID;
        state.testData = test;
        state.testProgress = JSON.parse( localStorage.getItem(testID) || '{}' );
    },
    setDefaultProgress(state, flashcardID){
        state.testProgress[flashcardID] = {
            stage: 1,
            progress: {
                pe:0, ec:0, cp: 0,
                pc:0, ep:0, ce: 0
            }
        }
    },
    setCurrentProblem(state, problem){
        state.currentProblem = problem;
    },
  saveQuestion(state){
    const ptype = state.currentProblem.type;
    const id = state.currentProblem.id;
    state.testProgress[id].progress[ptype]++;

    // see if you need to update stage
    let done = true;
    const concerns = problemTypes[state.testProgress[id].stage];
    for (const i of concerns){
      if (state.testProgress[id].progress[i] !== 3) done = false;
    }

    if (done) state.testProgress[id].stage++;
    localStorage.setItem(state.currentTest, JSON.stringify(state.testProgress));
    // dispatch('nextProblem'); // this will be dispatched by the continue button
  }
}

export const actions = {
    switchTest({state, commit, dispatch}, {testID, test}){
        // first wrap up prev test, if it existed
            if (state.currentTest){
                localStorage.setItem(state.currentTest, JSON.stringify(state.testProgress));
            }
            commit('switchTest', {testID, test})
            dispatch('nextProblem')
    },
    nextProblem({state, commit, getters}){
        if (getters.currentTestOver){
          state.currentProblem = false;
          return;
        }
        let foundCard = false;
        let flashcardID;
        while (!foundCard){
            // pick random flashcard from testData
            console.log(state.testData);
            [flashcardID] = getRandom(Object.keys(state.testData.words), 1);
            // check if it needs practice
            if (!state.testProgress[flashcardID]){ foundCard = true; break}
            if (state.testProgress[flashcardID].stage < 4) foundCard = true;
        }

        if (!state.testProgress[flashcardID]) {
            commit('setDefaultProgress', flashcardID)
        }

        let foundType = false;
        let pType;
        while (!foundType){
            // pick random problem type from stage data
            [pType] = getRandom(problemTypes[state.testProgress[flashcardID].stage], 1);

            if (state.testProgress[flashcardID].progress[pType] < 3){ foundType = true; break;}
        }
        // now we have a flashcard and problem type
        const problem = {
            type: pType,
            id: flashcardID,
            question:{}, answer:{}
        };
        const flashcard = state.testData.words[flashcardID];
        // generate question
        const qType = pType[0];
        problem.question.type = qType;
        switch (qType) {
            case 'c':
                problem.question.data = flashcard.hanzi;
                break;
            case 'p':
                problem.question.data = pinyin(flashcard.hanzi).map(e=>e.join(' ')).join(' ')
                break;
            case 'e':
                problem.question.data = flashcard.definition;
        }
        // generate answer
        const aType = pType[1];
        problem.answer.type = aType;
        switch (aType) {
            case 'c':
                problem.answer.data = flashcard.hanzi;
                break;
            case 'p':
                problem.answer.data = flashcard.pinyin
                break;
            case 'e':
                const defs = getRandom(Object.values(state.testData.words), 4).map(e=>e.definition);
                if (!defs.includes(flashcard.definition)) defs[pickIndex()] = flashcard.definition;
                problem.answer.data = {options: defs, answer: flashcard.definition};
        }
        problem.oti = Date.now();

        commit('setCurrentProblem', problem)
    },
}

export const getters = {
  currentTestOver: (state, getters) => {
    return getters.currentTestProgress === 1;
  },
  currentTestProgress: (state) => {
    if (!state.testData) return 0;
    const max = Object.keys(state.testData.words).length;
    let c = 0;
    for (const w of Object.keys(state.testData.words)){
      if (state.testProgress[w] && state.testProgress[w].stage === 4){
        c++;
      }
    }
    return c/max
  }
}

function pickIndex(){
    return getRandom([0,1,2,3], 1)
}

const problemTypes = {
    '1': ['pe', 'cp'],
    '2': ['ce', 'ep'],
    '3': ['pc', 'ec']
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
