const addTask = {
    type: 'tasks/addTask',
    payload: {
        id: 'Generated id',
        text: 'User entered text',
        completed: false,
    }
};

const deleteTask = {
    type: 'tasks/deleteTask',
    payload: 'Task id',
};

const toggleCompleted = {
    type: 'tasks/toggleCompleted',
    payload: 'Task id',
};

const setStatusFilter = {
    type: 'filters/setStatusFilter',
    payload: 'Filter value',
};