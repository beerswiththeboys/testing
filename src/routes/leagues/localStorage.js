import { writable } from "svelte/store";

export const localStore = (key, initialValue) => {
  const store = writable(initialValue);

  // Function to convert data to string for storage
  const toString = (value) => JSON.stringify(value, null, 2);

  // Function to convert string back to object
  const toObj = JSON.parse;

  // Check if data exists in local storage
  if (
    typeof window !== "undefined" &&
    window.localStorage.getItem(key) === null
  ) {
    typeof window !== "undefined" &&
      window.localStorage.setItem(key, toString(initialValue)); // Initialize local storage
  }

  // Subscribe to store updates and save to local storage
  store.subscribe((value) => {
    typeof window !== "undefined" &&
      window.localStorage.setItem(key, toString(value));
  });

  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update,
  };
};
