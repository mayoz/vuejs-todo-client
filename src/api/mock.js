import { v4 as uuidv4 } from 'uuid';

let mockData = {};

export default {
  init(data) {
    mockData = data;
  },
  fetch() {
    return new Promise((resolve) => {
      resolve(Object.values(mockData));
    });
  },
  store(text) {
    return new Promise((resolve) => {
      const id = uuidv4();

      mockData[id] = {
        id,
        text,
        completed: false,
        created_at: new Date().toISOString(),
      };

      resolve(mockData[id]);
    });
  },
  toggle(id) {
    return new Promise((resolve, reject) => {
      if (id in mockData) {
        mockData[id].completed = !mockData[id].completed;
        resolve(mockData[id]);
      }
      reject(new Error('Not found'));
    });
  },
  destroy(id) {
    return new Promise((resolve, reject) => {
      if (id in mockData) {
        delete mockData[id];
        resolve();
      }
      reject(new Error('Not found'));
    });
  },
};
