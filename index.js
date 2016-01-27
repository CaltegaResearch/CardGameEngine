Game = (function(){
    var internal_state = {};
    var history = [];

    function viewState(){
        return reduce(history, internal_state);
    }

    function viewHistory(){
        return history;
    }

    function setHistory(new_history){
        history = new_history;
    }

    function reduce(actions = [], state = {}) {
        if (actions.length == 0) {
            return state;
        }

        var new_state = reducer(actions[0], state);
        return reduce(actions.slice(1), new_state);
    }

    function reducer(action, state){
        return Actions[action](state);
    }

    function addAction(action){
        history = [...history, action];
    }

    return {
        viewState: viewState,
        viewHistory: viewHistory,
        setHistory: setHistory,
        addAction: addAction
    }
})();
