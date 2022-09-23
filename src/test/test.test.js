//const addUser = require('../web/js/main2')

const addUser = require("../web/js/main2");
const fetchUser = require("../web/js/main2");


const mockUsers = new addUser();

describe("Set local storage item", () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

test("data is added into local storage", () => {
    const mockId = "1";
    const mockJson = { data: mockUsers.getItem('id') };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
});