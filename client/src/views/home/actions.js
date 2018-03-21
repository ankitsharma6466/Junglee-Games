export const TEST = 'TEST';

export const showTestMessage = (message) => {
  return {
    type: TEST,
    payload: message
  }
};