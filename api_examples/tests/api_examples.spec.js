// @ts-check
import { test, expect } from '@playwright/test';
import usersFixture from '../test-data/usersResponse.json';

test.describe("API Verification Examples", () => {

  //1. Test to verify users endpoint is returning expected users
  // instead of page, we use built-in fixture called request
  test("Verify multiple records return against stored static response", async ({request}) => {
    
  //save raw response into a variable
  const response = await request.get('https://reqres.in/api/users?page=1');

  // parse response into JS object, with access to the actual data within the response body
  const responseBody = await response.json();

  //seeing what is stored inside
  // console.log(responseBody)

  //assert that status code is 200
  expect(response.status()).toBe(200);
  //assert that our json response body is eq to the received response body
  expect(responseBody).toEqual(usersFixture)
  });

});